import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AnxietyHero from '@/components/solutions/AnxietyHero'
import AnxietyStorySection from '@/components/solutions/AnxietyStorySection'
import AnxietyJourneySection from '@/components/solutions/AnxietyJourneySection'
import AnxietyDifferenceSection from '@/components/solutions/AnxietyDifferenceSection'
import AnxietyTestimonialsSection from '@/components/solutions/AnxietyTestimonialsSection'
import AnxietyFAQSection from '@/components/solutions/AnxietyFAQSection'
import AnxietyContactSection from '@/components/solutions/AnxietyContactSection'

export default function AnxietyHormonalImbalancesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AnxietyHero />
      <AnxietyStorySection />
      <AnxietyJourneySection />
      <AnxietyDifferenceSection />
      <AnxietyTestimonialsSection />
      <AnxietyFAQSection />
      <AnxietyContactSection />
      <Footer />
    </main>
  )
} 