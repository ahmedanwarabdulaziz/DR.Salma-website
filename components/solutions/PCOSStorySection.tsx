'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const PCOSStorySection = () => {
  const commonPhrases = [
    "Have you tried just eating less?",
    "Maybe you need to exercise more",
    "It's probably just stress",
    "This is normal for women your age"
  ]

  const invisibleStruggles = [
    "The exhaustion that hits you like a wall at 3 PM",
    "The hair growing where it shouldn't and falling out where you want it",
    "The skin breakouts that make you feel like a teenager again",
    "The crushing disappointment every time your period doesn't come",
    "The shame when someone suggests 'lifestyle changes' as if you haven't tried everything"
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
            You're Not Alone in This Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is Your Story, Isn't It?
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
                Every morning, you look in the mirror and barely recognize the woman staring back. Your body feels like it's betraying you at every turn. The scale won't budge no matter how little you eat. Your periods arrive like unwelcome surprises—or disappear for months, leaving you wondering what's wrong now.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                You've heard it all before:
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
                But deep down, you know this isn't normal. You know your body is trying to tell you something, but no one seems to be listening.
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
                The Invisible Struggle
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                The worst part? Everyone else thinks you look fine. They don't see:
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
                You're not broken. You're not lazy. You're not making it up.
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
          className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200/30"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-green-600">
                Dr. Salma Sees You—Really Sees You
              </h3>
              <h4 className="text-2xl font-semibold text-gray-800">
                Finally, Someone Who Gets It
              </h4>
              <p className="text-lg text-gray-700 leading-relaxed">
                After 20+ years as a gynecologist, Dr. Salma witnessed countless women like you walk through her office doors. She saw the pain in their eyes when they were handed another prescription without real answers. She felt their frustration when they were dismissed or misunderstood.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That's why she made a life-changing decision. She left conventional medicine to become a naturopath—not because she stopped believing in medical expertise, but because she knew women deserved so much more.
              </p>
            </div>
            
            <div className="relative h-full min-h-[500px]">
              <Image
                src="/images/banner-1.png"
                alt="Dr. Salma understanding women's health"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-3">
                  <User className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Your Gentle Transformation Partner</p>
                    <p className="text-sm text-gray-600">Compassionate care that understands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Image - Full Width */}
          <div className="relative mt-12">
            <Image
              src="/images/banner-8.png"
              alt="Women supporting each other"
              width={1200}
              height={400}
              className="w-full h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-sm font-medium">You're not alone in this journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PCOSStorySection 