import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, MapPin, Users, Award, Bell, QrCode, Code, Terminal, Cpu } from "lucide-react"
import FeaturedEvents from "@/components/featured-events"
import CategoryList from "@/components/category-list"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-accent to-background code-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-2">
                  <Code className="inline-block w-4 h-4 mr-1" /> Kampüs Etkinlik Platformu
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Kampüs Etkinliklerini <span className="gradient-text">Keşfet</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Üniversite kampüslerindeki tüm etkinlikleri keşfet, ilgi alanlarına göre bildirimler al ve
                  katılımlarınla ödüller kazan.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="gap-2">
                  <Link href="/events">
                    <Terminal className="w-4 h-4" />
                    Etkinlikleri Keşfet
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Link href="/register">
                    <Cpu className="w-4 h-4" />
                    Kayıt Ol
                  </Link>
                </Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  <span>100+ Etkinlik</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  <span>50+ Topluluk</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary"></span>
                  <span>1000+ Kullanıcı</span>
                </div>
              </div>
            </div>
            <div className="relative lg:order-last">
              <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary to-secondary blur-xl opacity-20 animate-pulse-slow"></div>
              <div className="relative rounded-xl overflow-hidden border shadow-xl">
                <Image
                  src="/images/white_ayzek_selcuk.png"
                  width={500}
                  height={500}
                  alt="Ayzek Selçuk"
                  className="w-full aspect-video object-contain"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-sm">Yapay Zeka Workshop</h3>
                      <p className="text-xs text-muted-foreground">15 Haziran 2025</p>
                    </div>
                    <Button size="sm" variant="secondary">
                      Katıl
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 rounded-full bg-primary"></div>
            <h2 className="text-3xl font-bold tracking-tighter">Öne Çıkan Etkinlikler</h2>
          </div>
          <p className="text-muted-foreground">Bu haftanın en popüler etkinliklerini keşfet</p>
        </div>
        <FeaturedEvents />
        <div className="flex justify-center mt-8">
          <Button asChild variant="outline" className="group">
            <Link href="/events" className="flex items-center gap-2">
              Tüm Etkinlikleri Gör
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </Button>
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-2 mb-8">
          <div className="flex items-center gap-2">
            <div className="h-1 w-6 rounded-full bg-primary"></div>
            <h2 className="text-3xl font-bold tracking-tighter">Kategoriler</h2>
          </div>
          <p className="text-muted-foreground">İlgi alanlarına göre etkinlikleri keşfet</p>
        </div>
        <CategoryList />
      </section>

      {/* Features */}
      <section className="container px-4 md:px-6 py-12 bg-muted/50 rounded-xl code-pattern">
        <div className="flex flex-col gap-2 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter">
            <span className="gradient-text">Özellikler</span>
          </h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            EtkinVar ile kampüs etkinliklerini keşfetmenin ve katılmanın en kolay yolu
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="card-hover border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Kişiselleştirilmiş Bildirimler</h3>
                <p className="text-muted-foreground">
                  İlgi alanlarına göre etkinlik bildirimleri al ve hiçbir etkinliği kaçırma.
                </p>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-2">
                  <code>notification.subscribe(user.interests)</code>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Takvim Entegrasyonu</h3>
                <p className="text-muted-foreground">
                  Etkinlikleri Google Calendar veya iCal'e ekleyerek programını planla.
                </p>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-2">
                  <code>calendar.addEvent(event.data)</code>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Rozet ve Ödül Sistemi</h3>
                <p className="text-muted-foreground">
                  Etkinliklere katılarak rozetler kazan ve özel ödüllerin sahibi ol.
                </p>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-2">
                  <code>user.awardBadge('event_master')</code>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Lokasyon Bazlı Bildirimler</h3>
                <p className="text-muted-foreground">
                  Kampüs içindeki etkinlikleri harita üzerinde gör ve kolay ulaşım sağla.
                </p>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-2">
                  <code>map.showNearbyEvents(user.location)</code>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Topluluk Profilleri</h3>
                <p className="text-muted-foreground">
                  Toplulukları takip et ve yeni etkinliklerinden anında haberdar ol.
                </p>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-2">
                  <code>user.follow(community.id)</code>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="card-hover border-primary/10">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-2 bg-primary/10 rounded-full">
                  <QrCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">QR Check-in Sistemi</h3>
                <p className="text-muted-foreground">Etkinliklere QR kod ile giriş yap ve katılım sertifikası al.</p>
                <div className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mt-2">
                  <code>event.checkIn(user.id, qrCode)</code>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container px-4 md:px-6">
        <div className="rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 p-6 md:p-12 flex flex-col items-center text-center gap-6 border border-primary/20 card-hover">
          <div className="inline-block rounded-full bg-primary/10 p-3 text-primary">
            <Terminal className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-bold tracking-tighter">Hemen Başla</h2>
          <p className="text-muted-foreground mx-auto max-w-[700px]">
            Kampüs etkinliklerini keşfetmek, ilgi alanlarına göre bildirimler almak ve katılımlarınla ödüller kazanmak
            için hemen kayıt ol.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/register">
                <Code className="w-4 h-4" />
                Kayıt Ol
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Link href="/about">
                <Cpu className="w-4 h-4" />
                Daha Fazla Bilgi
              </Link>
            </Button>
          </div>
          <div className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary mt-2 font-mono">
            <code>// Etkinlikleri keşfetmeye başla</code>
          </div>
        </div>
      </section>
    </div>
  )
}
