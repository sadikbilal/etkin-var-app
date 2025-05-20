"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAuth } from "@/hooks/useAuth"
import { toast } from "@/components/ui/use-toast"

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [communityEmail, setCommunityEmail] = useState("")
  const [communityPassword, setCommunityPassword] = useState("")
  const router = useRouter()
  const { login } = useAuth()

  const handleSubmit = async (e: React.FormEvent, isStudent: boolean) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Use the appropriate email/password based on user type
      const loginEmail = isStudent ? email : communityEmail
      const loginPassword = isStudent ? password : communityPassword

      await login(loginEmail, loginPassword)
      toast({
        title: "Giriş başarılı!",
        description: "Ana sayfaya yönlendiriliyorsunuz.",
      })
      router.push("/")
    } catch (error) {
      console.error("Login error:", error)
      toast({
        title: "Giriş başarısız!",
        description: "Lütfen email ve şifrenizi kontrol edin.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-4rem)] py-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 flex flex-col items-center">
          <div className="w-32 h-32 mb-4 relative">
            <Image 
              src="/images/white_ayzek_selcuk.png" 
              alt="Ayzek Selçuk" 
              fill
              className="object-contain"
            />
          </div>
          <CardTitle className="text-2xl font-bold">Giriş Yap</CardTitle>
          <CardDescription>EtkinVar platformuna giriş yaparak etkinliklere katılmaya başla</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="student">Öğrenci</TabsTrigger>
              <TabsTrigger value="community">Topluluk</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ornek@universite.edu.tr" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Şifre</Label>
                  <Input 
                    id="password" 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Link href="#" className="text-primary hover:underline">
                    Şifremi Unuttum
                  </Link>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="community">
              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="communityEmail">E-posta</Label>
                  <Input 
                    id="communityEmail" 
                    type="email" 
                    placeholder="topluluk@universite.edu.tr" 
                    value={communityEmail}
                    onChange={(e) => setCommunityEmail(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communityPassword">Şifre</Label>
                  <Input 
                    id="communityPassword" 
                    type="password" 
                    value={communityPassword}
                    onChange={(e) => setCommunityPassword(e.target.value)}
                    required 
                  />
                </div>
                <div className="flex items-center justify-between text-sm">
                  <Link href="#" className="text-primary hover:underline">
                    Şifremi Unuttum
                  </Link>
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            Hesabınız yok mu?{" "}
            <Link href="/register" className="underline underline-offset-4 hover:text-primary">
              Kayıt Ol
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
