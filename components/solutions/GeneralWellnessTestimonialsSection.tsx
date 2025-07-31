'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'

const GeneralWellnessTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rania",
      role: "Wellness Patient",
      content: "For the first time, I don't dread doctor visits. Dr. Salma helped me prevent issues, feel truly myself, and be confident in every part of my health.",
      rating: 5,
      improvement: "Wellness awakening and confidence"
    },
    {
      name: "Tanya",
      role: "Life Transition Support",
      content: "I came for one problem but ended up with a whole-life plan. Now, I feel equipped for whatever changes my body brings.",
      rating: 5,
      improvement: "Complete life transition support"
    },
    {
      name: "Sarah",
      role: "Preventive Care Patient",
      content: "Dr. Salma's proactive approach caught issues before they became problems. I finally have a true partner in my health journey.",
      rating: 5,
      improvement: "Preventive care success"
    },
    {
      name: "Maria",
      role: "Wellness Enthusiast",
      content: "The comprehensive care I receive is unlike anything I've experienced. Dr. Salma truly listens and creates plans that work for my unique lifestyle.",
      rating: 5,
      improvement: "Personalized wellness partnership"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            <span>Real Women, Real Wellness</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Women Say About{' '}
            <span className="text-pink-600">Their Wellness Partnership</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from women who have found true wellness partnership with Dr. Salma's 
            comprehensive approach to women's health and preventive care.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-pink-200" />
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Testimonial Content */}
              <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-pink-600">
                    {testimonial.improvement}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Feel truly heard</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
            <div className="text-sm text-gray-600">Preventive care success</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">88%</div>
            <div className="text-sm text-gray-600">Improved confidence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-sm text-gray-600">Life stage support</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Join These Success Stories?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Your wellness partnership is unique, but you're not alone. Dr. Salma is here to guide you 
              toward the same kind of transformation these women experienced.
            </p>
            <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300">
              Start Your Wellness Partnership
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeneralWellnessTestimonialsSection 