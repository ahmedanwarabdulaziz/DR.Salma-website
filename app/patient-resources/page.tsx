'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { motion } from 'framer-motion'
import { FileText, Clock, Download, ArrowRight, Heart, BookOpen, Users } from 'lucide-react'

export default function PatientResourcesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
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
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-xl">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
            >
              Patient Resources
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto"
            >
              Your Complete Guide to Women's Health & Wellness
            </motion.p>

            {/* Coming Soon Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-full shadow-lg mb-12"
            >
              <Clock className="w-5 h-5" />
              <span className="font-semibold text-lg">Coming Soon</span>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {/* Educational Guides */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Guides</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive guides on hormonal health, fertility, menopause, and preventive care strategies.
              </p>
            </motion.div>

            {/* Downloadable Resources */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Download className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Downloadable Resources</h3>
              <p className="text-gray-600 leading-relaxed">
                Checklists, symptom trackers, nutrition guides, and wellness worksheets for your journey.
              </p>
            </motion.div>

            {/* Support Community */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Support Community</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with other women on similar health journeys and share experiences.
              </p>
            </motion.div>
          </div>

          {/* Additional Features */}
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {/* Video Library */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-8 border border-purple-200"
            >
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Video Library</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Educational videos on women's health topics, wellness practices, and self-care techniques.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hormonal health explanations</li>
                <li>• Stress management techniques</li>
                <li>• Nutrition and lifestyle tips</li>
              </ul>
            </motion.div>

            {/* Interactive Tools */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 border border-orange-200"
            >
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interactive Tools</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Symptom trackers, health calculators, and personalized wellness assessments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Period and cycle tracking</li>
                <li>• Symptom assessment tools</li>
                <li>• Wellness goal setting</li>
              </ul>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-green-200">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Be the First to Access
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our patient resource library and get exclusive access to Dr. Salma's comprehensive wellness guides and tools.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-600 hover:text-white transition-colors duration-300">
                  Learn More
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