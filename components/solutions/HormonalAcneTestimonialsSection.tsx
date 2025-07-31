'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react'
import Image from 'next/image'

const HormonalAcneTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Toronto, ON",
      age: 28,
      story: "I was 28 and felt like I was living in someone else's skin. Three years of hormonal acne had stolen my confidence, my joy, and my hope. Dr. Salma was the first person who looked me in the eyes and said, 'I believe you, and we're going to figure this out together.'",
      result: "Within 4 months, my skin was clear for the first time in years. But more importantly, I felt like myself again."
    },
    {
      name: "Jennifer L.",
      location: "Mississauga, ON", 
      age: 32,
      story: "I tried every product, every diet, every treatment. Nothing worked. I was ready to give up when I found Dr. Salma. She didn't just treat my acne—she helped me understand my body.",
      result: "Six months later, I have clear skin and a newfound confidence. I finally feel beautiful in my own skin."
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
            Real Women, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of Transformation and Hope
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
                  src={index === 0 ? "/images/pic21.png" : "/images/pic22.png"}
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

export default HormonalAcneTestimonialsSection 