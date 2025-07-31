'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, CheckCircle, User } from 'lucide-react'
import Image from 'next/image'

const MenopauseDifferenceSection = () => {
  const differences = [
    {
      title: "Complete, unrushed assessments",
      description: "Your story is the starting point, not an afterthought"
    },
    {
      title: "Natural therapies proven to help",
      description: "With hot flashes, mood, sleep, and more"
    },
    {
      title: "Lifestyle, nutritional, and mind-body guidance",
      description: "Unique to your needs"
    },
    {
      title: "Help managing bone, heart, and brain health",
      description: "For the long-term"
    }
  ]

  const personalizedPlan = [
    "Comprehensive hormone evaluation: FSH, LH, estradiol, thyroid, adrenal, and more",
    "Safe, evidence-backed natural supports: Botanical/herbal remedies, mind-body practices, gentle movement, stress resilience",
    "Targeted nutrition and lifestyle plans: For bone, heart, metabolism, and sleep",
    "HRT support: Medical guidance if you choose hormone therapy, or natural alternatives if you prefer",
    "Emotional and sexual wellness: Resources and support for every aspect of your life"
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
            Your Menopause Ally—Not Just Another Doctor
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
                Dr. Salma is Ontario's only practitioner who can interpret your changing risks and labs with decades of medical expertise, offer compassionate, safe HRT guidance plus the most complete natural protocols, validate the emotional, mental, and physical aspects of your journey, and give you the time, empathy, and practical tools you need.
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
                With her, you receive:
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
                alt="Dr. Salma - Menopause & Perimenopause Support"
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
                Your Personalized Menopause & Perimenopause Plan
              </h4>
              <p className="text-gray-600 mb-6">
                No two women are alike—Dr. Salma's plans may include:
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

export default MenopauseDifferenceSection 