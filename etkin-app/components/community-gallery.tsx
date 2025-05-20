import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface CommunityGalleryProps {
  communityId: number
}

// Mock data for community gallery
const galleryImages = [
  {
    id: 1,
    title: "Yapay Zeka Workshop",
    date: "10/05/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 2,
    title: "Web Geliştirme Etkinliği",
    date: "05/05/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 3,
    title: "Hackathon 2025",
    date: "01/05/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 4,
    title: "Siber Güvenlik Semineri",
    date: "25/04/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 5,
    title: "Veri Bilimi Paneli",
    date: "20/04/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 6,
    title: "Mobil Uygulama Geliştirme",
    date: "15/04/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 7,
    title: "Yazılım Kariyer Günü",
    date: "10/04/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    title: "Oyun Geliştirme Workshop",
    date: "05/04/2025",
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function CommunityGallery({ communityId }: CommunityGalleryProps) {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleryImages.map((image) => (
          <Card key={image.id} className="overflow-hidden">
            <div className="relative aspect-square">
              <Image
                src={image.image || "/placeholder.svg"}
                alt={image.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-3">
              <h3 className="font-medium text-sm">{image.title}</h3>
              <p className="text-xs text-muted-foreground">{image.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
