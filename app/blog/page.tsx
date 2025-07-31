'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { BookOpen, Clock, Heart, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
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
              Blog
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Women's Health Insights & Wellness Wisdom
            </motion.p>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-8 py-4 rounded-full shadow-lg mb-12"
            >
              <Clock className="w-5 h-5" />
              <span className="font-semibold text-lg">Coming Soon</span>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* What to Expect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Evidence-based articles on women's health, hormonal balance, and natural wellness approaches.
              </p>
            </motion.div>

            {/* Patient Stories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Stories</h3>
              <p className="text-gray-600 leading-relaxed">
                Real experiences and transformation journeys from women who found their path to wellness.
              </p>
            </motion.div>

            {/* Wellness Tips */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <ArrowRight className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Wellness Tips</h3>
              <p className="text-gray-600 leading-relaxed">
                Practical advice for daily wellness, nutrition, stress management, and preventive care.
              </p>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-3xl p-8 md:p-12 border border-pink-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Stay Connected
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Be the first to know when our blog launches. Get exclusive access to women's health insights and wellness wisdom.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Get Notified</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-pink-600 hover:text-white transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
} 