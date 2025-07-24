'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, BookOpen, Star, Heart } from 'lucide-react'

const AboutRecognition = () => {
  const thoughtLeadership = [
    "Women's health conferences and professional events",
    "Educational workshops and community seminars",
    "Professional collaboration with healthcare providers",
    "Media interviews as the 'Medical Naturopath' expert"
  ]

  const continuingEducation = [
    "Regular attendance at medical and naturopathic conferences",
    "Ongoing education in emerging natural health research",
    "Professional networking with leading practitioners in both fields",
    "Continuous refinement of treatment protocols based on patient outcomes"
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
            Professional Recognition & Community
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Thought Leadership and Continuous Growth
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Thought Leadership */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                Thought Leadership
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Salma serves as an educational authority in women's natural health, regularly contributing to:
              </p>
              <div className="space-y-4">
                {thoughtLeadership.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30">
              <h3 className="text-2xl font-bold text-primary-pink mb-6">
                Continuing Education & Growth
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Committed to staying at the forefront of integrative women's health through:
              </p>
              <div className="space-y-4">
                {continuingEducation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-pink rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{item}</p>
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
                Professional Impact
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Educational Authority</h4>
                    <p className="text-gray-600 text-sm">Recognized expert in women's natural health</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-pink/20 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary-pink" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Leader</h4>
                    <p className="text-gray-600 text-sm">Active contributor to women's health education</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary-green" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Lifelong Learner</h4>
                    <p className="text-gray-600 text-sm">Continuously advancing her knowledge and skills</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 text-center">
              <Star className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Commitment to Excellence
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Salma's dedication to continuous learning and professional development ensures that her patients receive the most current, evidence-based care available in integrative women's health.
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
            <Award className="w-12 h-12 text-primary-pink mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trust in Professional Excellence
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Salma's ongoing commitment to education and professional development means you can trust that you're receiving care from a practitioner who stays at the forefront of integrative women's health.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Experience Her Expertise
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutRecognition 