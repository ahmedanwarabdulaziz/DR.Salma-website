'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, Heart, ArrowRight } from 'lucide-react'

export default function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-rose-50 to-pink-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-rose-500 rounded-full flex items-center justify-center shadow-xl">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            Dr. Salma's Blog
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
          >
            Expert insights on women's health, natural healing, and wellness wisdom
          </motion.p>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <Heart className="w-6 h-6 text-pink-600" />
              <span className="font-medium">Expert Health Insights</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <BookOpen className="w-6 h-6 text-green-600" />
              <span className="font-medium">Natural Remedies</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-700">
              <ArrowRight className="w-6 h-6 text-blue-600" />
              <span className="font-medium">Patient Stories</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
