import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/sass/base/globals.scss'

export const metadata: Metadata = {
  title: 'NoBlackBoxML',
  description: 'Machine Learning in JavaScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
