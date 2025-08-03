'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Heart, Leaf, Sparkles } from 'lucide-react'
import gsap from 'gsap'
import { useRouter } from 'next/navigation'

const HormonalHero = () => {
  const router = useRouter()
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    if (containerRef.current) {
      // GSAP animations for floating elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        stagger: 0.5
      })
    }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50" />
        
        {/* Floating Background Elements */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-primary-pink/10 to-primary-green/10 rounded-full blur-3xl floating-element"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-primary-green/10 to-primary-pink/10 rounded-full blur-3xl floating-element"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-soft border border-rose-200/30"
            >
              <Heart className="w-5 h-5 text-primary-pink" />
              <span className="text-sm font-medium text-text-dark">
                Specialized in Women's Hormonal Health
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary-green">Hormonal Health</span>
                <br />
                <span className="text-primary-pink bg-gradient-to-r from-primary-pink to-purple-500 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <p className="text-xl md:text-2xl text-text-gray leading-relaxed max-w-2xl">
                Transform your hormonal health with Dr. Salma's unique blend of medical expertise and natural healing. 
                <span className="text-primary-pink font-semibold"> Finally feel in control</span> of your body and hormones again.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                <span className="text-text-gray font-medium">20+ Years Medical Experience</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                <span className="text-text-gray font-medium">Natural & Medical Solutions</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                <span className="text-text-gray font-medium">Personalized Treatment Plans</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-primary-pink rounded-full"></div>
                <span className="text-text-gray font-medium">Ongoing Support & Care</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button 
                onClick={() => router.push('/contact')}
                className="btn-primary group cursor-pointer"
              >
                <span className="flex items-center">
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </button>
              <button 
                onClick={() => {
                  const solutionsSection = document.getElementById('hormonal-solutions')
                  if (solutionsSection) {
                    solutionsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-secondary group cursor-pointer"
              >
                <span className="flex items-center">
                  Learn More
                  <Leaf className="w-5 h-5 ml-2 transition-transform group-hover:rotate-12" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="relative"
            >
              <div className="relative group">
                {/* Glow Effect */}
                <div className="absolute -inset-8 bg-gradient-to-br from-primary-pink/20 via-primary-green/10 to-primary-pink/15 rounded-[2.5rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Image Container */}
                <div className="relative bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30 rounded-[2rem] shadow-[0_25px_50px_-12px_rgba(168,85,247,0.15)] overflow-hidden border border-rose-200/30">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-300 via-pink-300 to-purple-300"></div>
                  
                  <div className="relative p-3">
                    <Image
                      src="/images/girl-1.png"
                      alt="Dr. Salma - Hormonal Health Specialist"
                      width={500}
                      height={600}
                      className="object-cover w-full h-auto rounded-[1.8rem] shadow-lg"
                    />
                    
                    <div className="absolute inset-3 bg-gradient-to-t from-rose-900/10 via-transparent to-transparent rounded-[1.8rem]"></div>
                  </div>
                  

                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HormonalHero 