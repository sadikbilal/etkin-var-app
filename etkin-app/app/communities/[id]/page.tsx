import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Calendar, Users, Bell, Award } from "lucide-react"
import CommunityEvents from "@/components/community-events"
import CommunityMembers from "@/components/community-members"
import CommunityGallery from "@/components/community-gallery"

// Mock data for community profile
const communityProfile = {
  id: 5,
  name: "Algoritma ve Yapay Zeka Topluluğu",
  description: "Bilgisayar ve yazılım alanında etkinlikler düzenleyen öğrenci topluluğu.",
  longDescription:
    "Algoritma ve Yapay Zeka Topluluğu, öğrencilerin bilgisayar bilimleri ve yazılım geliştirme alanlarında kendilerini geliştirmelerine yardımcı olmak amacıyla kurulmuştur. Düzenlediğimiz workshop, seminer ve hackathon etkinlikleriyle öğrencilere pratik deneyim kazandırmayı hedefliyoruz.",
  foundedYear: 2015,
  memberCount: 250,
  eventCount: 45,
  upcomingEventCount: 3,
  categories: ["Yazılım", "Teknoloji", "Eğitim"],
  socialMedia: {
    instagram: "algoritma_ve_yapay_zeka_topluluğu",
    twitter: "ayzek_topluluk",
    website: "algoritmaveyapayzeka.org",
  },
  contactEmail: "iletisim@algoritmaveyapayzekaayzek.org",
  logo: "/images/white_ayzek_selcuk.png?height=200&width=200",
  coverImage: "/images/white_ayzek_selcuk.png?height=400&width=1200",
}

export default function CommunityProfilePage({ params }: { params: { id: string } }) {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-8">
        <div className="relative">
          <div className="h-48 md:h-64 w-full rounded-lg overflow-hidden">
            <Image
              src={communityProfile.coverImage || "/images/white_ayzek_selcuk.png"}
              alt={`${communityProfile.name} kapak fotoğrafı`}
              width={1200}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-16 left-4 md:left-8 p-1 bg-background rounded-full">
            <Image
              src={communityProfile.logo || "/images/white_ayzek_selcuk.png"}
              alt={communityProfile.name}
              width={120}
              height={120}
              className="rounded-full h-32 w-32"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {communityProfile.categories.map((category) => (
                <Badge key={category} variant="secondary">
                  {category}
                </Badge>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tighter">{communityProfile.name}</h1>
            <p className="text-muted-foreground mt-1">{communityProfile.description}</p>
          </div>
          <div className="flex gap-2">
            <Button>Takip Et</Button>
            <Button variant="outline">
              <Bell className="h-4 w-4 mr-2" />
              Bildirimler
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
            <div className="flex flex-col items-center text-center">
              <Users className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold">{communityProfile.memberCount}</span>
              <span className="text-muted-foreground">Üye</span>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold">{communityProfile.eventCount}</span>
              <span className="text-muted-foreground">Etkinlik</span>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 bg-muted rounded-lg">
            <div className="flex flex-col items-center text-center">
              <Award className="h-8 w-8 text-primary mb-2" />
              <span className="text-2xl font-bold">{new Date().getFullYear() - communityProfile.foundedYear}</span>
              <span className="text-muted-foreground">Yıldır Aktif</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Hakkında</h2>
          <p>{communityProfile.longDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="space-y-1">
              <h3 className="font-medium">İletişim</h3>
              <p className="text-sm text-muted-foreground">{communityProfile.contactEmail}</p>
            </div>
            <div className="space-y-1">
              <h3 className="font-medium">Sosyal Medya</h3>
              <div className="flex gap-2">
                <Link
                  href={`https://instagram.com/${communityProfile.socialMedia.instagram}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Instagram
                </Link>
                <Link
                  href={`https://twitter.com/${communityProfile.socialMedia.twitter}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Twitter
                </Link>
                <Link
                  href={`https://${communityProfile.socialMedia.website}`}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  Website
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="events">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="events">Etkinlikler</TabsTrigger>
            <TabsTrigger value="members">Üyeler</TabsTrigger>
            <TabsTrigger value="gallery">Galeri</TabsTrigger>
          </TabsList>

          <TabsContent value="events" className="mt-6">
            <CommunityEvents communityId={communityProfile.id} />
          </TabsContent>

          <TabsContent value="members" className="mt-6">
            <CommunityMembers communityId={communityProfile.id} />
          </TabsContent>

          <TabsContent value="gallery" className="mt-6">
            <CommunityGallery communityId={communityProfile.id} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
