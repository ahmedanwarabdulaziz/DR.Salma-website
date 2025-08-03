'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import DownloadPopup from '@/components/DownloadPopup'

const MenopauseFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const faqs = [
    {
      question: "Do I have to take hormones?",
      answer: "Only if you want! Dr. Salma supports women with or without HRT, giving you all options and explaining risks/benefits clearly."
    },
    {
      question: "How long will this last?",
      answer: "Most find significant relief in 2–3 months with Dr. Salma's guidance; many experience meaningful transformation in six months."
    },
    {
      question: "Can you help with weight and bone health too?",
      answer: "Absolutely. Bone and heart protection, weight, and metabolism are all part of your complete care."
    },
    {
      question: "Is it normal to feel emotional or anxious?",
      answer: "Completely. Dr. Salma supports your mind and mood as much as your hormones—because you're more than a number on a lab chart."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Your Questions, Answered Gently
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything You Need to Know About Menopause & Perimenopause Support
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30 text-center">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Find Relief?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a discovery call to learn how Dr. Salma can help you navigate this transition with confidence and comfort.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                Book Your Discovery Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download Popup */}
      <DownloadPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        guideName="Menopause Transition Wellness Guide"
      />
    </section>
  )
}

export default MenopauseFAQSection 