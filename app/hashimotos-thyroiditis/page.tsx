import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import HashimotosHero from '@/components/solutions/HashimotosHero'
import HashimotosStorySection from '@/components/solutions/HashimotosStorySection'
import HashimotosJourneySection from '@/components/solutions/HashimotosJourneySection'
import HashimotosDifferenceSection from '@/components/solutions/HashimotosDifferenceSection'
import HashimotosTestimonialsSection from '@/components/solutions/HashimotosTestimonialsSection'
import HashimotosFAQSection from '@/components/solutions/HashimotosFAQSection'
import HashimotosContactSection from '@/components/solutions/HashimotosContactSection'

export default function HashimotosThyroiditisPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HashimotosHero />
      <HashimotosStorySection />
      <HashimotosJourneySection />
      <HashimotosDifferenceSection />
      <HashimotosTestimonialsSection />
      <HashimotosFAQSection />
      <HashimotosContactSection />
      <Footer />
    </main>
  )
} 