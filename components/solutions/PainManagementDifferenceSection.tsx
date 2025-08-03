'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Shield, Users, Award, Sparkles, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const PainManagementDifferenceSection = () => {
  const router = useRouter()
  
  const differences = [
    {
      icon: Heart,
      title: "Listens Fully to Your Experience",
      description: "No minimizing, no rushing. Dr. Salma takes the time to truly understand your pain and its impact on your life.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Assesses Root Causes",
      description: "Identifies hormonal, inflammatory, muscular, or emotional factors that contribute to your pain.",
      color: "green"
    },
    {
      icon: Users,
      title: "Combines Medical & Holistic",
      description: "Medical confidence with holistic skill to truly help—not just manage symptoms, but address underlying causes.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Gentle, Time-Tested Relief",
      description: "Uses acupuncture and Traditional Chinese Medicine (TCM) techniques that have been trusted for centuries.",
      color: "purple"
    },
    {
      icon: Star,
      title: "Personalized Treatment Plans",
      description: "Every woman's pain is different. Your treatment plan is tailored to your unique body and health history.",
      color: "yellow"
    },
    {
      icon: Sparkles,
      title: "Ongoing Support & Guidance",
      description: "Continuous encouragement and progress check-ins—never 'just treatments' but a true partnership in healing.",
      color: "indigo"
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      pink: "bg-pink-50 text-pink-600 border-pink-200",
      green: "bg-green-50 text-green-600 border-green-200",
      blue: "bg-blue-50 text-blue-600 border-blue-200",
      purple: "bg-purple-50 text-purple-600 border-purple-200",
      yellow: "bg-yellow-50 text-yellow-600 border-yellow-200",
      indigo: "bg-indigo-50 text-indigo-600 border-indigo-200"
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.pink
  }

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
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>What Makes Dr. Salma Different</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Both Science and Ancient Healing,{' '}
            <span className="text-pink-600">Just for Women</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Salma is Ontario's only practitioner who combines advanced medical diagnostics with the wisdom of Traditional Chinese Medicine (TCM) and acupuncture.
          </p>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differences.map((difference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 border ${getColorClasses(difference.color)}`}>
                <difference.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {difference.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {difference.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-pink-50 to-green-50 rounded-3xl p-8 border border-pink-100"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            With Dr. Salma, you get:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Individualized acupuncture sessions based on your unique body and health history</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Nutrition, herbal, and lifestyle coaching to support healing between sessions</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive guidance for chronic issues like headaches, pelvic pain, fibromyalgia, or post-surgical pain</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Encouragement and progress check-ins—never "just treatments"</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Experience the Difference
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join hundreds of women who have found lasting pain relief with Dr. Salma's 
              comprehensive approach. Your journey to pain-free living starts here.
            </p>
            <button 
              onClick={() => router.push('/contact')}
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 cursor-pointer"
            >
              Book Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PainManagementDifferenceSection 