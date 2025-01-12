import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Play, Heart } from 'lucide-react'

export default function Home() {
  const featuredPlaylists = [
    { id: '1', name: 'Discover Weekly', description: 'Your weekly mixtape of fresh music.', imageUrl: '/placeholder.svg?height=150&width=150' },
    { id: '2', name: 'Release Radar', description: 'Catch all the latest music from artists you follow.', imageUrl: '/placeholder.svg?height=150&width=150' },
    { id: '3', name: 'Daily Mix 1', description: 'A mix of music you know and love.', imageUrl: '/placeholder.svg?height=150&width=150' },
  ]

  const topTracks = [
    { id: '1', name: 'Bohemian Rhapsody', artist: 'Queen', album: 'A Night at the Opera', duration: '5:55' },
    { id: '2', name: 'Imagine', artist: 'John Lennon', album: 'Imagine', duration: '3:01' },
    { id: '3', name: 'Billie Jean', artist: 'Michael Jackson', album: 'Thriller', duration: '4:54' },
    { id: '4', name: 'Like a Rolling Stone', artist: 'Bob Dylan', album: 'Highway 61 Revisited', duration: '6:13' },
    { id: '5', name: 'Smells Like Teen Spirit', artist: 'Nirvana', album: 'Nevermind', duration: '5:01' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Welcome to Famo Musique</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPlaylists.map((playlist) => (
            <Link href={`/playlist/${playlist.id}`} key={playlist.id}>
              <div className="bg-card hover:bg-card/80 transition-colors p-4 rounded-lg shadow-md flex items-center space-x-4">
                <img src={playlist.imageUrl} alt={playlist.name} className="w-16 h-16 rounded-md" />
                <div>
                  <h3 className="font-medium text-lg mb-1">{playlist.name}</h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">{playlist.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Top Tracks</h2>
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="p-3 w-8">#</th>
                <th className="p-3">Title</th>
                <th className="p-3 hidden md:table-cell">Album</th>
                <th className="p-3 hidden sm:table-cell w-20">Duration</th>
              </tr>
            </thead>
            <tbody>
              {topTracks.map((track, index) => (
                <tr key={track.id} className="border-t border-muted hover:bg-muted/50 transition-colors">
                  <td className="p-3 text-center">{index + 1}</td>
                  <td className="p-3">
                    <div className="flex items-center space-x-3">
                      <Button variant="ghost" size="icon" className="flex-shrink-0">
                        <Play size={18} />
                      </Button>
                      <div>
                        <div className="font-medium line-clamp-1">{track.name}</div>
                        <div className="text-sm text-muted-foreground line-clamp-1">{track.artist}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 hidden md:table-cell">{track.album}</td>
                  <td className="p-3 hidden sm:table-cell text-right">{track.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/auth/signup">Create Account</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

