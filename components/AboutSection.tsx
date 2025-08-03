'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Heart, Leaf, User, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const AboutSection = () => {
  const router = useRouter()
  
  const whyChoosePoints = [
    {
      icon: <User className="w-6 h-6 text-pink-600" />,
      title: "Medical Authority:",
      description: "20+ years of gynecological expertise combined with naturopathic training gives you the diagnostic confidence you trust."
    },
    {
      icon: <Leaf className="w-6 h-6 text-green-600" />,
      title: "Natural Expertise:",
      description: "Comprehensive natural therapies including homeopathy, TCM, acupuncture, botanical, nutritional and physical therapy for gentle, effective healing."
    },
    {
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      title: "Women's Health Specialization:",
      description: "Dedicated focus on women's unique health challenges from puberty through menopause and beyond."
    },
    {
      icon: <Heart className="w-6 h-6 text-green-600" />,
      title: "Integrative Approach:",
      description: "Bridges conventional medicine with natural healing for comprehensive, personalized care."
    }
  ]

  const qualifications = [
    "20+ Years Obstetric & Gynecological Experience",
    "Licensed Naturopathic Doctor",
    "Clinical Homeopathy Specialist (CEDH)",
    "Traditional Chinese Medicine & Acupuncture",
    "Available at Sea Meadows Rehab"
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Meet Dr. Salma
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <p className="text-xl text-gray-600">
              Where Medical Expertise Meets Natural Healing
            </p>
          </div>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Dr. Salma's Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="/images/salma-1.png"
                  alt="Dr. Salma - Medical Naturopath"
                  width={500}
                  height={600}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Introduction */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Your Trusted Partner in Women's Health
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dr. Salma combines over two decades of gynecological expertise with advanced training in naturopathic medicine and classical homeopathy. Her unique approach bridges conventional medical knowledge with natural healing traditions, offering you comprehensive care that addresses both symptoms and root causes.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Specializing in women's health from puberty through menopause, Dr. Salma understands the complex interplay of hormones, lifestyle, and overall wellness that affects your daily life and long-term health.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Why Choose Dr. Salma */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Choose Dr. Salma?
              </h3>
              
              {/* Why Choose Points */}
              <div className="space-y-6">
                {whyChoosePoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0">
                      {point.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        {point.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Qualifications */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Professional Qualifications
              </h4>
              <div className="space-y-3">
                {qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    {qualification === "Available at Sea Meadows Rehab" ? (
                      <Link 
                        href="https://seameadowsrehab.ca/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-pink-600 hover:underline transition-colors duration-300"
                      >
                        {qualification}
                      </Link>
                    ) : (
                      <span className="text-gray-600">{qualification}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <button 
                onClick={() => router.push('/about')}
                className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 group cursor-pointer"
              >
                <span>Learn More About Dr. Salma</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 