'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'

const UnexplainedInfertilityTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Emily",
      location: "Toronto, ON",
      age: 32,
      story: "Three years of 'unexplained infertility.' After two failed IVFs, I was told we'd never know why. Dr. Salma spent ninety minutes listening, reviewing, and making connections others missed. Within five months, we knew my thyroid needed support. Two months later, I was pregnant—naturally!",
      result: "Within 5 months, we knew my thyroid needed support. Two months later, I was pregnant—naturally!"
    },
    {
      name: "Jenna",
      location: "Mississauga, ON",
      age: 29,
      story: "All our tests were 'fine' but I knew something was off. Dr. Salma found inflammation markers and adjusted my plan with gentle, holistic support. Even before conceiving, I felt seen, understood, and finally hopeful.",
      result: "Even before conceiving, I felt seen, understood, and finally hopeful."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Real Women, Real Breakthroughs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of Hope and Transformation
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100"
            >
              <div className="flex items-center space-x-4 mb-6">
                <Image
                  src={index === 0 ? "/images/pic60.png" : "/images/pic61.png"}
                  alt={`${testimonial.name}'s transformation story`}
                  width={400}
                  height={250}
                  className="rounded-2xl shadow-lg"
                />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-pink-600" />
                  <span className="text-sm text-gray-600">{testimonial.name}, {testimonial.age}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-600">{testimonial.location}</span>
                </div>
                
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.story}"
                </p>
                
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-200/30">
                  <p className="text-green-800 font-semibold">
                    {testimonial.result}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UnexplainedInfertilityTestimonialsSection 