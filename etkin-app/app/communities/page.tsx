import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Filter } from "lucide-react"

// Mock data for communities
const communities = [
  {
    id: 5,
    name: "Bilgisayar Topluluğu",
    description: "Bilgisayar ve yazılım alanında etkinlikler düzenleyen öğrenci topluluğu.",
    memberCount: 250,
    eventCount: 45,
    categories: ["Yazılım", "Teknoloji", "Eğitim"],
    logo: "/images/white_ayzek_selcuk.png?height=100&width=100",
  },
  {
    id: 6,
    name: "Yazılım Kulübü",
    description: "Yazılım geliştirme ve programlama odaklı etkinlikler düzenleyen topluluk.",
    memberCount: 180,
    eventCount: 32,
    categories: ["Yazılım", "Teknoloji"],
    logo: "/images/white_ayzek_selcuk.png?height=100&width=100",
  },
  {
    id: 7,
    name: "Müzik Kulübü",
    description: "Müzik etkinlikleri ve konserler düzenleyen öğrenci topluluğu.",
    memberCount: 120,
    eventCount: 28,
    categories: ["Sanat", "Müzik"],
    logo: "/images/white_ayzek_selcuk.png?height=100&width=100",
  },
  {
    id: 8,
    name: "Girişimcilik Kulübü",
    description: "Girişimcilik ve inovasyon alanında etkinlikler düzenleyen topluluk.",
    memberCount: 150,
    eventCount: 22,
    categories: ["Kariyer", "Girişimcilik", "İş Dünyası"],
    logo: "/images/white_ayzek_selcuk.png?height=100&width=100",
  },
  {
    id: 9,
    name: "Fotoğrafçılık Kulübü",
    description: "Fotoğrafçılık sanatı üzerine etkinlikler ve sergiler düzenleyen topluluk.",
    memberCount: 90,
    eventCount: 18,
    categories: ["Sanat", "Fotoğrafçılık"],
    logo: "/images/white_ayzek_selcuk.png?height=100&width=100",
  },
  {
    id: 10,
    name: "Spor Kulübü",
    description: "Çeşitli spor dallarında etkinlikler ve turnuvalar düzenleyen topluluk.",
    memberCount: 200,
    eventCount: 35,
    categories: ["Spor", "Sağlık"],
    logo: "/images/white_ayzek_selcuk.png?height=100&width=100",
  },
]

export default function CommunitiesPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">Topluluklar</h1>
          <p className="text-muted-foreground">Kampüsteki tüm toplulukları keşfet ve takip et</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input placeholder="Topluluk ara..." />
          </div>
          <div className="flex gap-2">
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Kategori" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Tüm Kategoriler</SelectItem>
                <SelectItem value="software">Yazılım</SelectItem>
                <SelectItem value="music">Müzik</SelectItem>
                <SelectItem value="education">Eğitim</SelectItem>
                <SelectItem value="career">Kariyer</SelectItem>
                <SelectItem value="health">Sağlık</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
              <span className="sr-only">Filtrele</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {communities.map((community) => (
            <Link href={`/communities/${community.id}`} key={community.id}>
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Image
                      src={community.logo || "/images/white_ayzek_selcuk.png"}
                      alt={community.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl">{community.name}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-2 mt-1">{community.description}</p>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {community.categories.map((category) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{community.memberCount} üye</span>
                        </div>
                        <div>
                          <span>{community.eventCount} etkinlik</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
