import { notFound } from 'next/navigation'
import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"

async function getPlaylist(id: string) {
  // This would be replaced with an actual API call
  const playlist = {
    id,
    name: 'My Awesome Playlist',
    description: 'A collection of my favorite tracks',
    tracks: [
      { id: '1', name: 'Track 1', artist: 'Artist 1', duration: '3:30' },
      { id: '2', name: 'Track 2', artist: 'Artist 2', duration: '4:15' },
      { id: '3', name: 'Track 3', artist: 'Artist 3', duration: '3:45' },
    ]
  }
  return playlist
}

export default async function PlaylistPage({ params }: { params: { id: string } }) {
  const playlist = await getPlaylist(params.id)

  if (!playlist) {
    notFound()
  }

  return (
    <div>
      <div className="flex items-end space-x-4 mb-8">
        <img src="/placeholder.svg?height=200&width=200" alt="Playlist cover" className="w-48 h-48 rounded-lg shadow-lg" />
        <div>
          <h1 className="text-4xl font-bold">{playlist.name}</h1>
          <p className="text-muted-foreground">{playlist.description}</p>
        </div>
      </div>
      <Button size="lg" className="mb-8">
        <Play className="mr-2" size={20} />
        Play
      </Button>
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th className="pb-2">#</th>
            <th className="pb-2">Title</th>
            <th className="pb-2">Artist</th>
            <th className="pb-2">Duration</th>
          </tr>
        </thead>
        <tbody>
          {playlist.tracks.map((track, index) => (
            <tr key={track.id} className="hover:bg-muted/50">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{track.name}</td>
              <td className="py-2">{track.artist}</td>
              <td className="py-2">{track.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

