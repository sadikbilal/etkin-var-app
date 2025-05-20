import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data for user badges
const badges = [
  {
    id: 1,
    name: "Yazılım Meraklısı",
    description: "5 yazılım etkinliğine katıldın",
    image: "/placeholder.svg?height=100&width=100",
    earned: true,
    date: "10/05/2025",
  },
  {
    id: 2,
    name: "Sosyal Kelebek",
    description: "10 farklı etkinliğe katıldın",
    image: "/placeholder.svg?height=100&width=100",
    earned: true,
    date: "15/05/2025",
  },
  {
    id: 3,
    name: "Topluluk Dostu",
    description: "Bir topluluğun 5 etkinliğine katıldın",
    image: "/placeholder.svg?height=100&width=100",
    earned: true,
    date: "20/05/2025",
  },
  {
    id: 4,
    name: "Etkinlik Gurusu",
    description: "20 etkinliğe katıl",
    image: "/placeholder.svg?height=100&width=100",
    earned: false,
    progress: 60,
  },
  {
    id: 5,
    name: "Kampüs Gezgini",
    description: "5 farklı lokasyonda etkinliğe katıl",
    image: "/placeholder.svg?height=100&width=100",
    earned: false,
    progress: 40,
  },
]

export default function UserBadges() {
  const earnedBadges = badges.filter((badge) => badge.earned)
  const inProgressBadges = badges.filter((badge) => !badge.earned)

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Kazanılan Rozetler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {earnedBadges.map((badge) => (
            <Card key={badge.id}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Image
                  src={badge.image || "/placeholder.svg"}
                  alt={badge.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <CardTitle>{badge.name}</CardTitle>
                  <CardDescription>{badge.date} tarihinde kazanıldı</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Devam Eden Rozetler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {inProgressBadges.map((badge) => (
            <Card key={badge.id}>
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="relative">
                  <Image
                    src={badge.image || "/placeholder.svg"}
                    alt={badge.name}
                    width={60}
                    height={60}
                    className="rounded-full grayscale"
                  />
                  <div className="absolute inset-0 bg-background/50 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium">{badge.progress}%</span>
                  </div>
                </div>
                <div>
                  <CardTitle>{badge.name}</CardTitle>
                  <CardDescription>Devam ediyor</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-sm text-muted-foreground">{badge.description}</p>
                <Progress value={badge.progress} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
