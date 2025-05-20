import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

// Mock data for events (same as event-grid.tsx)
const events = [
  {
    id: 1,
    title: "Yapay Zeka 101",
    category: "Yazılım",
    subcategory: "Yapay Zeka",
    date: "15/06/2025",
    time: "14:00",
    location: "Kapsül Teknoloji Platformu",
    capacity: 100,
    organizer: "Bilgisayar Topluluğu",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Kariyer Günleri",
    category: "Kariyer",
    subcategory: "Networking",
    date: "20/06/2025",
    time: "10:00",
    location: "Merkez Kampüs Konferans Salonu",
    capacity: 250,
    organizer: "Kariyer Merkezi",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Müzik Festivali",
    category: "Sanat",
    subcategory: "Müzik",
    date: "25/06/2025",
    time: "18:00",
    location: "Kampüs Amfi Tiyatro",
    capacity: 500,
    organizer: "Müzik Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    title: "Web Geliştirme Workshop",
    category: "Yazılım",
    subcategory: "Web",
    date: "18/06/2025",
    time: "15:30",
    location: "Bilgisayar Mühendisliği Lab",
    capacity: 50,
    organizer: "Yazılım Topluluğu",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    title: "Girişimcilik Paneli",
    category: "Kariyer",
    subcategory: "Girişimcilik",
    date: "22/06/2025",
    time: "13:00",
    location: "İşletme Fakültesi",
    capacity: 150,
    organizer: "Girişimcilik Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EventList() {
  return (
    <div className="flex flex-col gap-4">
      {events.map((event) => (
        <Link
          href={`/events/${event.id}`}
          key={event.id}
          className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors"
        >
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            width={200}
            height={120}
            className="w-full sm:w-48 h-32 object-cover rounded-md"
          />
          <div className="flex flex-col gap-2 flex-1">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{event.category}</Badge>
              <Badge variant="outline">{event.subcategory}</Badge>
            </div>
            <h3 className="font-bold text-xl">{event.title}</h3>
            <p className="text-muted-foreground">{event.organizer}</p>
            <div className="flex flex-wrap gap-4 mt-auto">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>
                  {event.date} - {event.time}
                </span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4" />
                <span>Kontenjan: {event.capacity} kişi</span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
