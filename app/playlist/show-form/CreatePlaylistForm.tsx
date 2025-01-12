'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios'
import { getToken, getUser } from '@/utils/auth'
import { useToast } from '@/hooks/use-toast'

export default function CreatePlaylistForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const router = useRouter()
  const {toast} = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const id = getUser()?._id
      const token = getToken()
      const response = await axios.post('http://localhost:5000/playlist/create', {
        name: name,
        desc: description,
        image: '',
        userId: id
      }, {
        headers: { Authorization: token }
      })
      if (response.status == 201) {
        setName("")
        setDescription("")
        toast({
          description: `Playlist ${name} créée avec succès`
        })
        setTimeout(() => {
          router.push('/library')
        }, 2000)
      }
    } catch (error) {
      console.error(error);

    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Nom de la Playlist</Label>
        <Input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <Button type="submit">Créer la Playlist</Button>
    </form>
  )
}

