import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface CommunityMembersProps {
  communityId: number
}

// Mock data for community members
const communityMembers = {
  board: [
    {
      id: 1,
      name: "Ahmet Yılmaz",
      role: "Başkan",
      department: "Bilgisayar Mühendisliği",
      year: "4. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 2,
      name: "Ayşe Kaya",
      role: "Başkan Yardımcısı",
      department: "Yazılım Mühendisliği",
      year: "3. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 3,
      name: "Mehmet Demir",
      role: "Etkinlik Koordinatörü",
      department: "Bilgisayar Mühendisliği",
      year: "3. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      id: 4,
      name: "Zeynep Yıldız",
      role: "Sosyal Medya Sorumlusu",
      department: "Bilişim Sistemleri",
      year: "2. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
    },
  ],
  active: [
    {
      id: 5,
      name: "Ali Can",
      department: "Bilgisayar Mühendisliği",
      year: "2. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
      badges: ["Etkinlik Yıldızı", "Yazılım Meraklısı"],
    },
    {
      id: 6,
      name: "Elif Şahin",
      department: "Yazılım Mühendisliği",
      year: "3. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
      badges: ["Topluluk Dostu"],
    },
    {
      id: 7,
      name: "Burak Özdemir",
      department: "Bilgisayar Mühendisliği",
      year: "1. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
      badges: [],
    },
    {
      id: 8,
      name: "Selin Yılmaz",
      department: "Bilişim Sistemleri",
      year: "4. Sınıf",
      image: "/placeholder.svg?height=100&width=100",
      badges: ["Yazılım Meraklısı"],
    },
  ],
}

export default function CommunityMembers({ communityId }: CommunityMembersProps) {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Yönetim Kurulu</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityMembers.board.map((member) => (
            <Card key={member.id}>
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <Avatar className="h-20 w-20 mb-2">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <Badge className="mb-2">{member.role}</Badge>
                <p className="text-sm text-muted-foreground">{member.department}</p>
                <p className="text-sm text-muted-foreground">{member.year}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Aktif Üyeler</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {communityMembers.active.map((member) => (
            <Card key={member.id}>
              <CardHeader className="flex flex-col items-center text-center pb-2">
                <Avatar className="h-20 w-20 mb-2">
                  <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-lg">{member.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-sm text-muted-foreground">{member.department}</p>
                <p className="text-sm text-muted-foreground">{member.year}</p>
                {member.badges.length > 0 && (
                  <div className="flex flex-wrap justify-center gap-1 mt-2">
                    {member.badges.map((badge, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
