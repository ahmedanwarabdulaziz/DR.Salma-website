'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Info } from 'lucide-react'
import Image from 'next/image'

const InfertilityInfoSection = () => {
  const commonSigns = [
    "12+ months of trying to conceive with no success",
    "Regular cycles but still no pregnancy",
    "History of miscarriages or failed IVF cycles",
    "Frustration with \"normal\" test results that don't explain your struggle",
    "Feeling isolated, hopeless, or emotionally exhausted"
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
              What Is Infertility & Unexplained Infertility?
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
                Infertility affects one in six Canadian couples, with many women enduring years of uncertainty and invasive interventions only to be told, "everything looks normal." Unexplained infertility can be especially isolating—often leaving you with no clear path forward.
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
              Common Signs & Struggles Include:
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
                  src="/images/pic42.png"
                  alt="Women celebrating fertility and hope"
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
                  <h4 className="font-semibold text-primary-green text-lg">Canadian Infertility at a Glance</h4>
                  <div className="space-y-2 text-sm text-text-gray">
                    <p>• 1 in 6 couples in Canada experiences infertility</p>
                    <p>• 30% of cases are labeled "unexplained infertility"</p>
                    <p>• Women's age: Average first-time mothers now age 31+ in Ontario</p>
                    <p>• IVF cycles: Ontario funds 1 IVF cycle per lifetime; not always successful</p>
                    <p>• Infertility has emotional, physical, and financial effects for individuals and couples</p>
                  </div>
                </div>
                
                {/* Professional Statistics Display */}
                <div className="grid grid-cols-1 gap-6 pt-6 border-t border-gray-100">
                  <div className="text-center p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl">
                    <div className="text-lg font-bold text-primary-pink mb-1">Official Canadian Resources</div>
                    <div className="text-sm text-text-gray font-medium space-y-1">
                      <p><strong>Fertility Matters Canada</strong> - National support, education, and advocacy</p>
                      <p><strong>SOGC</strong> - Clinical information about infertility causes</p>
                      <p><strong>Health Canada</strong> - Official government information and resources</p>
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

export default InfertilityInfoSection 