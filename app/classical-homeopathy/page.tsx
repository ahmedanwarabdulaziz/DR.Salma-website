import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClassicalHomeopathyHero from '@/components/solutions/ClassicalHomeopathyHero'
import ClassicalHomeopathyStorySection from '@/components/solutions/ClassicalHomeopathyStorySection'
import ClassicalHomeopathyJourneySection from '@/components/solutions/ClassicalHomeopathyJourneySection'
import ClassicalHomeopathyDifferenceSection from '@/components/solutions/ClassicalHomeopathyDifferenceSection'
import ClassicalHomeopathyTestimonialsSection from '@/components/solutions/ClassicalHomeopathyTestimonialsSection'
import ClassicalHomeopathyFAQSection from '@/components/solutions/ClassicalHomeopathyFAQSection'
import ClassicalHomeopathyContactSection from '@/components/solutions/ClassicalHomeopathyContactSection'

export default function ClassicalHomeopathyPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ClassicalHomeopathyHero />
      <ClassicalHomeopathyStorySection />
      <ClassicalHomeopathyJourneySection />
      <ClassicalHomeopathyDifferenceSection />
      <ClassicalHomeopathyTestimonialsSection />
      <ClassicalHomeopathyFAQSection />
      <ClassicalHomeopathyContactSection />
      <Footer />
    </main>
  )
} 