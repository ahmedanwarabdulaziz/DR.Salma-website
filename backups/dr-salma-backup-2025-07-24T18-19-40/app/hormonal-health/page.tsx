import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HormonalHero from '@/components/solutions/HormonalHero'
import HormonalInfoSection from '@/components/solutions/HormonalInfoSection'
import HormonalSolutionsSection from '@/components/solutions/HormonalSolutionsSection'

export default function HormonalHealthPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HormonalHero />
      <HormonalInfoSection />
      <HormonalSolutionsSection />
      <Footer />
    </main>
  )
} 