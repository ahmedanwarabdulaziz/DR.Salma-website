'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const TestimonialsSection = () => {
  const router = useRouter()
  
  const testimonials = [
    {
      id: 1,
      patient: "Sarah M.",
      location: "Toronto",
      challenge: "I struggled with PCOS for 8 years - irregular periods, weight gain, and hair loss",
      solution: "Dr. Salma's comprehensive PCOS management protocol",
      result: "Lost 25 pounds, regular cycles for 6 months, and my hair is growing back!",
      duration: "4-month transformation"
    },
    {
      id: 2,
      patient: "Lisa & Mark",
      location: "Mississauga",
      challenge: "Two years of unexplained infertility and failed IVF attempts",
      solution: "Root cause investigation + natural fertility optimization",
      result: "Pregnant naturally after 6 months with Dr. Salma our miracle baby!",
      duration: "6-month journey to conception"
    },
    {
      id: 3,
      patient: "Jennifer K.",
      location: "Ottawa",
      challenge: "Severe hot flashes, insomnia, and mood swings ruining my life",
      solution: "Natural menopause support without hormone therapy",
      result: "Sleeping through the night and feeling like myself again at 52",
      duration: "5-month transformation"
    },
    {
      id: 4,
      patient: "Maria S.",
      location: "Hamilton",
      challenge: "Exhausted despite thyroid medication, gaining weight constantly",
      solution: "Integrative Hashimoto's management approach",
      result: "Energy restored, lost 15 pounds, reduced medication by 50%",
      duration: "5-month journey to conception"
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
          {/* Decorative Lines */}
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-600/40"></div>
            <div className="w-2 h-2 bg-pink-600/60 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-600/40"></div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Real Women, Real Results
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how Dr. Salma's unique combination of medical expertise and natural healing has transformed lives across Ontario and beyond
          </p>
          
          {/* Decorative Lines */}
          <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-600/40"></div>
            <div className="w-2 h-2 bg-pink-600/60 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-600/40"></div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-3xl shadow-lg border border-rose-200/30 overflow-hidden hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Header */}
                <div className="p-6 border-b border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {testimonial.patient}
                    </h3>
                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                      {testimonial.location}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full font-medium">
                      {testimonial.duration}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Challenge */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <Heart className="w-5 h-5 text-pink-600 mr-2" />
                      The Challenge
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.challenge}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <ArrowRight className="w-5 h-5 text-green-600 mr-2" />
                      Dr. Salma's Approach
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {testimonial.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      The Transformation
                    </h4>
                    <p className="text-gray-600 leading-relaxed font-medium text-green-600">
                      {testimonial.result}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button 
            onClick={() => router.push('/contact')}
            className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl cursor-pointer"
          >
            Start Your Own Success Story
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection 