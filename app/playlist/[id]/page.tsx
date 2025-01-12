"use client"
import { notFound } from 'next/navigation'
import { Play } from 'lucide-react'
import { Button } from "@/components/ui/button"
import axios from 'axios'
import { getToken, getUser } from '@/utils/auth'
import { useEffect, useState } from 'react'
import { Playlist } from '@/utils/types'


export default function PlaylistPage({ params }: { params: { id: string } }) {
  const [playlist, setPlaylist] = useState<Playlist>()

  useEffect(() => {
    const fetchPlaylist = async () => {
      const token = getToken()
      const _id = getUser()?._id
      console.log('====================================');
      console.log(`http://localhost:5000/playlist/show-playlist/${params.id}`);
      console.log('====================================');
      const response = await axios.get(`http://localhost:5000/playlist/show-playlist/${params.id}`, {
        headers: { Authorization: token, userId: _id }
      })
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
      setPlaylist(response.data.playlist)
    }
    fetchPlaylist()
  }, [])

  // if (!playlist) {
  //   notFound()
  // }

  return (
    <div>
      <div className="flex items-end space-x-4 mb-8">
        <img src="/placeholder.svg?height=200&width=200" alt="Playlist cover" className="w-48 h-48 rounded-lg shadow-lg" />
        { playlist && <div>
          <h1 className="text-4xl font-bold">{playlist.name}</h1>
          <p className="text-muted-foreground">{playlist.desc}</p>
        </div> }
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
          {/* {playlist.tracks.map((track, index) => (
            <tr key={track.id} className="hover:bg-muted/50">
              <td className="py-2">{index + 1}</td>
              <td className="py-2">{track.name}</td>
              <td className="py-2">{track.artist}</td>
              <td className="py-2">{track.duration}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  )
}

