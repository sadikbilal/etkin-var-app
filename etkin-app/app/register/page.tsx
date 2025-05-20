"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/components/ui/use-toast"

export default function RegisterPage() {
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { register, registerCommunity } = useAuth()
  
  // Student form state
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [university, setUniversity] = useState("")
  const [department, setDepartment] = useState("")
  const [termsAccepted, setTermsAccepted] = useState(false)
  
  // Community form state
  const [communityName, setCommunityName] = useState("")
  const [communityEmail, setCommunityEmail] = useState("")
  const [communityPassword, setCommunityPassword] = useState("")
  const [communityUniversity, setCommunityUniversity] = useState("")
  const [communityDescription, setCommunityDescription] = useState("")
  const [communityTermsAccepted, setCommunityTermsAccepted] = useState(false)

  const handleStudentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Create full name from first and last name
      const fullName = `${firstName} ${lastName}`.trim()
      await register(email, password, fullName)
      
      toast({
        title: "Kayıt başarılı!",
        description: "Giriş sayfasına yönlendiriliyorsunuz.",
      })
      router.push("/login")
    } catch (error) {
      console.error("Registration error:", error)
      toast({
        title: "Kayıt başarısız!",
        description: "Lütfen bilgilerinizi kontrol edin.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleCommunitySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await registerCommunity(
        communityName,
        communityEmail,
        communityPassword,
        communityUniversity,
        communityDescription
      )
      
      toast({
        title: "Topluluk kaydı başarılı!",
        description: "Giriş sayfasına yönlendiriliyorsunuz.",
      })
      router.push("/login")
    } catch (error) {
      console.error("Community registration error:", error)
      toast({
        title: "Kayıt başarısız!",
        description: "Lütfen bilgilerinizi kontrol edin.",
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
          <CardTitle className="text-2xl font-bold">Kayıt Ol</CardTitle>
          <CardDescription>EtkinVar platformuna kayıt olarak etkinlikleri keşfetmeye başla</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="student">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="student">Öğrenci</TabsTrigger>
              <TabsTrigger value="community">Topluluk</TabsTrigger>
            </TabsList>
            <TabsContent value="student">
              <form onSubmit={handleStudentSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Ad</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Adınız" 
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Soyad</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Soyadınız" 
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      required 
                    />
                  </div>
                </div>
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
                <div className="space-y-2">
                  <Label htmlFor="university">Üniversite</Label>
                  <Input 
                    id="university" 
                    placeholder="Üniversiteniz" 
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="department">Bölüm</Label>
                  <Input 
                    id="department" 
                    placeholder="Bölümünüz" 
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    required 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="terms" 
                    checked={termsAccepted}
                    onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                    required 
                  />
                  <Label htmlFor="terms" className="text-sm">
                    <span>
                      <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                        Kullanım Şartları
                      </Link>
                      'nı okudum ve kabul ediyorum
                    </span>
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={loading || !termsAccepted}>
                  {loading ? "Kaydediliyor..." : "Kayıt Ol"}
                </Button>
              </form>
            </TabsContent>
            <TabsContent value="community">
              <form onSubmit={handleCommunitySubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="communityName">Topluluk Adı</Label>
                  <Input 
                    id="communityName" 
                    placeholder="Topluluğunuzun adı" 
                    value={communityName}
                    onChange={(e) => setCommunityName(e.target.value)}
                    required 
                  />
                </div>
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
                <div className="space-y-2">
                  <Label htmlFor="communityUniversity">Üniversite</Label>
                  <Input 
                    id="communityUniversity" 
                    placeholder="Üniversiteniz" 
                    value={communityUniversity}
                    onChange={(e) => setCommunityUniversity(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="communityDescription">Topluluk Açıklaması</Label>
                  <Input 
                    id="communityDescription" 
                    placeholder="Kısa açıklama" 
                    value={communityDescription}
                    onChange={(e) => setCommunityDescription(e.target.value)}
                    required 
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox 
                    id="communityTerms" 
                    checked={communityTermsAccepted}
                    onCheckedChange={(checked) => setCommunityTermsAccepted(checked as boolean)}
                    required 
                  />
                  <Label htmlFor="communityTerms" className="text-sm">
                    <span>
                      <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                        Kullanım Şartları
                      </Link>
                      'nı okudum ve kabul ediyorum
                    </span>
                  </Label>
                </div>
                <Button type="submit" className="w-full" disabled={loading || !communityTermsAccepted}>
                  {loading ? "Kaydediliyor..." : "Kayıt Ol"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-muted-foreground text-center">
            Zaten bir hesabınız var mı?{" "}
            <Link href="/login" className="underline underline-offset-4 hover:text-primary">
              Giriş Yap
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
function useAuth(): { register: any; registerCommunity: any } {
  throw new Error("Function not implemented.")
}

