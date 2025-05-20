import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

interface RelatedEventsProps {
  category: string
  currentEventId: number
}

// Mock data for related events
const events = [
  {
    id: 4,
    title: "Web Geliştirme Workshop",
    category: "Yazılım",
    subcategory: "Web",
    date: "18/06/2025",
    time: "15:30",
    location: "Bilgisayar Mühendisliği Lab",
    organizer: "Yazılım Topluluğu",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 9,
    title: "Mobil Uygulama Geliştirme",
    category: "Yazılım",
    subcategory: "Mobil",
    date: "24/06/2025",
    time: "14:30",
    location: "Kapsül Teknoloji Platformu",
    organizer: "Mobil Uygulama Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 11,
    title: "Veri Bilimi ve Analitik",
    category: "Yazılım",
    subcategory: "Veri Bilimi",
    date: "28/06/2025",
    time: "13:00",
    location: "Matematik Bölümü",
    organizer: "Veri Bilimi Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function RelatedEvents({ category, currentEventId }: RelatedEventsProps) {
  // Filter events by category and exclude current event
  const relatedEvents = events.filter((event) => event.category === category && event.id !== currentEventId)

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {relatedEvents.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <Badge variant="outline">{event.subcategory}</Badge>
                </div>
                <h3 className="font-bold text-lg">{event.title}</h3>
                <p className="text-sm text-muted-foreground">{event.organizer}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  <span>
                    {event.date} - {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  <span>{event.location}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
