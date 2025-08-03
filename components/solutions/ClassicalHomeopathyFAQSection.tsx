'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart, ArrowRight, Download } from 'lucide-react'
import DownloadPopup from '@/components/DownloadPopup'

const ClassicalHomeopathyFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const faqs = [
    {
      question: "What is classical homeopathy, really?",
      answer: "It's a personalized, mind-body healing art that honors the totality of your experience. True classical homeopaths select one remedy to match you—not just your diagnosis."
    },
    {
      question: "Can it help when nothing else does?",
      answer: "Often, yes. Dr. Salma specializes in 'tough cases' and has seen surpising breakthroughs with gentle, individualized homeopathic care."
    },
    {
      question: "Is this covered by insurance?",
      answer: "Many extended health plans in Ontario cover naturopathic services, and receipts are provided for easy reimbursement."
    },
    {
      question: "Will I have to stop my other treatments?",
      answer: "No. Homeopathy works gently alongside other therapies. Dr. Salma always coordinates with your healthcare plan and values safety first."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - FAQs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
                Your Questions, Answered with Empathy
              </h2>
              <p className="text-xl text-gray-600">
                Common concerns about classical homeopathy
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-pink-600 flex-shrink-0" />
                    )}
                  </button>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-4"
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30"
          >
            <div className="text-center space-y-6">
              <Heart className="w-16 h-16 text-pink-600 mx-auto" />
              <h3 className="text-2xl font-bold text-gray-900">
                Begin Your Deeper Healing Journey
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You are so much more than a list of symptoms. You deserve to be heard, understood, and gently guided back to balance with medicine that honors your wholeness.
              </p>
              <div className="space-y-4">
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                >
                  <span>Book Your Heart-to-Heart Consultation</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => setIsPopupOpen(true)}
                  className="w-full bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 cursor-pointer"
                >
                  Download: "Whole-Person Wellness Guide"
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Download Popup */}
      <DownloadPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
        guideName="Whole-Person Wellness Guide"
      />
    </section>
  )
}

export default ClassicalHomeopathyFAQSection 