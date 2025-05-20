import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Award, Settings, Bell, User, Heart, Star } from "lucide-react"
import UserBadges from "@/components/user-badges"
import UserInterests from "@/components/user-interests"
import UserEvents from "@/components/user-events"

// Mock data for user profile
const userProfile = {
  name: "Ahmet Yılmaz",
  email: "ahmet.yilmaz@example.com",
  university: "İstanbul Üniversitesi",
  department: "Bilgisayar Mühendisliği",
  year: "3. Sınıf",
  image: "/placeholder.svg?height=200&width=200",
  eventsAttended: 12,
  upcomingEvents: 3,
  badges: 5,
  points: 240,
}

export default function ProfilePage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex flex-col items-center md:items-start gap-4 md:flex-row">
            <Image
              src={userProfile.image || "/placeholder.svg"}
              alt={userProfile.name}
              width={120}
              height={120}
              className="rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold">{userProfile.name}</h1>
              <p className="text-muted-foreground">{userProfile.university}</p>
              <p className="text-muted-foreground">
                {userProfile.department}, {userProfile.year}
              </p>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4 text-primary" />
                  <span className="text-sm">{userProfile.eventsAttended} Etkinlik</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-sm">{userProfile.badges} Rozet</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-primary" />
                  <span className="text-sm">{userProfile.points} Puan</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 ml-auto">
            <Button asChild variant="outline">
              <Link href="/profile/edit">
                <Settings className="h-4 w-4 mr-2" />
                Profili Düzenle
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/profile/notifications">
                <Bell className="h-4 w-4 mr-2" />
                Bildirimler
              </Link>
            </Button>
          </div>
        </div>

        <Tabs defaultValue="events">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="events">
              <Calendar className="h-4 w-4 mr-2" />
              Etkinliklerim
            </TabsTrigger>
            <TabsTrigger value="badges">
              <Award className="h-4 w-4 mr-2" />
              Rozetlerim
            </TabsTrigger>
            <TabsTrigger value="interests">
              <Heart className="h-4 w-4 mr-2" />
              İlgi Alanlarım
            </TabsTrigger>
            <TabsTrigger value="communities">
              <User className="h-4 w-4 mr-2" />
              Topluluklarım
            </TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="mt-6">
            <UserEvents />
          </TabsContent>

          <TabsContent value="badges" className="mt-6">
            <UserBadges />
          </TabsContent>

          <TabsContent value="interests" className="mt-6">
            <UserInterests />
          </TabsContent>

          <TabsContent value="communities" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Bilgisayar Topluluğu</CardTitle>
                  <CardDescription>3 aydır üye</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Badge>Takip Ediliyor</Badge>
                      <span className="text-sm text-muted-foreground">5 etkinliğe katıldın</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Profil
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Yazılım Kulübü</CardTitle>
                  <CardDescription>6 aydır üye</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Badge>Takip Ediliyor</Badge>
                      <span className="text-sm text-muted-foreground">3 etkinliğe katıldın</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Profil
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle>Müzik Kulübü</CardTitle>
                  <CardDescription>1 aydır üye</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Badge>Takip Ediliyor</Badge>
                      <span className="text-sm text-muted-foreground">1 etkinliğe katıldın</span>
                    </div>
                    <Button variant="outline" size="sm">
                      Profil
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
