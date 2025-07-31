import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChronicFatigueHero from '@/components/solutions/ChronicFatigueHero'
import ChronicFatigueStorySection from '@/components/solutions/ChronicFatigueStorySection'
import ChronicFatigueJourneySection from '@/components/solutions/ChronicFatigueJourneySection'
import ChronicFatigueDifferenceSection from '@/components/solutions/ChronicFatigueDifferenceSection'
import ChronicFatigueTestimonialsSection from '@/components/solutions/ChronicFatigueTestimonialsSection'
import ChronicFatigueFAQSection from '@/components/solutions/ChronicFatigueFAQSection'
import ChronicFatigueContactSection from '@/components/solutions/ChronicFatigueContactSection'

export default function ChronicFatigueEnergyOptimizationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ChronicFatigueHero />
      <ChronicFatigueStorySection />
      <ChronicFatigueJourneySection />
      <ChronicFatigueDifferenceSection />
      <ChronicFatigueTestimonialsSection />
      <ChronicFatigueFAQSection />
      <ChronicFatigueContactSection />
      <Footer />
    </main>
  )
} 