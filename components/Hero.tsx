'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Hero = () => {
  const router = useRouter()
  
  return (
    <section className="relative bg-gradient-to-br from-white via-pink-50 to-green-50 pt-6">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between pt-6">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 max-w-2xl space-y-4"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-pink-200"
            >
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-600" />
                <span className="text-sm font-medium text-gray-700">Ontario's Premier Medical Naturopath</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-pink-600">Where Medical</span>
                <span className="block text-pink-600">Expertise Meets</span>
                <span className="block text-green-600">Natural Healing</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Experience the perfect blend of modern medicine and natural therapies for optimal women's health and wellness.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => router.push('/contact')}
                className="group bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => router.push('/about')}
                className="group bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-600 hover:text-white cursor-pointer"
              >
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-4"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">1000+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">20+</div>
                <div className="text-sm text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">98%</div>
                <div className="text-sm text-gray-600 font-medium">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 flex justify-center lg:justify-end mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Image Container */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-green-200 rounded-3xl blur-sm"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="relative rounded-2xl overflow-hidden">
                    <Image
                      src="/images/salma-2.png"
                      alt="Dr. Salma - Women's Health Specialist"
                      width={500}
                      height={600}
                      className="w-full h-auto object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 