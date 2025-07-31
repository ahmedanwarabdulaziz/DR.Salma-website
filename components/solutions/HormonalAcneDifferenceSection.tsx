'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Shield, Users, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const HormonalAcneDifferenceSection = () => {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6 text-pink-600" />,
      title: "Medical-Naturopathic Bridge",
      description: "Combines gynecological expertise with natural healing for comprehensive acne treatment."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-600" />,
      title: "Root Cause Focus",
      description: "Treats hormonal imbalances rather than just covering symptoms."
    },
    {
      icon: <Users className="w-6 h-6 text-pink-600" />,
      title: "Personalized Plans",
      description: "Tailored treatment strategies based on your unique hormone profile."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-green-600" />,
      title: "Gentle & Effective",
      description: "Natural solutions that work with your body, not against it."
    }
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
            The Dr. Salma Difference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Why Her Approach to Hormonal Acne Treatment is Different
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                Beyond Surface-Level Solutions
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Salma doesn't just treat your acne—she understands the complex hormonal dance that's causing it. Her unique combination of medical expertise and natural healing creates a comprehensive approach that addresses the root causes, not just the symptoms.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/pic40.png"
              alt="Dr. Salma's approach to hormonal acne treatment"
              width={400}
              height={250}
              className="rounded-2xl mb-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HormonalAcneDifferenceSection 