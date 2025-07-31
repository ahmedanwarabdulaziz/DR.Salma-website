'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Shield, Users, Award, Sparkles, CheckCircle } from 'lucide-react'

const GeneralWellnessDifferenceSection = () => {
  const differences = [
    {
      icon: Heart,
      title: "Listens—truly listens",
      description: "To your goals, fears, lifestyle, and symptoms. Dr. Salma takes the time to understand your whole story.",
      color: "pink"
    },
    {
      icon: Shield,
      title: "Checks everything",
      description: "Hormones, metabolism, thyroid, nutrition, emotional wellbeing—comprehensive assessment for complete wellness.",
      color: "green"
    },
    {
      icon: Users,
      title: "Designs personalized plans",
      description: "Stepwise plans for energy, mood, immunity, and life milestones tailored to your unique needs.",
      color: "blue"
    },
    {
      icon: Award,
      title: "Creates a partnership",
      description: "Empowering you as the driver of your wellness journey, not just a passive recipient of care.",
      color: "purple"
    },
    {
      icon: Star,
      title: "Proactive care",
      description: "Prevention-focused approach that helps you spot potential issues early and maintain optimal health.",
      color: "yellow"
    },
    {
      icon: Sparkles,
      title: "Life stage support",
      description: "Expert guidance for every transition—from late teens to menopause and beyond.",
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
            Expertise. Empathy.{' '}
            <span className="text-pink-600">Empowerment.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Salma puts the "care" back in women's healthcare with a practitioner who honors your whole life.
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
            Your Personalized Wellness Plan includes:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive annual and milestone checkups</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Preventive screens: hormones, metabolic, thyroid, gynecological, and more</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Personalized strategies for nutrition, movement, stress, immunity, and hormonal balance</span>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <span className="text-gray-700">Real answers and guidance for every life stage—from late teens to menopause and beyond</span>
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
              Join hundreds of women who have found true wellness partnership with Dr. Salma's 
              comprehensive approach. Your journey to empowered health starts here.
            </p>
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300">
              Book Your Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeneralWellnessDifferenceSection 