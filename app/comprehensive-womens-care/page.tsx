import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ComprehensiveHero from '@/components/solutions/ComprehensiveHero'
import ComprehensiveInfoSection from '@/components/solutions/ComprehensiveInfoSection'
import ComprehensiveSolutionsSection from '@/components/solutions/ComprehensiveSolutionsSection'
import ContactSection from '@/components/ContactSection'

export default function ComprehensiveWomensCarePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ComprehensiveHero />
      <ComprehensiveInfoSection />
      <ComprehensiveSolutionsSection />
      <ContactSection />
      <Footer />
    </main>
  )
} 