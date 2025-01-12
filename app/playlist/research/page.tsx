'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchPlaylists() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    const response = await fetch(`/famo-musique.com/playlist/research?q=${searchTerm}`)
    if (response.ok) {
      const data = await response.json()
      setResults(data)
    }
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search Playlists</h1>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex space-x-2">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for playlists..."
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <div>
        {results.map((playlist: any) => (
          <div key={playlist.id} className="mb-2">
            {playlist.name}
          </div>
        ))}
      </div>
    </div>
  )
}

