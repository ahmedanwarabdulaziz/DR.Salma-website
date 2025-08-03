'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SolutionsSection = () => {
  const router = useRouter()
  
  // Mapping of button names to their corresponding URLs
  const buttonToUrl = {
    "PCOS Management": "/pcos-management",
    "Hashimoto's Thyroiditis": "/hashimotos-thyroiditis",
    "Hormonal Acne Treatment": "/hormonal-acne-treatment",
    "Unexplained Infertility Solutions": "/unexplained-infertility-solutions",
    "Endometriosis Pain Management": "/endometriosis-pain-management",
    "Menopause & Perimenopause Support": "/menopause-perimenopause-support",
    "Chronic Fatigue & Energy Optimization": "/chronic-fatigue-energy-optimization",
    "Anxiety Linked to Hormonal Imbalances": "/anxiety-hormonal-imbalances",
    "Pain Management (TCM/Acupuncture)": "/pain-management-tcm-acupuncture",
    "General Women's Wellness": "/general-womens-wellness",
    "Classical Homeopathy": "/classical-homeopathy"
  }

  const solutions = [
    {
      id: 1,
      title: "Advanced Hormonal Health Solutions",
      struggle: "Complex hormonal imbalances affecting your metabolism, mood, and overall well-being, with symptoms that conventional medicine often fails to address comprehensively",
      provides: "Evidence-based diagnostic protocols combined with integrative treatment approaches, utilizing advanced hormone testing, personalized supplementation, and lifestyle optimization strategies",
      outcome: "Achieve hormonal equilibrium through scientifically-backed interventions, restoring your body's natural rhythms and reclaiming optimal health",
      buttons: ["PCOS Management", "Hashimoto's Thyroiditis", "Hormonal Acne Treatment"],
      image: "/images/banner-1.png"
    },
    {
      id: 2,
      title: "Infertility and un-explained infertility",
      struggle: "Unexplained fertility challenges, debilitating menstrual disorders, or reproductive health concerns requiring specialized diagnostic expertise and innovative treatment protocols",
      provides: "Comprehensive reproductive health assessments utilizing advanced diagnostic technologies, combined with evidence-based integrative therapies and personalized fertility optimization strategies",
      outcome: "Within 6 months of comprehensive treatment, achieve harmonized menstrual cycles, enhanced sperm quality, and significantly increased pregnancy probability through evidence-based integrative fertility protocols",
      buttons: ["Unexplained Infertility Solutions", "Endometriosis Pain Management", "Menopause & Perimenopause Support"],
      image: "/images/banner-2.png"
    },
    {
      id: 3,
      title: "Energy & Wellness Optimization",
      struggle: "Persistent fatigue, anxiety, or chronic pain syndromes that significantly impact your quality of life and require sophisticated diagnostic and therapeutic approaches",
      provides: "Comprehensive biopsychosocial assessment protocols, integrating advanced laboratory diagnostics with evidence-based natural therapies and personalized wellness optimization strategies",
      outcome: "Achieve sustained vitality and mental clarity through scientifically-validated interventions that address the root causes of your symptoms",
      buttons: ["Chronic Fatigue & Energy Optimization", "Anxiety Linked to Hormonal Imbalances", "Pain Management (TCM/Acupuncture)"],
      image: "/images/banner-3.png"
    },
    {
      id: 4,
      title: "Comprehensive Women's Healthcare",
      struggle: "Complex health presentations requiring sophisticated diagnostic expertise and personalized treatment protocols that honor your unique physiological and psychological profile",
      provides: "Advanced health assessment methodologies utilizing cutting-edge diagnostic technologies, combined with evidence-based integrative treatment protocols tailored to your specific health objectives",
      outcome: "Experience healthcare excellence through personalized diagnostic precision and therapeutic interventions designed to optimize your long-term health outcomes",
      buttons: ["General Women's Wellness", "Classical Homeopathy"],
      image: "/images/banner-4.png"
    }
  ]

  return (
    <section id="solutions-section" className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Decorative Lines */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-600/40"></div>
            <div className="w-2 h-2 bg-pink-600/60 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-600/40"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Solutions
          </h2>
          
          {/* Decorative Lines */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-600/40"></div>
            <div className="w-2 h-2 bg-pink-600/60 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-600/40"></div>
          </div>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg border border-rose-200/30 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Header Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 to-green-600/20"></div>
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {solution.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Struggle */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="w-5 h-5 text-pink-600 mr-2" />
                      Your Struggle
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.struggle}
                    </p>
                  </div>

                  {/* What We Provide */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 text-green-600 mr-2" />
                      What We Provide
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {solution.provides}
                    </p>
                  </div>

                  {/* Outcome */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Your Outcome
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-medium">
                      {solution.outcome}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto">
                    <div className="flex flex-col gap-2">
                      {solution.buttons.map((button, buttonIndex) => (
                        <button
                          key={buttonIndex}
                          className="w-full px-4 py-3 bg-pink-100 text-pink-700 rounded-full text-sm font-medium hover:bg-pink-200 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-pink-200 hover:border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50 text-center"
                          onClick={() => {
                            const url = buttonToUrl[button]
                            if (url) {
                              router.push(url)
                            } else {
                              console.log(`No URL mapping found for: ${button}`)
                            }
                          }}
                          aria-label={`Learn more about ${button}`}
                        >
                          {button}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionsSection 