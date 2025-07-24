'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, ChevronDown, ChevronUp } from 'lucide-react'

const PCOSFAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Will this actually work for me?",
      answer: "Every woman's PCOS journey is different, but Dr. Salma's gentle approach has helped hundreds of women reclaim their lives. She'll meet you exactly where you are and create a plan that feels manageable and hopeful."
    },
    {
      question: "I'm scared to get my hopes up again...",
      answer: "It's completely understandable to feel cautious after being disappointed so many times. Dr. Salma's approach is gentle and gradual—you'll start feeling small improvements that build your confidence along the way."
    },
    {
      question: "What if I can't stick to another program?",
      answer: "This isn't about perfection or willpower. Dr. Salma creates sustainable changes that fit into your real life. She's your biggest cheerleader, not another voice telling you what you're doing wrong."
    },
    {
      question: "I want to get pregnant—can this help?",
      answer: "Many of Dr. Salma's patients have successfully conceived naturally after addressing their PCOS holistically. She understands the emotional weight of fertility struggles and provides both physical and emotional support."
    },
    {
      question: "How long will it take to see results?",
      answer: "Most women start feeling improvements in energy and mood within 4-6 weeks. Physical changes like weight loss and skin improvements typically become noticeable by 2-3 months. Every woman's timeline is unique."
    },
    {
      question: "What if I've tried everything before?",
      answer: "Dr. Salma specializes in cases where conventional approaches haven't worked. Her unique combination of medical expertise and natural healing often succeeds where other treatments have failed."
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
            Your Questions, Answered with Love
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand you have concerns and doubts. Here are answers to the questions we hear most often.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-pink-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-pink-600 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-6 border border-pink-200/30">
                    <div className="flex items-start space-x-3">
                      <Heart className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
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
            <h3 className="text-2xl font-bold text-green-600 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-700 mb-6">
              We're here to help. Every question is important, and every concern matters. Dr. Salma believes in taking the time to address your specific needs and worries.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Schedule a Gentle Discovery Call
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PCOSFAQSection 