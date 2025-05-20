import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowUpRight } from "lucide-react"

// Mock data for featured events
const featuredEvents = [
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
]

export default function FeaturedEvents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredEvents.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id} className="group">
          <Card className="h-full overflow-hidden card-hover border-primary/10">
            <div className="relative">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-4 w-4 text-primary" />
              </div>
            </div>
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {event.category}
                  </Badge>
                  <Badge variant="outline" className="border-primary/20 text-primary/80">
                    {event.subcategory}
                  </Badge>
                </div>
                <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{event.title}</h3>
                <p className="text-muted-foreground">{event.organizer}</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 text-primary/70" />
                  <span>
                    {event.date} - {event.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary/70" />
                  <span>{event.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 text-primary/70" />
                  <span>Kontenjan: {event.capacity} kişi</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
