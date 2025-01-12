import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'
import MusicPlayer from '@/components/MusicPlayer'
import ThemeProvider from '@/components/ThemeProvider'
import ThemeSwitch from '@/components/ThemeSwitch'
import MobileMenu from '@/components/MobileMenu'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Famo Musique',
  description: 'A minimalist Spotify-like application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex flex-col h-screen bg-background text-foreground">
            <div className="flex flex-1 overflow-hidden">
              <Sidebar className="hidden md:block" />
              <main className="flex-1 overflow-auto p-4 md:p-8">
                <div className="container mx-auto">
                  <div className="flex justify-between items-center mb-4">
                    <MobileMenu />
                    <ThemeSwitch />
                  </div>
                  {children}
                  <Toaster />
                </div>
              </main>
            </div>
            <MusicPlayer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

