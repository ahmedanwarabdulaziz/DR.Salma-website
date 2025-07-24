'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'

const DescriptionSection = () => {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Understanding */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 leading-tight">
              Finally, Someone Who Understands What You're Going Through
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Dr. Salma combines 20+ years of medical expertise with natural healing to address the root causes of your health concerns.
            </p>
          </motion.div>

          {/* Right Section - Medical Naturopath Difference */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Pink Background Card */}
            <div className="relative bg-gradient-to-br from-rose-100 to-pink-100 rounded-3xl p-8 md:p-12 shadow-lg border border-rose-200/30">
              <h3 className="text-3xl md:text-4xl font-bold text-green-600 leading-tight mb-8">
                The Medical Naturopath Difference
              </h3>
              
              {/* Credentials List */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 font-medium">
                    20+ Years Gynecological Experience
                  </span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 font-medium">
                    Licensed Naturopathic Doctor
                  </span>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-lg text-gray-600 font-medium">
                    Clinical Homeopathy Specialist (CEDH)
                  </span>
                </motion.div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-4 h-4 bg-gradient-to-br from-rose-300 to-pink-300 rounded-full opacity-60"></div>
              <div className="absolute bottom-6 left-6 w-3 h-3 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-60"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default DescriptionSection 