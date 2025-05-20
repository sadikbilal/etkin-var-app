import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Share2, CalendarPlus, QrCode, Heart, Clock, Building } from "lucide-react"
import RelatedEvents from "@/components/related-events"

// Mock data for event details
const eventDetails = {
  id: 1,
  title: "Yapay Zeka 101",
  description:
    "Yapay zeka dünyasına giriş yapacağınız bu etkinlikte, temel kavramları öğrenecek ve basit uygulamalar geliştireceksiniz. Etkinlik sonunda katılım sertifikası verilecektir.",
  category: "Yazılım",
  subcategory: "Yapay Zeka",
  date: "15/06/2025",
  time: "14:00",
  duration: "2 saat",
  location: "Kapsül Teknoloji Platformu",
  address: "Merkez Kampüs, B Blok, Kat 2",
  capacity: 100,
  registered: 78,
  organizer: "Bilgisayar Topluluğu",
  organizerId: 5,
  speakers: [
    {
      name: "Prof. Dr. Ahmet Yılmaz",
      title: "Yapay Zeka Uzmanı",
      image: "/images/white_ayzek_selcuk.png?height=100&width=100",
    },
    {
      name: "Mehmet Kaya",
      title: "Veri Bilimci",
      image: "/images/white_ayzek_selcuk.png?height=100&width=100",
    },
  ],
  image: "/images/white_ayzek_selcuk.png?height=%20&width=%20",
  requirements: ["Temel programlama bilgisi", "Kişisel bilgisayar (opsiyonel)", "Python kurulumu (opsiyonel)"],
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Link href="/events" className="text-muted-foreground hover:text-primary">
              Etkinlikler
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>{eventDetails.title}</span>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{eventDetails.category}</Badge>
                <Badge variant="outline">{eventDetails.subcategory}</Badge>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter">{eventDetails.title}</h1>
              <p className="text-muted-foreground mt-1">
                <Link href={`/communities/${eventDetails.organizerId}`} className="hover:text-primary">
                  {eventDetails.organizer}
                </Link>
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button>Katıl</Button>
              <Button variant="outline">
                <CalendarPlus className="h-4 w-4 mr-2" />
                Takvime Ekle
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Image
              src={eventDetails.image || "/images/white_ayzek_selcuk.png"}
              alt={eventDetails.title}
              width={800}
              height={400}
              className="w-full rounded-lg object-cover aspect-video"
            />

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Etkinlik Hakkında</h2>
              <p>{eventDetails.description}</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Konuşmacılar</h2>
              <div className="flex flex-wrap gap-4">
                {eventDetails.speakers.map((speaker, index) => (
                  <div key={speaker.name} className="flex items-center gap-3 p-3 border rounded-lg">
                    <Image
                      src={speaker.image || "/images/white_ayzek_selcuk.png"}
                      alt={speaker.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-medium">{speaker.name}</h3>
                      <p className="text-sm text-muted-foreground">{speaker.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Gereksinimler</h2>
              <ul className="list-disc pl-5 space-y-1">
                {eventDetails.requirements.map((requirement, index) => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">QR Kod ile Giriş</h2>
              <div className="flex items-center gap-4 p-4 border rounded-lg">
                <QrCode className="h-16 w-16 text-primary" />
                <div>
                  <p>Etkinlik günü bu QR kodu göstererek giriş yapabilirsiniz.</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    QR kod, etkinliğe katılım durumunuzu takip etmek ve katılım sertifikanızı almak için
                    kullanılacaktır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="border rounded-lg p-4 space-y-4">
              <h2 className="text-xl font-bold">Etkinlik Detayları</h2>

              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Tarih ve Saat</h3>
                  <p className="text-muted-foreground">
                    {eventDetails.date} - {eventDetails.time}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Süre</h3>
                  <p className="text-muted-foreground">{eventDetails.duration}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Konum</h3>
                  <p className="text-muted-foreground">{eventDetails.location}</p>
                  <p className="text-muted-foreground">{eventDetails.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Building className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Organizatör</h3>
                  <p className="text-muted-foreground">
                    <Link href={`/communities/${eventDetails.organizerId}`} className="hover:text-primary">
                      {eventDetails.organizer}
                    </Link>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Kontenjan</h3>
                  <p className="text-muted-foreground">
                    {eventDetails.registered}/{eventDetails.capacity} kişi
                  </p>
                  <div className="w-full bg-muted rounded-full h-2 mt-2">
                    <div
                      className="bg-primary h-2 rounded-full"
                      style={{ width: `${(eventDetails.registered / eventDetails.capacity) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border rounded-lg p-4">
              <h2 className="text-xl font-bold mb-4">Konum</h2>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <MapPin className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2">Harita</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{eventDetails.address}</p>
            </div>

            <Button className="w-full">Etkinliğe Katıl</Button>
          </div>
        </div>

        <div className="space-y-4 mt-8">
          <h2 className="text-2xl font-bold">Benzer Etkinlikler</h2>
          <RelatedEvents category={eventDetails.category} currentEventId={eventDetails.id} />
        </div>
      </div>
    </div>
  )
}
