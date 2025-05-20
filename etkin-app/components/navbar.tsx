"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { Bell, Calendar, Home, Menu, Search, User, X, Code, Moon, Sun, LogOut } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "next-themes"
import { toast } from "@/components/ui/use-toast"

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [loading, setLoading] = useState(false) // Add a loading state
  interface User {
    displayName?: string;
    email?: string;
  }

  const [user, setUser] = useState<User | null>(null); // Replace this with actual user fetching logic

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogout = async () => {
    try {
      // Simulate logout functionality
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
        toast({
          title: "Çıkış başarılı!",
          description: "Güvenli bir şekilde çıkış yaptınız.",
        })
        router.push("/")
      }, 1000)
      toast({
        title: "Çıkış başarılı!",
        description: "Güvenli bir şekilde çıkış yaptınız.",
      })
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
      toast({
        title: "Çıkış yapılamadı!",
        description: "Lütfen tekrar deneyin.",
        variant: "destructive",
      })
    }
  }

  const routes = [
    {
      href: "/",
      label: "Ana Sayfa",
      icon: Home,
      active: pathname === "/",
    },
    {
      href: "/events",
      label: "Etkinlikler",
      icon: Calendar,
      active: pathname === "/events" || pathname.startsWith("/events/"),
    },
    {
      href: "/communities",
      label: "Topluluklar",
      icon: User,
      active: pathname === "/communities" || pathname.startsWith("/communities/"),
    },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 md:gap-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="pr-0">
              <div className="px-7">
                <Link href="/" className="flex items-center">
                  <div className="h-6 w-6 mr-2 relative">
                    <Image 
                      src="/images/white_ayzek_selcuk.png" 
                      alt="Ayzek Selçuk" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="font-bold text-xl">EtkinVar</span>
                </Link>
              </div>
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "flex items-center gap-2 px-7 py-2 text-lg font-medium hover:text-primary transition-colors",
                      route.active ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {route.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="hidden md:flex items-center gap-2">
            <div className="h-6 w-6 relative">
              <Image 
                src="/images/white_ayzek_selcuk.png" 
                alt="Ayzek Selçuk" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="font-bold text-xl">EtkinVar</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors relative py-1",
                  route.active
                    ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                placeholder="Etkinlik ara..."
                className="w-full md:w-[200px] lg:w-[300px] border-primary/20 focus-visible:ring-primary/30"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Ara</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Tema Değiştir</span>
          </Button>

          {!loading && (
            <>
              {user ? (
                <>
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    <span className="sr-only">Bildirimler</span>
                    <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full">
                        <Avatar className="h-8 w-8 ring-2 ring-background">
                          <AvatarImage src="/images/white_ayzek_selcuk.png" alt={user.displayName || user.email || 'Kullanıcı'} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {user.displayName ? user.displayName[0].toUpperCase() : 'U'}
                          </AvatarFallback>
                        </Avatar>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      <DropdownMenuLabel>{user.displayName || user.email}</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="flex w-full cursor-pointer">
                          <User className="mr-2 h-4 w-4" />
                          <span>Profil</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/profile/interests" className="flex w-full cursor-pointer">
                          <Calendar className="mr-2 h-4 w-4" />
                          <span>İlgi Alanlarım</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/profile/badges" className="flex w-full cursor-pointer">
                          <Code className="mr-2 h-4 w-4" />
                          <span>Rozetlerim</span>
                        </Link>
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Çıkış Yap</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="flex gap-2">
                  <Button asChild variant="ghost" size="sm">
                    <Link href="/login">Giriş Yap</Link>
                  </Button>
                  <Button asChild variant="default" size="sm">
                    <Link href="/register">Kayıt Ol</Link>
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}
