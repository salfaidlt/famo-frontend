'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import axios from 'axios'
import { setToken, setUser } from '@/utils/auth'
import { useToast } from '@/hooks/use-toast'

export default function SignInForm() {
  const [email_, setEmail] = useState('')
  const [password_, setPassword] = useState('')
  const router = useRouter()
  const {toast} = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = {
        email: email_,
        password: password_
      }
      const response = await axios.post('http://localhost:5000/user/login', data)
      setToken(response.data.token)
      setUser(response.data.user)
      toast({
        title: "Connexion",
        description: `Welcome back ${response.data.user.lastName}`
      })
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
    } catch (error) {
      console.error(error)
    }
    setTimeout(() => {
      router.push('/')
    }, 2000) // Redirect to home page after sign in
    // window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          value={email_}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          value={password_}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          required
        />
      </div>
      <Button type="submit" className="w-full">Se connecter</Button>
    </form>
  )
}

