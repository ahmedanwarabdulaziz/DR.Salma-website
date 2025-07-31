'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Leaf, Brain, Target, Star } from 'lucide-react'

const AboutSpecializations = () => {
  const specializations = [
    {
      category: "Hormonal Health Solutions",
      icon: Heart,
      services: [
        "PCOS Management: Comprehensive natural protocols for cycle regulation, weight management, and fertility optimization",
        "Hashimoto's Thyroiditis: Integrative care combining medical expertise with natural support",
        "Hormonal Acne Treatment: Root cause approach addressing hormonal triggers"
      ]
    },
    {
      category: "Infertility and un-explained infertility",
      icon: Leaf,
      services: [
        "Unexplained Infertility Solutions: Root cause investigation and natural support for conception",
        "Endometriosis Pain Management: Holistic pain and inflammation control through TCM and natural medicine",
        "Menopause & Perimenopause Support: Comprehensive natural alternatives and medical guidance"
      ]
    },
    {
      category: "Energy & Wellness Optimization",
      icon: Brain,
      services: [
        "Chronic Fatigue & Energy Optimization: Root cause assessment and personalized treatment plans",
        "Anxiety Linked to Hormonal Imbalances: Understanding the mind-body connection in women's health",
        "Pain Management (TCM/Acupuncture): Ancient wisdom applied to modern women's health challenges"
      ]
    },
    {
      category: "Comprehensive Care",
      icon: Target,
      services: [
        "General Women's Wellness: Preventive care and health optimization across all life stages",
        "Classical Homeopathy: Constitutional medicine honoring each woman's unique symptom picture"
      ]
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Specialization Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Core Expertise Highlights
          </p>
        </motion.div>

        {/* Specializations Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center">
                  <spec.icon className="w-6 h-6 text-primary-green" />
                </div>
                <h3 className="text-xl font-bold text-primary-green">{spec.category}</h3>
              </div>
              <div className="space-y-4">
                {spec.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="bg-white rounded-2xl p-4 shadow-soft border border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed">{service}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30 max-w-3xl mx-auto">
            <Star className="w-12 h-12 text-primary-pink mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Comprehensive Women's Health Care
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Salma's specialized expertise covers the full spectrum of women's health challenges, from hormonal imbalances to reproductive health, energy optimization, and comprehensive wellness care.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Explore Your Health Options
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSpecializations 