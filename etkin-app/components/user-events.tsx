import Link from "next/link"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Download, QrCode } from "lucide-react"

// Mock data for user events
const userEvents = {
  upcoming: [
    {
      id: 1,
      title: "Yapay Zeka 101",
      category: "Yazılım",
      subcategory: "Yapay Zeka",
      date: "15/06/2025",
      time: "14:00",
      location: "Kapsül Teknoloji Platformu",
      organizer: "Bilgisayar Topluluğu",
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
      organizer: "Yazılım Topluluğu",
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
      organizer: "Sağlık Kulübü",
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
      organizer: "Yazılım Topluluğu",
      image: "/placeholder.svg?height=200&width=300",
      certificate: true,
    },
    {
      id: 102,
      title: "Kariyer Planlama",
      category: "Kariyer",
      subcategory: "Kişisel Gelişim",
      date: "05/05/2025",
      time: "11:00",
      location: "Merkez Kampüs Konferans Salonu",
      organizer: "Kariyer Merkezi",
      image: "/placeholder.svg?height=200&width=300",
      certificate: true,
    },
    {
      id: 103,
      title: "Klasik Müzik Konseri",
      category: "Sanat",
      subcategory: "Müzik",
      date: "01/05/2025",
      time: "19:00",
      location: "Kampüs Amfi Tiyatro",
      organizer: "Müzik Kulübü",
      image: "/placeholder.svg?height=200&width=300",
      certificate: false,
    },
  ],
}

export default function UserEvents() {
  return (
    <Tabs defaultValue="upcoming">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="upcoming">Yaklaşan Etkinlikler</TabsTrigger>
        <TabsTrigger value="past">Geçmiş Etkinlikler</TabsTrigger>
      </TabsList>

      <TabsContent value="upcoming" className="mt-6">
        <div className="grid grid-cols-1 gap-6">
          {userEvents.upcoming.map((event) => (
            <div key={event.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
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
                <div className="flex flex-wrap gap-4">
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
                </div>
                <div className="flex gap-2 mt-2">
                  <Button asChild size="sm">
                    <Link href={`/events/${event.id}`}>Detaylar</Link>
                  </Button>
                  <Button variant="outline" size="sm">
                    <QrCode className="h-4 w-4 mr-2" />
                    QR Kod
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="past" className="mt-6">
        <div className="grid grid-cols-1 gap-6">
          {userEvents.past.map((event) => (
            <div key={event.id} className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg">
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
                <div className="flex flex-wrap gap-4">
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
                </div>
                <div className="flex gap-2 mt-2">
                  <Button asChild size="sm">
                    <Link href={`/events/${event.id}`}>Detaylar</Link>
                  </Button>
                  {event.certificate && (
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Sertifika
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  )
}
