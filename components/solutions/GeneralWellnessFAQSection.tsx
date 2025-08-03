'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart, ArrowRight, Download } from 'lucide-react'
import DownloadPopup from '@/components/DownloadPopup'

const GeneralWellnessFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const faqs = [
    {
      question: "Can I just see Dr. Salma for a simple wellness check?",
      answer: "Absolutely. Prevention and proactive health are core to her practice. Dr. Salma welcomes women at all stages of their wellness journey."
    },
    {
      question: "Does this care include mental and emotional wellness?",
      answer: "Yes—Dr. Salma's care is mind, body, and spirit. Emotional support is a key part of every plan, recognizing that true wellness encompasses all aspects of your life."
    },
    {
      question: "Is this covered by insurance?",
      answer: "Naturopathic consultations are covered by most extended health plans in Ontario. Receipts are provided for all services to help with insurance claims."
    },
    {
      question: "Do I need a diagnosis?",
      answer: "No. You deserve care and advocacy whether you're well, facing chronic concerns, or experiencing big life transitions. Dr. Salma's approach is about supporting your whole health journey."
    },
    {
      question: "What makes this different from regular checkups?",
      answer: "Dr. Salma combines medical expertise with naturopathic wisdom, takes time to truly listen, and creates personalized wellness plans that address your unique needs and life circumstances."
    },
    {
      question: "How often should I see Dr. Salma?",
      answer: "This varies based on your needs. Some women benefit from annual wellness checkups, while others may need more frequent support during life transitions or health challenges."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Your Questions, Answered Honestly</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Common Questions About{' '}
            <span className="text-pink-600">Women's Wellness</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Dr. Salma's comprehensive approach to women's wellness and preventive care.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`} 
                />
              </button>
              
              {openFAQ === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Dr. Salma and her team are here to answer all your questions about women's wellness and preventive care. 
              Reach out for personalized guidance and support.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 cursor-pointer"
            >
              Contact Us Today
            </button>
          </div>
        </motion.div>
      </div>

      {/* Download Popup */}
      <DownloadPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        guideName="Women's Wellness Guide"
      />
    </section>
  )
}

export default GeneralWellnessFAQSection 