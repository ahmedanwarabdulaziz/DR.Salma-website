'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const PainManagementStorySection = () => {
  const commonPhrases = [
    "You just have a low pain tolerance",
    "Maybe try losing weight or getting more sleep",
    "It's all in your head",
    "You'll just have to live with it"
  ]

  const invisibleStruggles = [
    "That you dread mornings, wondering if today will be a 'good' or 'bad' day",
    "How pain clouds your mood, focus, and relationships",
    "The guilt of missing out or feeling less present with loved ones",
    "The frustration with side effects of medication—or being told you 'just need to manage it'",
    "The invisibility of suffering when 'tests look normal'"
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
            You're Not Alone—Your Pain Deserves To Be Heard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This Is Your Story, Isn't It?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Day after day, you endure aches, headaches, or deep pain that makes even simple things feel impossible. You cancel plans, miss out on what matters, or push through with a smile that hides how much it hurts. You're offered pills, told it's "just part of aging or womanhood," but you know your body needs more.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What you hear:
              </p>
            </motion.div>

            {/* Common Phrases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {commonPhrases.map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white rounded-2xl p-4 shadow-soft border border-gray-100"
                >
                  <Quote className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium italic">"{phrase}"</span>
                </motion.div>
              ))}
            </motion.div>

            {/* But deep down */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                But you know what it's like to feel joy dulled, hope slipping, and to wonder if anyone will really help.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The Pain People Don't See:
              </p>
            </motion.div>

            {/* Invisible Struggles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {invisibleStruggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-white rounded-2xl p-4 shadow-soft border border-gray-100"
                >
                  <Heart className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{struggle}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                You are not your pain. You are resilient, worthy, and deserve relief.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/salma-2.png"
                  alt="Dr. Salma - Understanding Chronic Pain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center border border-pink-200/30">
                <div className="text-3xl font-bold text-pink-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">Report pain reduction</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-200/30">
                <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Reduced medication use</div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 border border-purple-200/30"
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Quote key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "Years of migraines and muscle aches had me feeling defeated. Dr. Salma listened, made a gentle plan with acupuncture and mindful nutrition—now, I live most days pain-free and happier than I ever thought possible."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Nadia</div>
                  <div className="text-sm text-gray-600">Pain Management Patient</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PainManagementStorySection 