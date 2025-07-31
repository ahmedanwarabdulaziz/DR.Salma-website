import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MenopauseHero from '@/components/solutions/MenopauseHero'
import MenopauseStorySection from '@/components/solutions/MenopauseStorySection'
import MenopauseJourneySection from '@/components/solutions/MenopauseJourneySection'
import MenopauseDifferenceSection from '@/components/solutions/MenopauseDifferenceSection'
import MenopauseTestimonialsSection from '@/components/solutions/MenopauseTestimonialsSection'
import MenopauseFAQSection from '@/components/solutions/MenopauseFAQSection'
import MenopauseContactSection from '@/components/solutions/MenopauseContactSection'

export default function MenopausePerimenopauseSupportPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <MenopauseHero />
      <MenopauseStorySection />
      <MenopauseJourneySection />
      <MenopauseDifferenceSection />
      <MenopauseTestimonialsSection />
      <MenopauseFAQSection />
      <MenopauseContactSection />
      <Footer />
    </main>
  )
} 