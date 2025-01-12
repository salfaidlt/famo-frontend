import Link from 'next/link'
import { Heart, ListMusic } from 'lucide-react'

export default function Library() {
  const userPlaylists = [
    { id: '1', name: 'My Favorites', trackCount: 42 },
    { id: '2', name: 'Workout Mix', trackCount: 18 },
    { id: '3', name: 'Chill Vibes', trackCount: 30 },
  ]

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Your Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link href="/playlist/liked-songs">
          <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
            <Heart size={40} className="text-primary" />
            <div>
              <h2 className="font-medium">Liked Songs</h2>
              <p className="text-sm text-muted-foreground">All your favorite tracks in one playlist</p>
            </div>
          </div>
        </Link>
      </div>
      <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
      <div className="space-y-4">
        {userPlaylists.map((playlist) => (
          <Link key={playlist.id} href={`/playlist/${playlist.id}`}>
            <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
              <ListMusic size={40} className="text-primary" />
              <div>
                <h3 className="font-medium">{playlist.name}</h3>
                <p className="text-sm text-muted-foreground">{playlist.trackCount} tracks</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

