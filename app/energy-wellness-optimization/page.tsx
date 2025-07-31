import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EnergyHero from '@/components/solutions/EnergyHero'
import EnergyInfoSection from '@/components/solutions/EnergyInfoSection'
import EnergySolutionsSection from '@/components/solutions/EnergySolutionsSection'
import ContactSection from '@/components/ContactSection'

export default function EnergyWellnessOptimizationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EnergyHero />
      <EnergyInfoSection />
      <EnergySolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 