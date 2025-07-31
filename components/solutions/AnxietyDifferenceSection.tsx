'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, CheckCircle, User } from 'lucide-react'
import Image from 'next/image'

const AnxietyDifferenceSection = () => {
  const differences = [
    {
      title: "Validates your feelings and lived experience",
      description: "As REAL, not 'just moodiness'"
    },
    {
      title: "Brings the medical eyes of a doctor AND the heart of a gentle guide",
      description: "Comprehensive care approach"
    },
    {
      title: "Seeks the true, root-cause hormonal and biological patterns",
      description: "Behind your anxiety"
    },
    {
      title: "Offers the kind of compassionate partnership",
      description: "Every woman deserves"
    }
  ]

  const personalizedPlan = [
    "Comprehensive hormone assessment (cycle mapping, thyroid/adrenal tests, nutrient review)",
    "Nutrition and lifestyle guidance designed to overcome hormonal triggers of anxiety",
    "Targeted natural supports (like magnesium, adaptogens, or gentle botanicals)",
    "Mind-body tools for sleep, stress reduction, and confidence building",
    "Ongoing encouragement and check-ins—never leaving you on your own"
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            What Makes Dr. Salma Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            She Knows Hormones—and How They Shape Your Mind
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Content */}
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
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Where Science Meets Soul
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Dr. Salma is Ontario's only healer trained as both a gynecologist and naturopath. She investigates PMS, PMDD, and perimenopausal mood shifts, the hidden role of cortisol, thyroid, and insulin in anxiety, and subtle imbalances in progesterone or estrogen that cloud your moods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h4 className="text-2xl font-semibold text-gray-900 mb-4">
                With Dr. Salma, you get:
              </h4>
              <div className="space-y-4">
                {differences.map((difference, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-1">{difference.title}</h5>
                      <p className="text-gray-600">{difference.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Image and Plan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative">
              <Image
                src="/images/pic40.png"
                alt="Dr. Salma - Anxiety & Hormonal Imbalance Support"
                width={600}
                height={400}
                className="rounded-3xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-lg border border-pink-200">
                <div className="flex items-center space-x-2">
                  <User className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Your Personalized Care</p>
                    <p className="text-xs text-gray-600">Tailored to your unique journey</p>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-pink-200/30"
            >
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                Your Personalized Healing Plan
              </h4>
              <p className="text-gray-600 mb-6">
                Your plan is always just for you, but might include:
              </p>
              <div className="space-y-3">
                {personalizedPlan.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AnxietyDifferenceSection 