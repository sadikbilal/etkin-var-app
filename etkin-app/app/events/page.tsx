import { Suspense } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Filter, Grid3X3, List } from "lucide-react"
import EventList from "@/components/event-list"
import EventGrid from "@/components/event-grid"
import EventCalendar from "@/components/event-calendar"
import EventSkeleton from "@/components/event-skeleton"

export default function EventsPage() {
  return (
    <div className="container py-8">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tighter">Etkinlikler</h1>
          <p className="text-muted-foreground">Tüm kampüs etkinliklerini keşfet ve katıl</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <Input placeholder="Etkinlik ara..." />
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

        <Tabs defaultValue="grid">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="grid">
                <Grid3X3 className="h-4 w-4 mr-2" />
                Grid
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4 mr-2" />
                Liste
              </TabsTrigger>
              <TabsTrigger value="calendar">
                <Calendar className="h-4 w-4 mr-2" />
                Takvim
              </TabsTrigger>
            </TabsList>
            <Button asChild variant="outline" size="sm">
              <Link href="/events/map">Haritada Gör</Link>
            </Button>
          </div>
          <TabsContent value="grid" className="mt-6">
            <Suspense fallback={<EventSkeleton type="grid" count={9} />}>
              <EventGrid />
            </Suspense>
          </TabsContent>
          <TabsContent value="list" className="mt-6">
            <Suspense fallback={<EventSkeleton type="list" count={5} />}>
              <EventList />
            </Suspense>
          </TabsContent>
          <TabsContent value="calendar" className="mt-6">
            <Suspense fallback={<EventSkeleton type="calendar" />}>
              <EventCalendar />
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
