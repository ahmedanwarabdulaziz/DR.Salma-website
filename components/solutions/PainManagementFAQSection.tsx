'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart } from 'lucide-react'

const PainManagementFAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: "Is acupuncture safe?",
      answer: "Yes—Dr. Salma uses only the gentlest techniques, always with your comfort and safety at heart. She has extensive training and experience in acupuncture and Traditional Chinese Medicine."
    },
    {
      question: "Will I need to stop medication?",
      answer: "Only if your own healing allows it. Dr. Salma works with you and your doctor to make safe choices. She never recommends stopping medication without proper medical consultation."
    },
    {
      question: "How soon will I see improvement?",
      answer: "Many women feel some relief within a few sessions. Deeper changes often come in 1–3 months, with continued improvement over time. Every woman's healing journey is unique."
    },
    {
      question: "I'm scared of needles—can I still get help?",
      answer: "Absolutely. Acupressure and gentle, needle-free options are also available—you never have to do anything that makes you uncomfortable. Dr. Salma will work with your comfort level."
    },
    {
      question: "What types of pain can acupuncture help with?",
      answer: "Acupuncture can help with various types of pain including headaches, migraines, muscle pain, joint pain, pelvic pain, fibromyalgia, and post-surgical pain. Dr. Salma will assess your specific situation."
    },
    {
      question: "How often will I need treatments?",
      answer: "Initially, you may need treatments more frequently (1-2 times per week). As you improve, treatments become less frequent. Dr. Salma will create a personalized plan based on your needs."
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
            <span>Your Questions, Answered Gently</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Common Questions About{' '}
            <span className="text-pink-600">Pain Management</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about Dr. Salma's approach to pain management and acupuncture.
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
              Dr. Salma and her team are here to answer all your questions about pain management and acupuncture. 
              Reach out for personalized guidance and support.
            </p>
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300">
              Contact Us Today
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PainManagementFAQSection 