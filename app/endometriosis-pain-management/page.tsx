import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EndometriosisHero from '@/components/solutions/EndometriosisHero'
import EndometriosisStorySection from '@/components/solutions/EndometriosisStorySection'
import EndometriosisJourneySection from '@/components/solutions/EndometriosisJourneySection'
import EndometriosisDifferenceSection from '@/components/solutions/EndometriosisDifferenceSection'
import EndometriosisTestimonialsSection from '@/components/solutions/EndometriosisTestimonialsSection'
import EndometriosisFAQSection from '@/components/solutions/EndometriosisFAQSection'
import EndometriosisContactSection from '@/components/solutions/EndometriosisContactSection'

export default function EndometriosisPainManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EndometriosisHero />
      <EndometriosisStorySection />
      <EndometriosisJourneySection />
      <EndometriosisDifferenceSection />
      <EndometriosisTestimonialsSection />
      <EndometriosisFAQSection />
      <EndometriosisContactSection />
      <Footer />
    </main>
  )
} 