import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users } from "lucide-react"

// Mock data for events
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
  {
    id: 6,
    title: "Fotoğrafçılık Atölyesi",
    category: "Sanat",
    subcategory: "Fotoğraf",
    date: "27/06/2025",
    time: "11:00",
    location: "Güzel Sanatlar Fakültesi",
    capacity: 30,
    organizer: "Fotoğrafçılık Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 7,
    title: "Sağlıklı Beslenme Semineri",
    category: "Sağlık",
    subcategory: "Beslenme",
    date: "19/06/2025",
    time: "16:00",
    location: "Tıp Fakültesi Amfisi",
    capacity: 120,
    organizer: "Sağlık Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 8,
    title: "Sinema Gecesi",
    category: "Sanat",
    subcategory: "Sinema",
    date: "21/06/2025",
    time: "20:00",
    location: "Öğrenci Merkezi",
    capacity: 80,
    organizer: "Sinema Kulübü",
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
    organizer: "Mobil Uygulama Kulübü",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function EventGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Link href={`/events/${event.id}`} key={event.id}>
          <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
            <Image
              src={event.image || "/placeholder.svg"}
              alt={event.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">{event.category}</Badge>
                  <Badge variant="outline">{event.subcategory}</Badge>
                </div>
                <h3 className="font-bold text-xl">{event.title}</h3>
                <p className="text-muted-foreground">{event.organizer}</p>
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
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
