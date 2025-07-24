'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const SolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      title: "Hormonal Health Solutions",
      struggle: "Hormonal imbalances that control your life and leave you feeling frustrated",
      provides: "Medical expertise to understand your hormones combined with natural solutions that restore balance",
      outcome: "Finally feel in control of your body and hormones again",
      buttons: ["PCOS Management", "Hashimoto's Thyroiditis", "Hormonal Acne Treatment"],
      image: "/images/banner-1.png"
    },
    {
      id: 2,
      title: "Reproductive & Fertility Health",
      struggle: "Fertility challenges, painful periods, or reproductive health concerns that no one seems to understand",
      provides: "Gynecological expertise to uncover hidden causes plus gentle natural therapies for lasting solutions",
      outcome: "Reclaim your reproductive health and find hope for your future",
      buttons: ["Unexplained Infertility Solutions", "Endometriosis Pain Management", "Menopause & Perimenopause Support"],
      image: "/images/banner-2.png"
    },
    {
      id: 3,
      title: "Energy & Wellness Optimization",
      struggle: "Chronic fatigue, anxiety, or pain that limits your daily life and steals your joy",
      provides: "Comprehensive assessment to find root causes plus natural therapies for lasting energy and peace",
      outcome: "Wake up energized and feel like yourself again",
      buttons: ["Chronic Fatigue & Energy Optimization", "Anxiety Linked to Hormonal Imbalances", "Pain Management (TCM/Acupuncture)"],
      image: "/images/banner-3.png"
    },
    {
      id: 4,
      title: "Comprehensive Women's Care",
      struggle: "Feeling 'off' but not knowing why, or wanting personalized care that treats you as a whole person",
      provides: "Individualized assessment and treatment plans that honor your unique health journey",
      outcome: "Experience healthcare that's as unique as you are",
      buttons: ["General Women's Wellness", "Classical Homeopathy"],
      image: "/images/banner-4.png"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
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
                    <div className="flex flex-wrap gap-2">
                      {solution.buttons.map((button, buttonIndex) => (
                        <span
                          key={buttonIndex}
                          className="inline-block px-4 py-2 bg-pink-100 text-pink-700 rounded-full text-sm font-medium hover:bg-pink-200 transition-colors duration-300"
                        >
                          {button}
                        </span>
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