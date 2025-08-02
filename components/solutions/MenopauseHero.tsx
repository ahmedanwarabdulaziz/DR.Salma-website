'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Heart, Leaf } from 'lucide-react'

const MenopauseHero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft border border-rose-200/30"
            >
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium text-gray-900">
                Specialized Menopause & Perimenopause Support
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-green-600">Menopause &</span>
                <br />
                <span className="text-pink-600">
                  Perimenopause Support
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                "If You're Struggling with Menopause or Perimenopause—Your Body Feels Unpredictable, Your Moods Shift Overnight, and No One Seems to Understand What You're Going Through…"
              </p>
            </motion.div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                "Dr. Salma Honors the Complexity of This Transition and Offers Gentle, Personalized Support that Goes Far Beyond Hot Flashes or 'Just Dealing With It.'"
              </p>
            </motion.div>

            {/* Outcome */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
            >
              <p className="text-xl text-green-600 font-semibold leading-relaxed">
                "Embrace This New Chapter with Confidence, Comfort, and Genuine Relief."
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center space-x-2">
                <span>Book Your Heart-to-Heart Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-pink-600 border-2 border-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 flex items-center space-x-2">
                <span>Download: "Menopause Transition Wellness Guide"</span>
                <Leaf className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <Image
              src="/images/pic69.png"
              alt="Dr. Salma - Menopause & Perimenopause Support Specialist"
              width={500}
              height={600}
              className="rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MenopauseHero 