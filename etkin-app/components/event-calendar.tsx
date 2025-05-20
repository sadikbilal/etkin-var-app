"use client"

import { useState } from "react"
import Link from "next/link"
import { CalendarIcon, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Mock data for calendar events
const calendarEvents = [
  {
    id: 1,
    title: "Yapay Zeka 101",
    category: "Yazılım",
    date: "2025-06-15",
    time: "14:00",
    location: "Kapsül Teknoloji Platformu",
  },
  {
    id: 2,
    title: "Kariyer Günleri",
    category: "Kariyer",
    date: "2025-06-20",
    time: "10:00",
    location: "Merkez Kampüs Konferans Salonu",
  },
  {
    id: 3,
    title: "Müzik Festivali",
    category: "Sanat",
    date: "2025-06-25",
    time: "18:00",
    location: "Kampüs Amfi Tiyatro",
  },
  {
    id: 4,
    title: "Web Geliştirme Workshop",
    category: "Yazılım",
    date: "2025-06-18",
    time: "15:30",
    location: "Bilgisayar Mühendisliği Lab",
  },
  {
    id: 5,
    title: "Girişimcilik Paneli",
    category: "Kariyer",
    date: "2025-06-22",
    time: "13:00",
    location: "İşletme Fakültesi",
  },
]

// Helper function to get days in month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate()
}

// Helper function to get day of week (0-6, where 0 is Sunday)
const getDayOfWeek = (year: number, month: number, day: number) => {
  return new Date(year, month, day).getDay()
}

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const currentYear = currentDate.getFullYear()
  const currentMonth = currentDate.getMonth()

  const daysInMonth = getDaysInMonth(currentYear, currentMonth)
  const firstDayOfMonth = getDayOfWeek(currentYear, currentMonth, 1)

  const monthNames = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ]

  const dayNames = ["Pzr", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"]

  const prevMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentYear, currentMonth + 1, 1))
  }

  // Get events for the current month
  const eventsInMonth = calendarEvents.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear
  })

  // Create a map of events by day
  const eventsByDay = eventsInMonth.reduce(
    (acc, event) => {
      const day = new Date(event.date).getDate()
      if (!acc[day]) {
        acc[day] = []
      }
      acc[day].push(event)
      return acc
    },
    {} as Record<number, typeof calendarEvents>,
  )

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">
          {monthNames[currentMonth]} {currentYear}
        </h2>
        <div className="flex gap-1">
          <Button variant="outline" size="icon" onClick={prevMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((day, index) => (
          <div key={index} className="text-center font-medium p-2">
            {day}
          </div>
        ))}

        {/* Empty cells for days before the first day of month */}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={`empty-${index}`} className="p-2 min-h-[100px]"></div>
        ))}

        {/* Calendar days */}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const day = index + 1
          const hasEvents = !!eventsByDay[day]
          const events = eventsByDay[day] || []

          return (
            <div key={`day-${day}`} className={`p-2 min-h-[100px] border rounded-md ${hasEvents ? "bg-muted/50" : ""}`}>
              <div className="font-medium">{day}</div>
              <div className="mt-1 space-y-1">
                {events.slice(0, 2).map((event) => (
                  <Link
                    href={`/events/${event.id}`}
                    key={event.id}
                    className="block text-xs p-1 rounded bg-primary/10 hover:bg-primary/20 truncate"
                  >
                    {event.time} - {event.title}
                  </Link>
                ))}
                {events.length > 2 && <div className="text-xs text-muted-foreground">+{events.length - 2} daha</div>}
              </div>
            </div>
          )
        })}
      </div>

      <Card className="mt-4">
        <CardContent className="p-4">
          <h3 className="font-medium mb-2">Bugünkü Etkinlikler</h3>
          <div className="space-y-2">
            {eventsInMonth.length > 0 ? (
              eventsInMonth.map((event) => (
                <Link
                  href={`/events/${event.id}`}
                  key={event.id}
                  className="flex items-center justify-between p-2 hover:bg-muted rounded-md"
                >
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{event.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{event.category}</Badge>
                    <span className="text-sm text-muted-foreground">{event.time}</span>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-muted-foreground">Bu ay için etkinlik bulunamadı.</p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
