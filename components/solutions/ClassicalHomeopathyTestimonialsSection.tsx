'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const ClassicalHomeopathyTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Olivia",
      location: "Toronto, ON",
      age: 38,
      story: "Every doctor treated one symptom at a time. Dr. Salma listened to all of me—my cycles, my mood, my childhood patterns. One homeopathic remedy changed everything. My energy, sleep, and happiness returned. For the first time, I am whole.",
      result: "Olivia's Whole-Person Healing",
      image: "/images/pic88.png"
    },
    {
      name: "Fatima",
      location: "Mississauga, ON", 
      age: 45,
      story: "My story was complicated. No one wanted to listen—except Dr. Salma. She understood every part of my journey and gave me a gentle remedy that made all the difference. I feel balanced and peaceful, inside and out.",
      result: "Fatima's Gentle Recovery",
      image: "/images/pic89.png"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Stories of Transformation from Symptoms to Wholeness
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-200/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-600 rounded-full p-1">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {testimonial.result}
                  </h3>
                  <p className="text-gray-600">
                    {testimonial.name}, {testimonial.age} • {testimonial.location}
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-pink-600 opacity-50" />
                <p className="text-gray-700 leading-relaxed text-lg">
                  "{testimonial.story}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClassicalHomeopathyTestimonialsSection 