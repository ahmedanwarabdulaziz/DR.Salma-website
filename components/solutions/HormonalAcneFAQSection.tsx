'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart, ArrowRight, Download } from 'lucide-react'
import Image from 'next/image'
import DownloadPopup from '@/components/DownloadPopup'

const HormonalAcneFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most women begin to see improvements within 4-6 weeks, with significant results typically achieved within 3-4 months. However, every woman's journey is unique, and Dr. Salma will work with you to create a personalized timeline."
    },
    {
      question: "Is hormonal acne treatment safe?",
      answer: "Yes, Dr. Salma's approach uses gentle, natural solutions that work with your body's natural processes. She combines medical expertise with naturopathic principles to ensure both safety and effectiveness."
    },
    {
      question: "Do I need to stop using my current skincare products?",
      answer: "Dr. Salma will assess your current routine and may recommend adjustments based on your specific needs. The goal is to create a harmonious approach that supports your skin's healing journey."
    },
    {
      question: "Can hormonal acne be cured permanently?",
      answer: "While hormonal acne can be effectively managed and controlled, the focus is on creating lasting balance in your body. Dr. Salma's approach addresses root causes to provide long-term solutions rather than temporary fixes."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
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
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything You Need to Know About Hormonal Acne Treatment
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - FAQs */}
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

          {/* Right Column - CTA */}
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
                Ready to Start Your Journey?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a discovery call to learn how Dr. Salma can help you achieve clear, confident skin.
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
        guideName="Acne Self-Care Guide"
      />
    </section>
  )
}

export default HormonalAcneFAQSection 