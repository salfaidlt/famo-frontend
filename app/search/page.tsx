'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from 'next/link'

type SearchResult = {
  id: string;
  name: string;
  type: 'playlist' | 'track';
  artist?: string;
}

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    // This would be replaced with an actual API call
    const mockResults: SearchResult[] = [
      { id: '1', name: 'Awesome Playlist', type: 'playlist' },
      { id: '2', name: 'Cool Track', type: 'track', artist: 'Cool Artist' },
      { id: '3', name: 'Another Playlist', type: 'playlist' },
    ]
    setResults(mockResults)
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Search</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex space-x-2">
          <Input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for playlists or tracks..."
            className="flex-1"
          />
          <Button type="submit">Search</Button>
        </div>
      </form>
      <div className="space-y-4">
        {results.map((result) => (
          <div key={result.id} className="p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
            {result.type === 'playlist' ? (
              <Link href={`/playlist/${result.id}`}>
                <h3 className="font-medium">{result.name}</h3>
                <p className="text-sm text-muted-foreground">Playlist</p>
              </Link>
            ) : (
              <div>
                <h3 className="font-medium">{result.name}</h3>
                <p className="text-sm text-muted-foreground">{result.artist} • Track</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

