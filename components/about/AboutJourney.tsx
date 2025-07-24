'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar, GraduationCap, Leaf } from 'lucide-react'
import Image from 'next/image'

const AboutJourney = () => {
  const journeySteps = [
    {
      phase: "Years 1-20+",
      title: "Practicing Gynecologist",
      description: "Helped thousands of women navigate complex health challenges with conventional medical expertise",
      icon: User,
      color: "green"
    },
    {
      phase: "Career Transformation",
      title: "Advanced Naturopathic Training + Clinical Homeopathy",
      description: "Pursued comprehensive natural medicine education to bridge conventional and natural healing",
      icon: GraduationCap,
      color: "pink"
    },
    {
      phase: "Current",
      title: "Medical Naturopath",
      description: "Combines gynecological expertise with naturopathic training and homeopathy for comprehensive care",
      icon: Leaf,
      color: "green"
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
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Dr. Salma's Transformative Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From Gynecologist to Medical Naturopath: A Journey of Healing
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
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For over 20 years, Dr. Salma practiced as a gynecologist, helping thousands of women navigate complex health challenges. However, she increasingly witnessed patients leaving her office with prescriptions but not real solutions. She saw the pain in their eyes when they were handed another medication without addressing the root causes of their conditions.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                This realization sparked her life-changing transformation.
              </p>
            </motion.div>

            {/* Transformation Quote */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                After two decades of practicing conventional gynecology, Dr. Salma recognized that women needed more than conventional medicine could offer. She pursued advanced naturopathic training and earned her Clinical Homeopathy Diploma from the Center for Education and Development of Clinical Homeopathy (CEDH), becoming Ontario's premier Medical Naturopath specializing in complex women's health conditions.
              </p>
            </motion.div>

            {/* Today's Expertise */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30"
            >
              <h3 className="text-2xl font-bold text-primary-green mb-4">
                Today, she uniquely combines:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Two decades of gynecological diagnostic expertise</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Advanced naturopathic training and protocols</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Clinical homeopathy specialization</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Traditional Chinese Medicine and acupuncture</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Journey Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-primary-green mb-8">
                Her Professional Evolution
              </h3>
            </motion.div>

            {/* Journey Steps */}
            <div className="space-y-8">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Line */}
                  {index < journeySteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-primary-green to-primary-pink"></div>
                  )}
                  
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.color === 'green' ? 'bg-primary-green/20' : 'bg-primary-pink/20'
                    }`}>
                      <step.icon className={`w-8 h-8 ${
                        step.color === 'green' ? 'text-primary-green' : 'text-primary-pink'
                      }`} />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="text-sm font-semibold text-gray-500">{step.phase}</span>
                      </div>
                      <h4 className={`text-xl font-bold mb-3 ${
                        step.color === 'green' ? 'text-primary-green' : 'text-primary-pink'
                      }`}>
                        {step.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 text-center"
            >
              <Heart className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                This extraordinary evolution allows Dr. Salma to offer what no other practitioner can: the diagnostic confidence of a medical doctor with the comprehensive natural solutions of a master naturopath.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutJourney 