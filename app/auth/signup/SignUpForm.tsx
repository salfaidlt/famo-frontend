'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { request } from '@/utils/request'
import axios from "axios"
import { useToast } from '@/hooks/use-toast'

export default function SignUpForm() {
  const [firstName_, setFirstName] = useState('')
  const [lastName_, setLastName] = useState('')
  const [email_, setEmail] = useState('')
  const [password_, setPassword] = useState('')
  const router = useRouter()
  const {toast} = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // appel à notre api Express
    try {
      const data = {
        firstName: firstName_,
        lastName: lastName_,
        email: email_,
        password: password_
      }
      console.log('====================================');
      console.log(data);
      console.log('====================================');
      const response = await axios.post('http://localhost:5000/user/sign-up', data)

      if (response.status === 201) {
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
      }
      toast({
        title: "Inscription",
        description: "Compte créé avec succès"
      })
    } catch (error) {
      console.error(error)
    }

    router.push('/auth/signin') 
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="firstName">Prénom (s)</Label>
        <Input
          id="firstName"
          value={firstName_}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="lastName">Nom</Label>
        <Input
          id="lastName"
          value={lastName_}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email_}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="password">Mot de passe</Label>
        <Input
          id="password"
          type="password"
          value={password_}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <Button type="submit" className="w-full">Créer le compte</Button>
    </form>
  )
}

