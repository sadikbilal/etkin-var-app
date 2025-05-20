import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, X } from "lucide-react"

// Mock data for user interests
const interests = {
  categories: ["Yazılım", "Müzik", "Sanat", "Kariyer"],
  subcategories: ["Yapay Zeka", "Web Geliştirme", "Mobil Uygulama", "Klasik Müzik", "Resim"],
  communities: ["Bilgisayar Topluluğu", "Yazılım Kulübü", "Müzik Kulübü"],
}

// Mock data for suggested interests
const suggestedInterests = {
  categories: ["Eğitim", "Spor", "Sağlık", "Gastronomi"],
  subcategories: ["Veri Bilimi", "Siber Güvenlik", "Girişimcilik", "Fotoğrafçılık", "Dans"],
  communities: ["Girişimcilik Kulübü", "Fotoğrafçılık Kulübü", "Spor Kulübü"],
}

export default function UserInterests() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>İlgi Alanlarım</CardTitle>
          <CardDescription>
            İlgi alanlarınıza göre etkinlik önerileri alırsınız ve bildirimler alırsınız.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="categories">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="categories">Kategoriler</TabsTrigger>
              <TabsTrigger value="subcategories">Alt Kategoriler</TabsTrigger>
              <TabsTrigger value="communities">Topluluklar</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {interests.categories.map((category, index) => (
                  <Badge key={index} className="flex items-center gap-1 px-3 py-1">
                    {category}
                    <button className="ml-1 hover:text-destructive">
                      <X className="h-3 w-3" />
                      <span className="sr-only">Kaldır</span>
                    </button>
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="gap-1">
                  <Plus className="h-3 w-3" />
                  Ekle
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="subcategories" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {interests.subcategories.map((subcategory, index) => (
                  <Badge key={index} className="flex items-center gap-1 px-3 py-1">
                    {subcategory}
                    <button className="ml-1 hover:text-destructive">
                      <X className="h-3 w-3" />
                      <span className="sr-only">Kaldır</span>
                    </button>
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="gap-1">
                  <Plus className="h-3 w-3" />
                  Ekle
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="communities" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {interests.communities.map((community, index) => (
                  <Badge key={index} className="flex items-center gap-1 px-3 py-1">
                    {community}
                    <button className="ml-1 hover:text-destructive">
                      <X className="h-3 w-3" />
                      <span className="sr-only">Kaldır</span>
                    </button>
                  </Badge>
                ))}
                <Button variant="outline" size="sm" className="gap-1">
                  <Plus className="h-3 w-3" />
                  Ekle
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Önerilen İlgi Alanları</CardTitle>
          <CardDescription>Etkinlik katılımlarınıza ve profilinize göre önerilen ilgi alanları</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="categories">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="categories">Kategoriler</TabsTrigger>
              <TabsTrigger value="subcategories">Alt Kategoriler</TabsTrigger>
              <TabsTrigger value="communities">Topluluklar</TabsTrigger>
            </TabsList>

            <TabsContent value="categories" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {suggestedInterests.categories.map((category, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1 px-3 py-1">
                    {category}
                    <button className="ml-1 text-primary">
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Ekle</span>
                    </button>
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="subcategories" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {suggestedInterests.subcategories.map((subcategory, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1 px-3 py-1">
                    {subcategory}
                    <button className="ml-1 text-primary">
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Ekle</span>
                    </button>
                  </Badge>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="communities" className="mt-4">
              <div className="flex flex-wrap gap-2">
                {suggestedInterests.communities.map((community, index) => (
                  <Badge key={index} variant="outline" className="flex items-center gap-1 px-3 py-1">
                    {community}
                    <button className="ml-1 text-primary">
                      <Plus className="h-3 w-3" />
                      <span className="sr-only">Ekle</span>
                    </button>
                  </Badge>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
