'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, Star } from 'lucide-react'
import Image from 'next/image'

const PCOSTestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah",
      location: "Toronto",
      story: "I was 32 and felt like I was living in someone else's body. Eight years of PCOS had stolen my confidence, my energy, and my hope. Dr. Salma was the first person who looked me in the eyes and said, 'I believe you, and we're going to figure this out together.'",
      result: "She didn't just treat my PCOS—she helped me fall in love with my body again. Six months later, I've lost 25 pounds, my skin is glowing, my hair is growing back, and most importantly, I feel like ME again.",
      rating: 5
    },
    {
      name: "Jennifer",
      location: "Mississauga",
      story: "For years, doctors told me birth control was my only option. I felt trapped in my own body. Dr. Salma showed me there was another way—a gentle, natural way that honored what I wanted for my life.",
      result: "Now I wake up feeling grateful for my body instead of frustrated with it. My cycles are regular, my energy is back, and I actually feel beautiful again.",
      rating: 5
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-green-50">
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
            Real Women, Real Transformations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are the stories of women who found their way back to themselves
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {testimonial.name}'s Journey Back to Herself
                  </h3>
                  <p className="text-gray-600">{testimonial.location}</p>
                </div>
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

              {/* Story */}
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200/30">
                  <Quote className="w-8 h-8 text-pink-600 mb-3" />
                  <p className="text-gray-700 leading-relaxed italic">
                    "{testimonial.story}"
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/30">
                  <Heart className="w-8 h-8 text-green-600 mb-3" />
                  <p className="text-gray-700 leading-relaxed font-medium">
                    "{testimonial.result}"
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Image Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/pic22.png"
                alt="Before transformation"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">Before: Struggling with PCOS</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/pic23.png"
                alt="During transformation"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">During: Gentle healing journey</p>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/pic24.png"
                alt="After transformation"
                width={400}
                height={300}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm font-medium">After: Confident and thriving</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Your Story Could Be Next
            </h3>
            <p className="text-gray-600 mb-6">
              Every woman's PCOS journey is different, but Dr. Salma's gentle approach has helped hundreds of women reclaim their lives. She'll meet you exactly where you are and create a plan that feels manageable and hopeful.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Start Your Transformation Story
                <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PCOSTestimonialsSection 