'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Info } from 'lucide-react'
import Image from 'next/image'

const HormonalInfoSection = () => {
  const commonSigns = [
    "Irregular or missed periods",
    "Unexplained weight gain or difficulty losing weight",
    "Mood swings and anxiety",
    "Chronic fatigue",
    "Hair loss or excessive hair growth",
    "Skin issues including adult acne",
    "Sleep disturbances"
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-green leading-tight">
                What Are Hormonal Imbalances?
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-text-gray leading-relaxed">
                Hormonal imbalances occur when your endocrine system produces too much or too little of specific hormones. Even small imbalances can create significant health issues, affecting everything from your menstrual cycle to your mood, weight, and energy levels.<sup className="text-primary-pink">1</sup>
              </p>
            </motion.div>

            {/* Common Signs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="font-heading text-2xl font-bold text-primary-green">
                Common Signs Include:
              </h3>
              
              <div className="space-y-4">
                {commonSigns.map((sign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-green mt-1 flex-shrink-0" />
                    <span className="text-text-gray leading-relaxed">
                      {sign}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Image & Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Image Display */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-soft">
                <Image
                  src="/images/banner-5.png"
                  alt="Women celebrating health and wellness"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
                
                {/* Subtle Info Icon */}
                <div className="absolute top-4 left-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-soft">
                  <Info className="w-4 h-4 text-primary-green" />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
              </div>
            </motion.div>

            {/* Elegant Content Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-soft border border-gray-100"
            >
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-lg text-text-gray leading-relaxed">
                    <span className="font-semibold text-primary-green">Polycystic Ovary Syndrome (PCOS)</span> affects up to 1.4 million Canadian women, representing 10-20% of women of reproductive age. This complex hormonal condition often goes undiagnosed for years, with an average diagnosis time of 4.3 years after the first symptoms appear.
                  </p>
                  
                  <p className="text-lg text-text-gray leading-relaxed">
                    The delay in diagnosis can lead to significant health complications, including infertility, diabetes, and cardiovascular issues. Early detection and proper treatment are crucial for managing symptoms and preventing long-term health consequences.
                  </p>
                </div>
                
                {/* Professional Statistics Display */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                  <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-green mb-1">1.4M</div>
                    <div className="text-sm text-text-gray font-medium">Canadian Women Affected</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-3xl font-bold text-primary-pink mb-1">4.3</div>
                    <div className="text-sm text-text-gray font-medium">Years Average Diagnosis Time</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HormonalInfoSection 