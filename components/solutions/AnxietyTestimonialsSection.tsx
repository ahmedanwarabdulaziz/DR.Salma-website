'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Star, Quote } from 'lucide-react'
import Image from 'next/image'

const AnxietyTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Hope",
      location: "Toronto, ON",
      age: 28,
      story: "I thought my anxiety was just who I was. Dr. Salma found the root cause—my hormones were out of sync. With simple changes to my routine and support I could actually stick to, I'm finally living without constant overwhelm.",
      result: "Hope's Quiet Comeback",
      image: "/images/pic21.png"
    },
    {
      name: "Kira",
      location: "Mississauga, ON", 
      age: 31,
      story: "Work stress almost broke me, but my worst days always lined up with my cycle. In just a few months, I sleep better, panic less, and feel in control—even when things get tough. Dr. Salma gave me my life back.",
      result: "Kira's New Ease",
      image: "/images/pic22.png"
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
            Real Women, Real Calm
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stories of Transformation from Anxiety to Peace
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

export default AnxietyTestimonialsSection 