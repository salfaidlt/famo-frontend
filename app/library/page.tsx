"use client"
import Link from 'next/link'
import { Heart, HeartOff, ListMusic } from 'lucide-react'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { getToken, getUser } from '@/utils/auth'
import { Playlist } from '@/utils/types'
import { Button } from '@/components/ui/button'
import { headers } from 'next/headers'
import { useToast } from '@/hooks/use-toast'


export default function Library() {
  const [playlists, setPlaylists] = useState([])
  const { toast } = useToast()

  const addToFavorite = async (id: string, name: string) => {
    const token = getToken()
    const response = await axios.get('http://localhost:5000/playlist//add-playlist-to-favorites', {
      headers: { Authorization: token, playlistId: id }
    })
    if (response.status == 200) {
      toast({
        description: `La playlist ${name} a été ajoutée aux favoris`
      })
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }
  }
  const removePlaylistFromFavorites = async (id: string, name: string) => {
    const token = getToken()
    const response = await axios.get('http://localhost:5000/playlist//remove-playlist-from-favorites', {
      headers: { Authorization: token, playlistId: id }
    })
    if (response.status == 200) {
      toast({
        description: `La playlist ${name} a été retirée des favoris`
      })
      setTimeout(() => {
        window.location.reload()
      }, 1500)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const token = getToken()
      const id = getUser()?._id
      try {
        const response = await axios.get('http://localhost:5000/playlist/my-playlists', {
          headers: { Authorization: token, userId: id }
        })
        setPlaylists(response.data.playlists)
        console.log('====================================');
        console.log(response.data.playlists);
        console.log('====================================');
      } catch (error) {
        console.error(error);

      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Your Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <Link href="/playlist/liked-songs">
          <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
            <Heart size={40} className="text-primary" />
            <div>
              <h2 className="font-medium">Musiques favorites</h2>
              <p className="text-sm text-muted-foreground">Toutes vos musiques favorites dans une seule playlist</p>
            </div>
          </div>
        </Link>
        <Link href="/playlist/liked-playlists">
          <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
            <Heart size={40} className="text-primary" />
            <div>
              <h2 className="font-medium">Playlists favorites</h2>
              <p className="text-sm text-muted-foreground">Toutes vos playlists favorites dans une seule playlist</p>
            </div>
          </div>
        </Link>
      </div>
      <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
      <div className="space-y-4">
        {playlists?.map((playlist: Playlist) => (
          <div className='flex items-center gap-4'>
            <Link key={playlist._id} href={`/playlist/${playlist._id}`}>
              <div className="flex items-center space-x-4 p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                <ListMusic size={40} className="text-primary" />
                <div>
                  <h3 className="font-medium">{playlist.name}</h3>
                  {/* <p className="text-sm text-muted-foreground">{playlist.trackCount} tracks</p> */}
                </div>
              </div>
            </Link>
            <Button variant={'ghost'} onClick={() => { addToFavorite(playlist._id, playlist.name) }}>
              
              { playlist.isFavorite ? (
                <Heart size={60} color='red' fill='red' className="text-primary" />
              ) : (
                <Heart size={40} className="text-primary" />
              ) }
              
            </Button>
            <Button variant={'ghost'} onClick={() => { removePlaylistFromFavorites(playlist._id, playlist.name) }}>
              
              { !playlist.isFavorite ? (
                <HeartOff size={60} className="text-primary" />
              ) : (
                <HeartOff size={40} className="text-primary" />
              ) }
              
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

