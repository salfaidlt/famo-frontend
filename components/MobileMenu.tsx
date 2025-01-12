'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Home, Search, Library, PlusSquare } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileMenu() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu size={24} />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">Famo Musique</h1>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X size={24} />
            </Button>
          </div>
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover:text-primary" onClick={() => setOpen(false)}>
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="/search" className="flex items-center space-x-2 hover:text-primary" onClick={() => setOpen(false)}>
              <Search size={20} />
              <span>Search</span>
            </Link>
            <Link href="/library" className="flex items-center space-x-2 hover:text-primary" onClick={() => setOpen(false)}>
              <Library size={20} />
              <span>Your Library</span>
            </Link>
            <Link href="/playlist/show-form" className="flex items-center space-x-2 hover:text-primary" onClick={() => setOpen(false)}>
              <PlusSquare size={20} />
              <span>Create Playlist</span>
            </Link>
          </div>
          <div className="mt-auto">
            <Link href="/auth/signin" className="block text-sm hover:underline mb-2" onClick={() => setOpen(false)}>Sign In</Link>
            <Link href="/auth/signup" className="block text-sm hover:underline" onClick={() => setOpen(false)}>Sign Up</Link>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

