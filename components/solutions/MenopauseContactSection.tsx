'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, Leaf } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import DownloadPopup from '@/components/DownloadPopup'

const MenopauseContactSection = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-6">
            Your New Chapter Starts Here
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            You are not meant to suffer through menopause and perimenopause alone. You deserve to feel heard, understood, and genuinely supported—body, mind, and spirit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => window.location.href = '/contact'}
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Book Your Heart-to-Heart Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setIsPopupOpen(true)}
              className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center space-x-2 cursor-pointer"
            >
              <span>Download: "Menopause Transition Wellness Guide"</span>
              <Leaf className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>

        {/* Contact Section */}
        <ContactSection />

        {/* Download Popup */}
        <DownloadPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          guideName="Menopause Transition Wellness Guide"
        />
        
        {/* Final Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30">
            <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
            <p className="text-xl text-gray-800 font-semibold leading-relaxed max-w-2xl mx-auto">
              "You are not your symptoms. You are a wise, strong, beautiful woman deserving of care, comfort, and celebration in every phase of life. Let's walk this transition together, with hope and healing."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MenopauseContactSection 