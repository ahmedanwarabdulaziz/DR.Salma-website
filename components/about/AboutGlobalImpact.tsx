'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Globe, Users, Heart, Star } from 'lucide-react'

const AboutGlobalImpact = () => {
  const countries = [
    { flag: "🇸🇦", name: "Saudi Arabia" },
    { flag: "🇦🇪", name: "UAE" },
    { flag: "🇪🇬", name: "Egypt" },
    { flag: "🇶🇦", name: "Qatar" },
    { flag: "🇨🇦", name: "Canada" },
    { flag: "🇺🇸", name: "USA" },
    { flag: "🇬🇧", name: "UK" }
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
            Global Impact & Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming Women's Lives Across Continents
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <div className="text-center mb-8">
                <Users className="w-16 h-16 text-primary-green mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-800 mb-2">1,500+ Patients</h3>
                <p className="text-gray-600">Helped across 7 countries worldwide</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-green mb-2">7</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-pink mb-2">20+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30">
              <h3 className="text-2xl font-bold text-primary-pink mb-6">
                International Experience
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dr. Salma's expertise in medical naturopathy has touched lives across seven countries, helping women overcome complex health challenges and reclaim their vitality. From Toronto to Dubai, from London to Cairo, women trust Dr. Salma's unique combination of medical expertise and natural healing solutions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Her international experience provides her with a deep understanding of how different cultural backgrounds, environmental factors, and lifestyle patterns affect women's health, making her approach truly comprehensive and culturally sensitive.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Countries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-primary-green mb-6 text-center">
                Countries Served
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((country, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200/30"
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <span className="font-medium text-gray-700">{country.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-3xl p-8 border border-green-300/30 text-center">
              <Globe className="w-12 h-12 text-primary-green mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Culturally Sensitive Care
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Dr. Salma's international experience allows her to provide culturally sensitive care that respects and understands the unique health challenges women face in different parts of the world.
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
            <Star className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Trusted Worldwide
            </h3>
            <p className="text-gray-600 mb-6">
              Women from seven countries have experienced Dr. Salma's unique approach to women's health. Her international perspective and cultural sensitivity make her the trusted choice for women seeking comprehensive, natural health solutions.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Experience Her Global Expertise
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutGlobalImpact 