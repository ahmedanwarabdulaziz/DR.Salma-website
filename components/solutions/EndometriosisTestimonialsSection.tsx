'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'

const EndometriosisTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Leila",
      location: "Toronto, ON",
      age: 31,
      story: "Endometriosis was ruling my world—every month, a week lost to pain and exhaustion. Dr. Salma was the first to treat me as a whole person. With her plan, my pain is finally manageable, my energy is back, and I can live fully again.",
      result: "My pain is finally manageable, my energy is back, and I can live fully again."
    },
    {
      name: "Angela",
      location: "Mississauga, ON",
      age: 28,
      story: "Surgery, painkillers, hormone pills... nothing gave me lasting relief. Dr. Salma listened, found food sensitivities and stress factors that others missed, and helped me rebuild my life—one gentle step at a time.",
      result: "She helped me rebuild my life—one gentle step at a time."
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
            Real Women, Real Relief
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
                  src={index === 0 ? "/images/pic67.png" : "/images/pic68.png"}
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

export default EndometriosisTestimonialsSection 