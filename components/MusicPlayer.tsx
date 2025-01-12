'use client'

import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Maximize2 } from 'lucide-react'
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card text-card-foreground p-4 border-t">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4 w-full md:w-1/3">
          <img src="/placeholder.svg?height=64&width=64" alt="Album cover" className="w-16 h-16 rounded-md" />
          <div className="min-w-0 flex-1">
            <h3 className="font-medium text-sm md:text-base truncate">Bohemian Rhapsody</h3>
            <p className="text-xs md:text-sm text-muted-foreground truncate">Queen - A Night at the Opera</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsFavorite(!isFavorite)}
            className="text-primary flex-shrink-0"
          >
            <Heart className={isFavorite ? "fill-current" : ""} size={20} />
          </Button>
        </div>
        <div className="flex flex-col items-center w-full md:w-1/3">
          <div className="flex items-center space-x-4 mb-2">
            <button className="text-primary hidden sm:block"><SkipBack size={24} /></button>
            <button className="text-primary" onClick={() => setIsPlaying(!isPlaying)}>
              {isPlaying ? <Pause size={32} /> : <Play size={32} />}
            </button>
            <button className="text-primary hidden sm:block"><SkipForward size={24} /></button>
          </div>
          <div className="w-full max-w-md flex items-center space-x-2">
            <span className="text-xs w-10 text-right">1:23</span>
            <Slider className="w-full" />
            <span className="text-xs w-10">5:55</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full md:w-1/3 justify-end">
          <div className="hidden md:flex items-center space-x-2">
            <Volume2 size={20} />
            <Slider className="w-24" />
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Maximize2 size={20} />
          </Button>
        </div>
      </div>
    </div>
  )
}

