'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Heart } from 'lucide-react'

const HashimotosFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Will this actually help if I'm already on thyroid medication?",
      answer: "Absolutely. Dr. Salma works with your existing medication and doctor. Her natural protocols often help your thyroid work more efficiently, and many women find they can work with their doctor to optimize their medication as their overall health improves."
    },
    {
      question: "I'm scared to hope that I could feel better...",
      answer: "It's completely understandable to feel cautious after being disappointed so many times. Dr. Salma's approach is gentle and gradual—you'll start noticing small improvements that build your confidence as your body begins to heal."
    },
    {
      question: "What if my doctor doesn't support natural approaches?",
      answer: "Dr. Salma never recommends stopping prescribed medications and works collaboratively with your existing healthcare team. Her medical background helps her communicate effectively with other doctors and provides protocols that complement conventional treatment."
    },
    {
      question: "How is this different from just taking supplements?",
      answer: "This isn't about random supplements. Dr. Salma addresses the autoimmune root of Hashimoto's through comprehensive protocols that support your immune system, reduce inflammation, heal your gut, and nourish your thyroid—all while working with your unique lab results and symptoms."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            Your Questions, Answered with Understanding
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Common concerns about Hashimoto's management, addressed with compassion
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                                 <ChevronDown
                   className={`w-6 h-6 text-primary-green transition-transform duration-300 ${
                     openIndex === index ? 'rotate-180' : ''
                   }`}
                 />
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
                     <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30 max-w-3xl mx-auto">
             <Heart className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Salma and her team are here to answer all your questions about Hashimoto's management. No question is too small or too big—we're here to support you every step of the way.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Ask Your Question
                <ChevronDown className="w-5 h-5 ml-2 transition-transform group-hover:translate-y-1" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HashimotosFAQSection 