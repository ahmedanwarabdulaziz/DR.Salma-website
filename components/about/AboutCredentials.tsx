'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, GraduationCap, Award, BookOpen, Globe } from 'lucide-react'
import Link from 'next/link'

const AboutCredentials = () => {
  const credentials = [
    "20+ Years Practicing Gynecologist",
    "Licensed Naturopathic Doctor",
    "Clinical Homeopathy Specialist (CEDH)",
    "Traditional Chinese Medicine & Acupuncture",
    "Available at Sea Meadows Rehab"
  ]

  const education = [
    {
      title: "Medical Degree",
      description: "Gynecology specialization with 20+ years clinical experience"
    },
    {
      title: "Naturopathic Training",
      description: "Comprehensive natural medicine education"
    },
    {
      title: "Clinical Homeopathy Diploma",
      description: "Center for Education and Development of Clinical Homeopathy (CEDH)"
    },
    {
      title: "Traditional Chinese Medicine",
      description: "Acupuncture and TCM protocols"
    },
    {
      title: "Continuing Education",
      description: "Ongoing training in integrative women's health approaches"
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
            Professional Credentials & Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive Qualifications That Build Trust and Confidence
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30">
              <h3 className="text-2xl font-bold text-primary-green mb-6">
                Comprehensive Qualifications
              </h3>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-6 h-6 text-primary-green flex-shrink-0" />
                    {credential === "Available at Sea Meadows Rehab" ? (
                      <Link 
                        href="https://seameadowsrehab.ca/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-700 font-medium hover:text-primary-pink hover:underline transition-colors duration-300"
                      >
                        {credential}
                      </Link>
                    ) : (
                      <span className="text-gray-700 font-medium">{credential}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30">
              <h3 className="text-2xl font-bold text-primary-pink mb-6">
                Educational Background
              </h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary-pink/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-primary-pink" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 mb-2">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
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
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 max-w-3xl mx-auto">
            <Award className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trust in Excellence
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dr. Salma's comprehensive training and extensive experience create a foundation of trust and confidence. Her unique combination of medical expertise and natural healing knowledge ensures you receive the highest quality care available.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutCredentials 