'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'

const ChronicFatigueTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ava",
      location: "Toronto, ON",
      age: 38,
      story: "I thought exhaustion was my new normal. Dr. Salma found the roots of my fatigue—low iron, subtle thyroid issues, and chronic stress. Her kind, clear plan gave me hope. Six months in, I cook, laugh, and even hike weekends with my family... with real energy.",
      result: "Six months in, I cook, laugh, and even hike weekends with my family... with real energy."
    },
    {
      name: "Neha",
      location: "Mississauga, ON",
      age: 42,
      story: "No more dragging through workdays in a haze. Dr. Salma's approach went beyond 'eat better and sleep more.' She helped my body heal, and my mind and energy followed. I feel like myself—maybe even better—again.",
      result: "I feel like myself—maybe even better—again."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Real Women, Real Renewals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of Hope and Transformation
          </p>
        </motion.div>
        
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
                  src={index === 0 ? "/images/pic81.png" : "/images/pic82.png"}
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

export default ChronicFatigueTestimonialsSection 