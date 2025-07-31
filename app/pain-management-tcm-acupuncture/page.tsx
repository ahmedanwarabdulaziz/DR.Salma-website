import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PainManagementHero from '@/components/solutions/PainManagementHero'
import PainManagementStorySection from '@/components/solutions/PainManagementStorySection'
import PainManagementJourneySection from '@/components/solutions/PainManagementJourneySection'
import PainManagementDifferenceSection from '@/components/solutions/PainManagementDifferenceSection'
import PainManagementTestimonialsSection from '@/components/solutions/PainManagementTestimonialsSection'
import PainManagementFAQSection from '@/components/solutions/PainManagementFAQSection'
import PainManagementContactSection from '@/components/solutions/PainManagementContactSection'

export default function PainManagementTCMAcupuncturePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PainManagementHero />
      <PainManagementStorySection />
      <PainManagementJourneySection />
      <PainManagementDifferenceSection />
      <PainManagementTestimonialsSection />
      <PainManagementFAQSection />
      <PainManagementContactSection />
      <Footer />
    </main>
  )
} 