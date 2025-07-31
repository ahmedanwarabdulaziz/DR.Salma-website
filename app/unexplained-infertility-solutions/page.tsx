import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import UnexplainedInfertilityHero from '@/components/solutions/UnexplainedInfertilityHero'
import UnexplainedInfertilityStorySection from '@/components/solutions/UnexplainedInfertilityStorySection'
import UnexplainedInfertilityJourneySection from '@/components/solutions/UnexplainedInfertilityJourneySection'
import UnexplainedInfertilityDifferenceSection from '@/components/solutions/UnexplainedInfertilityDifferenceSection'
import UnexplainedInfertilityTestimonialsSection from '@/components/solutions/UnexplainedInfertilityTestimonialsSection'
import UnexplainedInfertilityFAQSection from '@/components/solutions/UnexplainedInfertilityFAQSection'
import UnexplainedInfertilityContactSection from '@/components/solutions/UnexplainedInfertilityContactSection'

export default function UnexplainedInfertilitySolutionsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <UnexplainedInfertilityHero />
      <UnexplainedInfertilityStorySection />
      <UnexplainedInfertilityJourneySection />
      <UnexplainedInfertilityDifferenceSection />
      <UnexplainedInfertilityTestimonialsSection />
      <UnexplainedInfertilityFAQSection />
      <UnexplainedInfertilityContactSection />
      <Footer />
    </main>
  )
} 