'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart } from 'lucide-react'
import Image from 'next/image'

const EndometriosisFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Do I have to take hormones forever?",
      answer: "Not necessarily. Dr. Salma's approach works with your medical history to reduce reliance on medication if possible, while gently supporting your body's own balance."
    },
    {
      question: "Can I get pregnant with endometriosis?",
      answer: "Many women with endometriosis conceive—with or without medical intervention. Dr. Salma will explore the gentle bridges between fertility and healing, honoring your goals and hopes."
    },
    {
      question: "What if I've already had multiple surgeries?",
      answer: "Even if you've had surgery, root-cause healing can dramatically improve your quality of life and prevent further flares. There is always something more that can be done."
    },
    {
      question: "How soon will I feel better?",
      answer: "Many women see pain reduction or more manageable cycles within the first 1–2 cycles, with further healing continuing over months."
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
            Your Questions, Answered from the Heart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything You Need to Know About Endometriosis Pain Management
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
                Ready to Find Relief?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a discovery call to learn how Dr. Salma can help you on your endometriosis journey.
              </p>
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Book Your Discovery Call
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default EndometriosisFAQSection 