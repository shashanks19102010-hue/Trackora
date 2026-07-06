import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TRACKORA — Know. Track. Protect.',
  description: 'Permission-based location intelligence with ORI, your AI tracking companion.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
