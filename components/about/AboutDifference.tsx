'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Brain, Users, Clock, Award, Star } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const AboutDifference = () => {
  const router = useRouter()
  
  const advantages = [
    {
      icon: Brain,
      title: "The diagnostic confidence you need from her medical background",
      color: "green"
    },
    {
      icon: Heart,
      title: "The natural solutions you want from her naturopathic training",
      color: "pink"
    },
    {
      icon: Users,
      title: "The specialized expertise you deserve in women's health",
      color: "green"
    },
    {
      icon: Clock,
      title: "The time and attention you've been seeking",
      color: "pink"
    },
    {
      icon: Award,
      title: "The integration of both worlds without having to choose",
      color: "green"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
            What Makes Dr. Salma Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The Bridge Between Two Worlds
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Unique Position */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                Ontario's Only Medical Naturopath
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Salma is the only practitioner in Ontario who can authentically claim the positioning: "Where Medical Expertise Meets Natural Healing." Her rare combination of:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">20+ years of gynecological experience PLUS comprehensive naturopathic training</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Medical diagnostic confidence PLUS natural healing wisdom</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-700">Conventional medicine understanding PLUS holistic treatment approaches</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30">
              <h3 className="text-2xl font-bold text-primary-pink mb-6">
                Unassailable Competitive Advantage
              </h3>
              <p className="text-gray-700 leading-relaxed">
                This creates an unassailable competitive advantage that neither conventional doctors nor typical naturopaths can replicate. Dr. Salma bridges the gap between two worlds that have left many women feeling frustrated and unheard.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Patient Advantages */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                Her Unique Patient Advantage
              </h3>
              <p className="text-gray-600 mb-6">
                With Dr. Salma, you get:
              </p>
              <div className="space-y-4">
                {advantages.map((advantage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                      advantage.color === 'green' ? 'bg-primary-green/20' : 'bg-primary-pink/20'
                    }`}>
                      <advantage.icon className={`w-6 h-6 ${
                        advantage.color === 'green' ? 'text-primary-green' : 'text-primary-pink'
                      }`} />
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {advantage.title}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 text-center">
              <Star className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                No More Choosing Between Worlds
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You don't have to choose between medical expertise and natural healing. Dr. Salma provides both, seamlessly integrated into a comprehensive approach that addresses your unique health needs.
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
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 max-w-3xl mx-auto">
            <Award className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experience the Difference
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Salma's unique combination of medical expertise and natural healing creates a comprehensive approach that addresses both the symptoms and root causes of women's health challenges.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              <span className="flex items-center">
                Book Your Consultation
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutDifference 