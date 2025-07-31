import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import GeneralWellnessHero from '@/components/solutions/GeneralWellnessHero'
import GeneralWellnessStorySection from '@/components/solutions/GeneralWellnessStorySection'
import GeneralWellnessJourneySection from '@/components/solutions/GeneralWellnessJourneySection'
import GeneralWellnessDifferenceSection from '@/components/solutions/GeneralWellnessDifferenceSection'
import GeneralWellnessTestimonialsSection from '@/components/solutions/GeneralWellnessTestimonialsSection'
import GeneralWellnessFAQSection from '@/components/solutions/GeneralWellnessFAQSection'
import GeneralWellnessContactSection from '@/components/solutions/GeneralWellnessContactSection'

export default function GeneralWomensWellnessPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <GeneralWellnessHero />
      <GeneralWellnessStorySection />
      <GeneralWellnessJourneySection />
      <GeneralWellnessDifferenceSection />
      <GeneralWellnessTestimonialsSection />
      <GeneralWellnessFAQSection />
      <GeneralWellnessContactSection />
      <Footer />
    </main>
  )
} 