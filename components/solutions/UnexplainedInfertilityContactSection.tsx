'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Download } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import DownloadPopup from '@/components/DownloadPopup'

const UnexplainedInfertilityContactSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
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
            Your New Chapter Begins Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You deserve compassion, answers, and hope—not dismissal or blame. Your story is not over. With the right partner beside you, the next chapter could bring more than you imagine.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
          >
            <span>Book Your Heart-to-Heart Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
          >
            <span>Download: "Hope for Unexplained Infertility" Guide</span>
            <Download className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-pink-200/30">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <p className="text-xl text-gray-800 font-semibold leading-relaxed">
              "You are not your struggles. You are hope, strength, and so much more than a diagnosis. Let's walk this path to parenthood—together, gently, and with new answers."
            </p>
          </div>
        </motion.div>

        {/* Contact Section */}
        <ContactSection />

        {/* Download Popup */}
        <DownloadPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          guideName="Hope for Unexplained Infertility Guide"
        />
      </div>
    </section>
  )
}

export default UnexplainedInfertilityContactSection 