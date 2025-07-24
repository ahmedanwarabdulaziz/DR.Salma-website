import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import PCOSHero from '@/components/solutions/PCOSHero'
import PCOSStorySection from '@/components/solutions/PCOSStorySection'
import PCOSJourneySection from '@/components/solutions/PCOSJourneySection'
import PCOSDifferenceSection from '@/components/solutions/PCOSDifferenceSection'
import PCOSTestimonialsSection from '@/components/solutions/PCOSTestimonialsSection'
import PCOSFAQSection from '@/components/solutions/PCOSFAQSection'
import PCOSContactSection from '@/components/solutions/PCOSContactSection'

export default function PCOSManagementPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <PCOSHero />
      <PCOSStorySection />
      <PCOSJourneySection />
      <PCOSDifferenceSection />
      <PCOSTestimonialsSection />
      <PCOSFAQSection />
      <PCOSContactSection />
      <Footer />
    </main>
  )
} 