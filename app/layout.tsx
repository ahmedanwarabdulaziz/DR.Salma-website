import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Dr. Salma - Women Ontario Hub | Medical Naturopath',
  description: 'Where Medical Expertise Meets Natural Healing for Women\'s Health. Dr. Salma combines 20+ years of gynecological expertise with comprehensive natural solutions.',
  keywords: 'naturopath, women health, hormonal health, fertility, Ontario, medical naturopath',
  authors: [{ name: 'Dr. Salma' }],
  openGraph: {
    title: 'Dr. Salma - Women Ontario Hub',
    description: 'Where Medical Expertise Meets Natural Healing for Women\'s Health',
    type: 'website',
    locale: 'en_CA',
  },
  icons: {
    icon: '/images/butterfly.png',
    shortcut: '/images/butterfly.png',
    apple: '/images/butterfly.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/butterfly.png" />
        <link rel="shortcut icon" href="/images/butterfly.png" />
        <link rel="apple-touch-icon" href="/images/butterfly.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 