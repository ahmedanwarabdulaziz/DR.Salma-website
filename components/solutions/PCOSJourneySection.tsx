'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, CheckCircle, Calendar, Quote, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const PCOSJourneySection = () => {
  const journeySteps = [
    {
      phase: "Month 1-2",
      title: "Hope Returns",
      quote: "I actually have energy to play with my kids after work",
      description: "The fog starts to lift. Your energy begins to return. The crushing fatigue that made every day feel like climbing a mountain starts to ease. You begin to remember what it feels like to feel good in your own skin.",
      color: "pink"
    },
    {
      phase: "Month 3-4",
      title: "Your Body Starts Cooperating",
      quote: "My jeans fit again, and I didn't have to starve myself",
      description: "Your body begins to remember how to work with you instead of against you. Weight starts to come off naturally. Your skin begins to clear. Your periods might start showing up when they're supposed to.",
      color: "green"
    },
    {
      phase: "Month 6+",
      title: "You Feel Like Yourself Again",
      quote: "I look in the mirror and recognize the confident woman looking back",
      description: "This is where the magic happens. You're not just managing PCOS anymore—you're thriving despite it. Your hair is growing back. Your confidence is radiating. Your body feels like home again.",
      color: "purple"
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
            Your Journey Back to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A gentle, step-by-step transformation that honors your body's natural healing process
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="space-y-12">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } flex flex-col lg:flex-row gap-12 items-center`}
            >
              {/* Content */}
              <div className="flex-1 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      step.color === 'pink' ? 'bg-pink-100' : 
                      step.color === 'green' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      <Calendar className={`w-6 h-6 ${
                        step.color === 'pink' ? 'text-pink-600' : 
                        step.color === 'green' ? 'text-green-600' : 'text-purple-600'
                      }`} />
                    </div>
                    <span className="text-lg font-semibold text-gray-600">{step.phase}</span>
                  </div>
                  
                  <h3 className={`text-3xl font-bold ${
                    step.color === 'pink' ? 'text-pink-600' : 
                    step.color === 'green' ? 'text-green-600' : 'text-purple-600'
                  }`}>
                    {step.title}
                  </h3>
                  
                  <div className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100">
                    <Quote className="w-8 h-8 text-gray-400 mb-3" />
                    <p className="text-lg text-gray-700 italic font-medium">
                      "{step.quote}"
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Visual Element */}
              <div className="flex-1 flex justify-center">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                  <Image
                    src={
                      step.color === 'pink' ? '/images/banner-4.png' : 
                      step.color === 'green' ? '/images/banner-5.png' : 
                      '/images/banner-6.png'
                    }
                    alt={step.title}
                    width={384}
                    height={384}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-gray-600 mb-6">
              Your journey back to feeling like yourself again starts with one conversation.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Begin Your Journey
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default PCOSJourneySection 