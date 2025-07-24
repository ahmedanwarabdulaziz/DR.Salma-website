import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutHero from '@/components/about/AboutHero'
import AboutJourney from '@/components/about/AboutJourney'
import AboutExpertise from '@/components/about/AboutExpertise'
import AboutCredentials from '@/components/about/AboutCredentials'
import AboutGlobalImpact from '@/components/about/AboutGlobalImpact'
import AboutPhilosophy from '@/components/about/AboutPhilosophy'
import AboutClinics from '@/components/about/AboutClinics'
import AboutSpecializations from '@/components/about/AboutSpecializations'
import AboutDifference from '@/components/about/AboutDifference'
import AboutRecognition from '@/components/about/AboutRecognition'
import ContactSection from '@/components/ContactSection'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AboutHero />
        <AboutJourney />
        <AboutExpertise />
        <AboutCredentials />
        <AboutGlobalImpact />
        <AboutPhilosophy />
        <AboutClinics />
        <AboutSpecializations />
        <AboutDifference />
        <AboutRecognition />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
} 