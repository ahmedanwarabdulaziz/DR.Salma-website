'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Building, Users, Clock, Globe } from 'lucide-react'

const AboutClinics = () => {
  const clinics = [
    {
      name: "Sea Meadows Rehab",
      description: "Dr. Salma provides her specialized women's health services at Sea Meadows Rehab, a world-class rehabilitation center offering individualized recovery plans and comprehensive wellness solutions. Located in Oakville, Ontario, this state-of-the-art facility combines advanced treatment methodologies with personalized care approaches, creating an optimal environment for women's health and wellness.",
      features: ["World-class rehabilitation center", "State-of-the-art facilities", "Individualized care plans", "Comprehensive wellness solutions", "Located in Oakville, Ontario"]
    }
  ]

  const virtualServices = [
    "Comprehensive health assessments and follow-up care",
    "Lab review and interpretation sessions",
    "Ongoing support and monitoring",
    "Educational consultations and treatment planning"
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
            Clinic Partnership & Location
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional Practice Setting for Your Care
          </p>
        </motion.div>

        {/* Clinic Information */}
        <div className="max-w-4xl mx-auto mb-16">
          {clinics.map((clinic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-primary-green" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{clinic.name}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                {clinic.description}
              </p>
              <div className="space-y-3">
                {clinic.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-green rounded-full"></div>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Virtual Consultations */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-primary-pink/20 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-primary-pink" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Virtual Consultations</h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Serving women across Ontario through secure online consultations, Dr. Salma provides:
              </p>
              <div className="space-y-3">
                {virtualServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-pink rounded-full"></div>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200/30">
              <h4 className="text-lg font-bold text-primary-pink mb-4">
                Benefits of Virtual Care
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-pink" />
                  <span className="text-gray-700 text-sm">Convenient scheduling</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-primary-pink" />
                  <span className="text-gray-700 text-sm">Access from anywhere in Ontario</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary-pink" />
                  <span className="text-gray-700 text-sm">Same quality of care</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 max-w-3xl mx-auto">
            <Building className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Professional Care Environment
            </h3>
            <p className="text-gray-600 mb-6">
              Whether you prefer in-person consultations at Sea Meadows Rehab or the convenience of virtual care, Dr. Salma provides the same high-quality, comprehensive women's health services in a professional and comfortable environment.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="btn-primary group cursor-pointer"
            >
              <span className="flex items-center">
                Book Your Appointment
                <MapPin className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutClinics 