import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Play, Heart } from 'lucide-react'
import { featuredPlaylists, topTracks } from '@/utils/top-tracks'

export default function Home() {
  const featuredPlaylists_ = featuredPlaylists

  const topTracks_ = topTracks

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Bienvenue sur Famo Musique</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Playlists à la <span className='underline text-gray-600'>une</span></h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPlaylists_.map((playlist) => (
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
        <h2 className="text-2xl font-semibold mb-4">Pistes à la une</h2>
        <div className="bg-card rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50 text-left">
                <th className="p-3 w-8">#</th>
                <th className="p-3">Titre</th>
                <th className="p-3 hidden md:table-cell">Album</th>
                <th className="p-3 hidden sm:table-cell w-20">Durée</th>
              </tr>
            </thead>
            <tbody>
              {topTracks_.map((track, index) => (
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

      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="/auth/signin">Sign In</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/auth/signup">Create Account</Link>
          </Button>
        </div>
      </section> */}
    </div>
  )
}

