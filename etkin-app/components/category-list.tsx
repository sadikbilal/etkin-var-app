import Link from "next/link"
import { Code, Music, BookOpen, Briefcase, HeartPulse, Utensils, Film, Users, Palette, Dumbbell } from "lucide-react"

// Mock data for categories
const categories = [
  {
    id: 1,
    name: "Yazılım",
    icon: Code,
    count: 24,
  },
  {
    id: 2,
    name: "Müzik",
    icon: Music,
    count: 18,
  },
  {
    id: 3,
    name: "Eğitim",
    icon: BookOpen,
    count: 32,
  },
  {
    id: 4,
    name: "Kariyer",
    icon: Briefcase,
    count: 15,
  },
  {
    id: 5,
    name: "Sağlık",
    icon: HeartPulse,
    count: 9,
  },
  {
    id: 6,
    name: "Gastronomi",
    icon: Utensils,
    count: 12,
  },
  {
    id: 7,
    name: "Sinema",
    icon: Film,
    count: 21,
  },
  {
    id: 8,
    name: "Sosyal",
    icon: Users,
    count: 28,
  },
  {
    id: 9,
    name: "Sanat",
    icon: Palette,
    count: 16,
  },
  {
    id: 10,
    name: "Spor",
    icon: Dumbbell,
    count: 14,
  },
]

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      {categories.map((category) => (
        <Link
          href={`/events/category/${category.id}`}
          key={category.id}
          className="flex flex-col items-center p-4 bg-muted/50 rounded-lg hover:bg-primary/5 transition-colors group card-hover border border-primary/10"
        >
          <div className="p-3 bg-background rounded-full mb-3 group-hover:bg-primary/10 transition-colors">
            <category.icon className="h-6 w-6 text-primary" />
          </div>
          <span className="font-medium text-center group-hover:text-primary transition-colors">{category.name}</span>
          <span className="text-sm text-muted-foreground">{category.count} etkinlik</span>
        </Link>
      ))}
    </div>
  )
}
