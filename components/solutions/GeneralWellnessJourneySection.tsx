'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle, ArrowRight, Heart } from 'lucide-react'

const GeneralWellnessJourneySection = () => {
  const journeySteps = [
    {
      phase: "Month 1–2: Discovery and Hope",
      duration: "First 2 Months",
      description: "Your first comprehensive checkup is about YOU, not just your labs. Dr. Salma uncovers hidden stressors, untapped strengths, and creates your personalized wellness blueprint.",
      outcomes: ["Comprehensive health assessment", "Personalized wellness plan", "Understanding your unique needs"],
      testimonial: "I finally felt like my concerns mattered. We built a wellness plan—together."
    },
    {
      phase: "Month 3–4: Gentle Progress",
      duration: "Months 3-4",
      description: "Small, sustainable changes (nutrition tweaks, stress strategies, natural supports) make a big difference. You start feeling more resilient and present in daily life.",
      outcomes: ["Improved energy levels", "Better sleep quality", "Enhanced resilience"],
      testimonial: "My energy improved, sleep is finally restful, and for once I'm not worried about what's next."
    },
    {
      phase: "Month 6+: True Wellness and Prevention",
      duration: "Month 6+",
      description: "With regular check-ins, you spot potential issues early, keep old symptoms away, and celebrate milestones. You feel prepared for life's transitions—menopause, motherhood, career changes—whatever comes.",
      outcomes: ["Preventive care", "Milestone celebrations", "Life transition support"],
      testimonial: "I have a partner in my health—one who cares before things go wrong."
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
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
            <span>Your Wellness Journey</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Your Journey Back to{' '}
            <span className="text-pink-600">Whole-Body Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dr. Salma's comprehensive approach guides you through a personalized wellness journey, 
            helping you achieve true vitality and preventive health at every stage of life.
          </p>
        </motion.div>

        {/* Journey Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 to-green-200 hidden lg:block"></div>
          
          <div className="space-y-12">
            {journeySteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-start gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  {index < journeySteps.length - 1 && (
                    <div className="hidden lg:block absolute top-16 left-8 w-0.5 h-12 bg-gradient-to-b from-pink-200 to-green-200"></div>
                  )}
                </div>

                {/* Content Card */}
                <div className={`flex-1 bg-white rounded-2xl shadow-lg border border-gray-100 p-8 ${
                  index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{step.phase}</h3>
                    <span className="bg-pink-100 text-pink-700 px-3 py-1 rounded-full text-sm font-medium">
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Testimonial */}
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl p-4 mb-6 border border-pink-200/30">
                    <p className="text-gray-700 italic font-medium">
                      "{step.testimonial}"
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-3">You may experience:</h4>
                    {step.outcomes.map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-pink-50 to-green-50 rounded-3xl p-8 border border-pink-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Begin Your Wellness Journey?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Dr. Salma is here to guide you every step of the way. Your personalized wellness plan 
              awaits—let's begin your transformation to true vitality and preventive health.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center space-x-2 mx-auto cursor-pointer"
            >
              <span>Begin Your Wellness Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeneralWellnessJourneySection 