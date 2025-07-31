'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Info } from 'lucide-react'
import Image from 'next/image'

const ComprehensiveInfoSection = () => {
  const commonSigns = [
    "Feeling \"not quite right\" but never getting real answers",
    "Wanting regular wellness screenings and guidance for prevention",
    "Living with multiple symptoms or chronic health issues",
    "Needing emotional support alongside physical healing",
    "Seeking a gentle, individualized approach that brings together medicine and natural healing"
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
              What Is Comprehensive Women's Care?
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
                Comprehensive Women's Care means seeing and supporting every part of you—body, mind, and spirit. It is holistic, attentive, and responsive care for every stage of a woman's life: from prevention to complex challenges, through changes, transitions, and milestones.
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
              Common Reasons Women Seek This Care:
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
                  src="/images/pic52.png"
                  alt="Women celebrating hormonal health and wellness"
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
                  <h4 className="font-semibold text-primary-green text-lg">Women's Health in Ontario – Key Facts</h4>
                  <div className="space-y-2 text-sm text-text-gray">
                    <p>• 70% of Canadian women receive preventive screenings, yet many report not feeling fully understood or cared for</p>
                    <p>• 1 in 5 Canadian women experience anxiety or depression annually, often linked to hormonal changes</p>
                    <p>• 25% of women live with a chronic health condition</p>
                    <p>• 54% say the usual healthcare system doesn't fully meet their needs</p>
                  </div>
                </div>
                
                {/* Professional Statistics Display */}
                <div className="grid grid-cols-1 gap-6 pt-6 border-t border-gray-100">
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-lg font-bold text-primary-pink mb-1">Trusted Canadian Resources</div>
                    <div className="text-sm text-text-gray font-medium space-y-1">
                      <p><strong>Health Canada – Women's Health Strategy</strong></p>
                      <p><strong>Society of Obstetricians and Gynaecologists of Canada (SOGC)</strong></p>
                      <p><strong>Pan-Canadian Women's Health Coalition</strong></p>
                      <p><strong>Canadian Women's Health Network</strong></p>
                      <p><strong>Canadian Mental Health Association (CMHA)</strong></p>
                    </div>
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

export default ComprehensiveInfoSection 