import Header from '@/components/Header'
import Hero from '@/components/Hero'
import DescriptionSection from '@/components/DescriptionSection'
import SolutionsSection from '@/components/SolutionsSection'
import AboutSection from '@/components/AboutSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-20">
        <Hero />
        <DescriptionSection />
        <SolutionsSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
} 