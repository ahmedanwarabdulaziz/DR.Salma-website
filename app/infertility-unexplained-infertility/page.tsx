import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InfertilityHero from '@/components/solutions/InfertilityHero'
import InfertilityInfoSection from '@/components/solutions/InfertilityInfoSection'
import InfertilitySolutionsSection from '@/components/solutions/InfertilitySolutionsSection'
import ContactSection from '@/components/ContactSection'

export default function InfertilityUnexplainedInfertilityPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <InfertilityHero />
      <InfertilityInfoSection />
      <InfertilitySolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 