import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

interface CommunityEventsProps {
  communityId: number
}

// Mock data for community events
const communityEvents = {
  upcoming: [
    {
      id: 1,
      title: "Yapay Zeka 101",
      category: "Yazılım",
      subcategory: "Yapay Zeka",
      date: "15/06/2025",
      time: "14:00",
      location: "Kapsül Teknoloji Platformu",
      capacity: 100,
      registered: 78,
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
      registered: 32,
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
      capacity: 60,
      registered: 45,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
  past: [
    {
      id: 101,
      title: "JavaScript Temelleri",
      category: "Yazılım",
      subcategory: "Web",
      date: "10/05/2025",
      time: "13:00",
      location: "Bilgisayar Mühendisliği Lab",
      capacity: 50,
      registered: 48,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 102,
      title: "Python ile Veri Analizi",
      category: "Yazılım",
      subcategory: "Veri Bilimi",
      date: "05/05/2025",
      time: "11:00",
      location: "Matematik Bölümü",
      capacity: 40,
      registered: 38,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 103,
      title: "Siber Güvenlik Temelleri",
      category: "Yazılım",
      subcategory: "Siber Güvenlik",
      date: "01/05/2025",
      time: "15:00",
      location: "Bilgisayar Mühendisliği Lab",
      capacity: 60,
      registered: 55,
      image: "/placeholder.svg?height=200&width=300",
    },
  ],
}

export default function CommunityEvents({ communityId }: CommunityEventsProps) {
  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upcoming">Yaklaşan Etkinlikler</TabsTrigger>
        <TabsTrigger value="past">Geçmiş Etkinlikler</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityEvents.upcoming.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id}>
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{event.category}</Badge>
                      <Badge variant="outline">{event.subcategory}</Badge>
                    </div>
                    <h3 className="font-bold text-xl">{event.title}</h3>
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
                      <span>
                        {event.registered}/{event.capacity} kişi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="past" className="mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communityEvents.past.map((event) => (
            <Link href={`/events/${event.id}`} key={event.id}>
              <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow h-full">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">{event.category}</Badge>
                      <Badge variant="outline">{event.subcategory}</Badge>
                    </div>
                    <h3 className="font-bold text-xl">{event.title}</h3>
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
                      <span>
                        {event.registered}/{event.capacity} kişi
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
