'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, Target, Users, BookOpen, Shield } from 'lucide-react'

const AboutPhilosophy = () => {
  const treatmentPrinciples = [
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Every woman's health journey is unique and deserves personalized attention"
    },
    {
      icon: Target,
      title: "Root Cause Focus",
      description: "Address underlying imbalances rather than just managing symptoms"
    },
    {
      icon: Shield,
      title: "Integrative Approach",
      description: "Combine the best of conventional medical knowledge with natural healing wisdom"
    },
    {
      icon: BookOpen,
      title: "Empowerment Through Education",
      description: "Help women understand their bodies and take control of their health"
    },
    {
      icon: Heart,
      title: "Collaborative Partnership",
      description: "Work alongside existing healthcare providers for comprehensive care"
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
            Philosophy & Approach
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Heart and Mind Behind Dr. Salma's Practice
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Personal Philosophy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                Personal Philosophy
              </h3>
              <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 mb-6">
                <Quote className="w-8 h-8 text-primary-green mb-3" />
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  "I became a naturopath because I saw too many women leaving my office with prescriptions but not real solutions. Every woman deserves a practitioner who can understand both the medical complexity of her condition and offer gentle, effective natural alternatives that address root causes, not just symptoms."
                </p>
                <p className="text-primary-green font-semibold mt-4">— Dr. Salma</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30">
              <h3 className="text-2xl font-bold text-primary-pink mb-6">
                Treatment Philosophy
              </h3>
              <div className="space-y-4">
                {treatmentPrinciples.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-12 h-12 bg-primary-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <principle.icon className="w-6 h-6 text-primary-pink" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800 mb-2">
                        {principle.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                What This Means for You
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Personalized Care</h4>
                    <p className="text-gray-600 text-sm">Your treatment plan is tailored to your unique needs and circumstances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Comprehensive Understanding</h4>
                    <p className="text-gray-600 text-sm">Both medical and natural perspectives inform your care</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Long-term Solutions</h4>
                    <p className="text-gray-600 text-sm">Focus on addressing root causes for lasting health improvements</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Empowered Decision Making</h4>
                    <p className="text-gray-600 text-sm">You understand your body and health options better</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 text-center">
              <Heart className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                A Partnership in Health
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Salma's philosophy centers on partnership—working together to understand your unique health story and create a path to wellness that honors both your medical needs and your desire for natural solutions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30 max-w-3xl mx-auto">
            <Target className="w-12 h-12 text-primary-pink mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experience Her Philosophy in Action
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Salma's approach isn't just about treating symptoms—it's about understanding your whole health story and creating sustainable solutions that work with your body's natural healing abilities.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Start Your Health Journey
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPhilosophy 