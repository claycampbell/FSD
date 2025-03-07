import { GeistSans } from 'geist/font/sans'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photo Portfolio',
  description: 'A showcase of photography work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="min-h-screen bg-background">
        <main className="container mx-auto py-6">
          {children}
        </main>
      </body>
    </html>
  )
}
