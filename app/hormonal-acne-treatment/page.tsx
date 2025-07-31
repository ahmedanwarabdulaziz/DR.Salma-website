import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HormonalAcneHero from '@/components/solutions/HormonalAcneHero'
import HormonalAcneStorySection from '@/components/solutions/HormonalAcneStorySection'
import HormonalAcneJourneySection from '@/components/solutions/HormonalAcneJourneySection'
import HormonalAcneDifferenceSection from '@/components/solutions/HormonalAcneDifferenceSection'
import HormonalAcneTestimonialsSection from '@/components/solutions/HormonalAcneTestimonialsSection'
import HormonalAcneFAQSection from '@/components/solutions/HormonalAcneFAQSection'
import HormonalAcneContactSection from '@/components/solutions/HormonalAcneContactSection'

export default function HormonalAcneTreatmentPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HormonalAcneHero />
      <HormonalAcneStorySection />
      <HormonalAcneJourneySection />
      <HormonalAcneDifferenceSection />
      <HormonalAcneTestimonialsSection />
      <HormonalAcneFAQSection />
      <HormonalAcneContactSection />
      <Footer />
    </main>
  )
} 