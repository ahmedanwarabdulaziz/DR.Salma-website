'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const EndometriosisStorySection = () => {
  const commonPhrases = [
    "That's just part of being a woman.",
    "Just take some painkillers.",
    "It's probably just stress.",
    "Have you tried birth control?"
  ]

  const invisibleStruggles = [
    "The excruciating cramps that steal whole days",
    "The fatigue that makes even small tasks overwhelming",
    "The frustration when medication barely touches the pain or brings harsh side effects",
    "The heartbreak every time you worry about your hopes for children"
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
            Your Story Matters—And You Are Not Alone
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
                Maybe you've lost track of the days you missed work, the gatherings you skipped, or the hours spent curled up in pain. You plan your life around your cycle, timing social events and travel to the rare "good days." You watch people glaze over when you mention period pain—everyone says, "That's just part of being a woman."
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                But you know this isn't "normal." You feel trapped—by the pain, the fatigue, and especially by not being believed.
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
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                But you know this isn't "normal." You feel trapped—by the pain, the fatigue, and especially by not being believed.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Invisible Struggles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* The Invisible Struggle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-pink-600 mb-6">
                The Reality Others Don't See
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Most people don't see:
              </p>
            </motion.div>

            {/* Struggle List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {invisibleStruggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{struggle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* You're not broken */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 border border-pink-300/30 text-center"
            >
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                You're not weak. You're not exaggerating. And you're not alone.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dr. Salma Sees You Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-12 border border-green-200/30"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                Dr. Salma Believes You—And Sees the Whole Picture
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Finally, Someone Who Knows the Depth of Endo
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                After over 20 years as a gynecologist, Dr. Salma has seen—and truly listened to—hundreds of women struggling with endometriosis. She knows the pain is real, and that "just taking the pill" or living on painkillers is not a solution. That's why she became a medical naturopath: to offer care that finally goes deeper.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                She is your champion for uncovering hidden patterns that drive your pain, fatigue, and inflammation.
              </p>
            </div>
            
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-6 lg:mt-0">
              <Image
                src="/images/pic16.png"
                alt="Dr. Salma understanding women's endometriosis journey"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Your Gentle Healing Partner</p>
                    <p className="text-xs md:text-sm text-gray-600">Compassionate care that understands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Image - Full Width */}
          <div className="relative mt-8 md:mt-12">
            <Image
              src="/images/pic36.png"
              alt="Women supporting each other"
              width={1200}
              height={400}
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
              <p className="text-xs md:text-sm font-medium">You're not alone in this journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default EndometriosisStorySection 