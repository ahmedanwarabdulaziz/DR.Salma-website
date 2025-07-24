'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Leaf, Sparkles } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    // Simple scroll-based animation instead of complex GSAP
    const handleScroll = () => {
      const scrolled = window.scrollY
      const rate = scrolled * -0.5
      hero.style.transform = `translateY(${rate}px)`
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      ref={heroRef}
      id="home" 
      className="relative pt-24 pb-16 lg:pt-28 lg:pb-20 flex items-center overflow-hidden min-h-screen"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-white to-gray-50" />
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-40 right-20 w-16 h-16 bg-green-200 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-20 left-20 w-12 h-12 bg-pink-300 rounded-full opacity-20"
        />
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-40 right-10 w-24 h-24 bg-green-300 rounded-full opacity-20"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-pink-100"
            >
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="text-sm font-medium text-gray-800 font-body">
                Trusted by 1000+ Women all over the world
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight font-heading"
            >
              Where Medical Expertise
              <span className="block text-pink-600">Meets Natural Healing</span>
              <span className="block text-gray-900">for Women's Health</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl font-body"
            >
              Tired of choosing between doctors who dismiss your concerns and natural practitioners who lack medical training? Dr. Salma eliminates this impossible choice. As Ontario's premier Medical Naturopath, she combines 20+ years of gynecological expertise with comprehensive natural solutions—giving you the diagnostic confidence you trust with the gentle healing you seek.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group font-body">
                <span className="flex items-center space-x-2">
                  <span>Book Consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              <button className="bg-white border-2 border-green-600 text-green-600 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-green-600 hover:text-white font-body">
                Learn More
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center space-x-8 pt-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 font-heading">1000+</div>
                <div className="text-sm text-gray-600 font-body">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 font-heading">20+</div>
                <div className="text-sm text-gray-600 font-body">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600 font-heading">98%</div>
                <div className="text-sm text-gray-600 font-body">Success Rate</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/images/salma-2.png"
                alt="Dr. Salma - Women's Health Specialist"
                width={600}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
            >
              <Sparkles className="w-6 h-6 text-pink-600" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="absolute -bottom-4 -left-4 bg-green-100 rounded-full p-3 shadow-lg"
            >
              <Leaf className="w-6 h-6 text-green-600" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 