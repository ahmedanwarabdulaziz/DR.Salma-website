'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Download } from 'lucide-react'
import ContactSection from '@/components/ContactSection'

const PCOSContactSection = () => {
  return (
    <>
      <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-green-50">
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
              Your New Chapter Starts Here
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              You've been strong for so long. Today can be different.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column - Message */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  You Deserve to Feel Amazing
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You've tried so many things. You've never given up hope, even when hope felt impossible to hold onto.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Today, you can choose to work with someone who sees your strength, honors your journey, and believes in your body's ability to heal.
                </p>
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200/30">
                  <p className="text-lg text-gray-800 font-semibold text-center">
                    Dr. Salma is Ready When You Are
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - CTAs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Take the First Step
                </h3>
                <p className="text-gray-600 mb-8">
                  Your transformation doesn't start with another diet or another doctor who doesn't understand. It starts with one decision—the decision to finally give yourself the gentle, comprehensive care you've always deserved.
                </p>
                
                <div className="space-y-4">
                  <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Book Your Consultation</span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                    <span>Download: "PCOS Self-Love Guide"</span>
                    <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                  </button>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 border border-pink-300/30 text-center">
                <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                  "You are not your PCOS. You are a beautiful, strong woman who deserves to feel amazing in her own body. Let's walk this journey together, one gentle step at a time."
                </p>
                <p className="text-pink-600 font-medium mt-4">— Dr. Salma</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Standalone Contact Section */}
      <ContactSection />
    </>
  )
}

export default PCOSContactSection 