'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const HormonalAcneJourneySection = () => {
  const journeySteps = [
    {
      month: "Month 1-2",
      title: "Foundation & Assessment",
      description: "Comprehensive hormone testing and skin analysis to understand your unique acne triggers.",
      color: "pink",
      image: "/images/pic37.png"
    },
    {
      month: "Month 3-4", 
      title: "Healing & Balance",
      description: "Gentle natural treatments begin working to balance hormones and calm inflammation.",
      color: "green",
      image: "/images/pic38.png"
    },
    {
      month: "Month 6+",
      title: "Radiance Restored",
      description: "Clear, confident skin. You're not just managing acne anymore—you're thriving despite it.",
      color: "purple",
      image: "/images/pic39.png"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
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
            Your Transformation Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Struggle to Radiance - One Gentle Step at a Time
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="space-y-12 lg:space-y-16">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-soft border border-gray-200">
                    <span className="text-sm font-medium text-gray-600">{step.month}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Image
                  src={step.image}
                  alt={`${step.title} - Hormonal Acne Treatment Journey`}
                  width={400}
                  height={300}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HormonalAcneJourneySection 