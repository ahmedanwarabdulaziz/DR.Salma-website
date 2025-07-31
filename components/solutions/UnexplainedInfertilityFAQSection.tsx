'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Heart } from 'lucide-react'
import Image from 'next/image'

const UnexplainedInfertilityFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Can you help if we're already working with a clinic?",
      answer: "Absolutely. Dr. Salma's support is often what unlocks success alongside (or between) medical protocols. She's collaborative and will work with your care team."
    },
    {
      question: "What if my tests are normal?",
      answer: "Normal doesn't always mean optimal. Dr. Salma specializes in looking deeper—finding patterns or root causes easily missed in standard testing."
    },
    {
      question: "How soon could things change?",
      answer: "Hope and clarity often come right away. Cycles may regulate and labs improve in a few months. For some, natural conception happens; for all, the journey becomes lighter and clearer."
    },
    {
      question: "Can my partner be included?",
      answer: "Yes! Infertility is never just \"her\" story. Dr. Salma always supports both partners throughout the journey."
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
            Your Questions, Answered With Empathy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything You Need to Know About Unexplained Infertility Solutions
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
                Ready to Find Answers?
              </h3>
              <p className="text-gray-600 mb-6">
                Book a discovery call to learn how Dr. Salma can help you on your fertility journey.
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

export default UnexplainedInfertilityFAQSection 