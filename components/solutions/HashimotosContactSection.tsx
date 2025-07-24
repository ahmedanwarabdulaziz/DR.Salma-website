'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Download } from 'lucide-react'
import ContactSection from '@/components/ContactSection'

const HashimotosContactSection = () => {
  return (
    <>
             <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
              You've been tired for so long. Today can be different.
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
                  You Deserve to Feel Alive Again
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  You've been tired for so long. You've accepted feeling "okay" when you used to feel amazing. You've been told this is just how life is with Hashimoto's.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  But what if it doesn't have to be? What if you could wake up refreshed? What if your weight could stabilize? What if your brain could be sharp and clear again?
                </p>
                                 <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/30">
                   <p className="text-lg text-gray-800 font-semibold text-center">
                     Dr. Salma is Ready to Guide You Home to Yourself
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
                  Your healing doesn't start with another prescription or another doctor who doesn't understand. It starts with one decision—the decision to work with someone who sees Hashimoto's not as something to just manage, but as something your body can learn to live peacefully with.
                </p>
                
                <div className="space-y-4">
                                     <button className="w-full bg-gradient-to-r from-primary-green to-secondary-green hover:from-secondary-green hover:to-primary-green text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                     <span>Book Your Consultation</span>
                     <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                   </button>
                  
                                     <button className="w-full bg-gradient-to-r from-primary-pink to-secondary-pink hover:from-secondary-pink hover:to-primary-pink text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                     <span>Download: "Hashimoto's Hope Guide"</span>
                     <Download className="w-5 h-5 transition-transform group-hover:scale-110" />
                   </button>
                </div>
              </div>

                             <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 text-center">
                 <Heart className="w-12 h-12 text-primary-green mx-auto mb-4" />
                 <p className="text-lg text-gray-800 font-semibold leading-relaxed">
                   "You are not your Hashimoto's. You are a vibrant woman who deserves to feel energized, clear-minded, and confident in her body. Let's walk this healing journey together, one gentle step at a time."
                 </p>
                 <p className="text-primary-green font-medium mt-4">— Dr. Salma</p>
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

export default HashimotosContactSection 