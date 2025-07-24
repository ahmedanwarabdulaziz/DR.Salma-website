'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Sparkles, CheckCircle, Calendar, Quote, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const HashimotosJourneySection = () => {
  const journeySteps = [
    {
      phase: "Month 1-2",
      title: "The Fog Begins to Lift",
      quote: "I actually made it through a full day without needing a nap",
      description: "Your energy begins to stabilize. The crushing afternoon crashes start to ease. You begin to think more clearly and remember things again. Small improvements that give you hope that bigger changes are coming.",
      color: "blue"
    },
    {
      phase: "Month 3-4",
      title: "Your Body Starts Responding",
      quote: "My hair stopped falling out, and I'm finally starting to lose weight",
      description: "Your body begins to remember how to work with you instead of against you. The inflammation starts to calm down. Your hair gets stronger. The scale finally starts moving in the right direction.",
      color: "green"
    },
    {
      phase: "Month 6+",
      title: "You Feel Like Yourself Again",
      quote: "I have energy for my life again, and I actually feel optimistic about my health",
      description: "This is where the real transformation happens. You're not just managing Hashimoto's anymore—you're thriving with it. Your energy is consistent. Your weight is stable. Your mind is clear. Your body feels like home again.",
      color: "purple"
    }
  ]

  return (
         <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
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
            Your Journey Back to Vitality
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
                     step.color === 'blue' ? 'bg-primary-pink/20' : 
                     step.color === 'green' ? 'bg-primary-green/20' : 'bg-primary-pink/20'
                   }`}>
                     <Calendar className={`w-6 h-6 ${
                       step.color === 'blue' ? 'text-primary-pink' : 
                       step.color === 'green' ? 'text-primary-green' : 'text-primary-pink'
                     }`} />
                    </div>
                    <span className="text-lg font-semibold text-gray-600">{step.phase}</span>
                  </div>
                  
                                     <h3 className={`text-3xl font-bold ${
                     step.color === 'blue' ? 'text-primary-pink' : 
                     step.color === 'green' ? 'text-primary-green' : 'text-primary-pink'
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
                      step.color === 'blue' ? '/images/banner-4.png' : 
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
              Your journey back to vitality starts with one conversation.
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

export default HashimotosJourneySection 