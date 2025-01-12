"use client"
import Link from 'next/link'
import { Home, Search, Library, PlusSquare } from 'lucide-react'
import { useEffect, useState } from 'react';
import { isLoggedIn, logout } from '@/utils/auth';
import { Button } from './ui/button';

export default function Sidebar({ className = "" }: { className?: string }) {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    setLoggedIn(isLoggedIn());
    console.log('====================================');
    console.log(loggedIn);
    console.log('====================================');
  }, []);
  return (
    <div className={`w-64 bg-card text-card-foreground p-4 flex flex-col h-full ${className}`}>
      <Link href="/" className="flex items-center mb-8">
        <h1 className="text-2xl font-bold">Famo Musique</h1>
      </Link>
      <nav className="space-y-4">
        <Link href="/" className="flex items-center space-x-2 hover:text-primary">
          <Home size={20} />
          <span>Home</span>
        </Link>
        <Link href="/search" className="flex items-center space-x-2 hover:text-primary">
          <Search size={20} />
          <span>Search</span>
        </Link>

      </nav>
      {!loggedIn && <div className="mt-auto">
        <Link href="/auth/signin" className="text-sm hover:underline">Sign In</Link>
        <span className="mx-2">|</span>
        <Link href="/auth/signup" className="text-sm hover:underline">Sign Up</Link>
      </div>}
      {loggedIn &&
        <>
          <Link href="/library" className="flex items-center space-x-2 hover:text-primary">
            <Library size={20} />
            <span>Your Library</span>
          </Link>
          <Link href="/playlist/show-form" className="flex items-center space-x-2 hover:text-primary">
            <PlusSquare size={20} />
            <span>Create Playlist</span>
          </Link>
          <Button onClick={() => {
            logout()
            window.location.reload();
          }}>Logout</Button>
        </>
      }
    </div>
  )
}

