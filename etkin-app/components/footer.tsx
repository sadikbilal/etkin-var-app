import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Github, Code, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container flex flex-col md:flex-row py-10 gap-8">
        <div className="flex-1">
          <Link href="/" className="flex items-center gap-2">
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
          <p className="mt-2 text-muted-foreground">Kampüs etkinliklerini keşfet, katıl ve ödüller kazan.</p>
          <div className="flex gap-4 mt-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">Github</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 flex-1">
          <div>
            <h3 className="font-medium mb-3 text-primary">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  SSS
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-primary">Topluluklar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/communities/register"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Topluluk Kaydı
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/dashboard"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Topluluk Paneli
                </Link>
              </li>
              <li>
                <Link
                  href="/communities/guidelines"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kurallar
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-3 text-primary">Yasal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Kullanım Şartları
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-primary transition-colors">
                  Çerez Politikası
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container py-4 border-t text-center text-sm text-muted-foreground">
        <div className="flex items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} EtkinVar.</span>
          <span className="flex items-center">
            <span className="mx-1">Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500" />
            <span className="mx-1">by</span>
            <Link href="#" className="text-primary hover:underline">
              Developers
            </Link>
          </span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground/70">
          <code>v1.0.0 // build 20250510</code>
        </div>
      </div>
    </footer>
  )
}
