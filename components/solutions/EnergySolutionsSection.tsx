'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const EnergySolutionsSection = () => {
  const solutions = [
    {
      id: 1,
      title: "Chronic Fatigue & Energy Optimization",
      image: "/images/pic48.png",
      description: "Break the cycle of exhaustion, restore your vitality",
      features: [
        "Root-cause analysis and comprehensive diagnostics",
        "Gentle, personalized action plans"
      ],
      cta: "Chronic Fatigue Solutions"
    },
    {
      id: 2,
      title: "Anxiety Linked to Hormonal Imbalances",
      image: "/images/pic49.png",
      description: "Gentle, natural approaches to calming your mind and balancing your body",
      features: [
        "Comprehensive anxiety management protocols",
        "Hormonal balance support"
      ],
      cta: "Anxiety Solutions"
    },
    {
      id: 3,
      title: "Pain Management (TCM/Acupuncture)",
      image: "/images/pic50.png",
      description: "Natural relief from pain using Traditional Chinese Medicine and acupuncture",
      features: [
        "Expert TCM and acupuncture care",
        "Comprehensive pain relief support"
      ],
      cta: "Pain Management"
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
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-green mb-6">
            Solutions in This Group
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto leading-relaxed">
            Dr. Salma provides comprehensive energy and wellness solutions that address the root causes of fatigue, anxiety, and pain.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-500">
                
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 flex flex-col h-full min-h-[300px]">
                  {/* Title */}
                  <h3 className="font-heading text-xl font-bold text-primary-green mb-4">
                    {solution.title}
                  </h3>

                  {/* Description */}
                  <p className="text-text-gray leading-relaxed mb-6">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-primary-green mt-1 flex-shrink-0" />
                        <span className="text-text-gray text-sm leading-relaxed">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA - Pushed to bottom */}
                  <div className="mt-auto">
                    <button 
                      onClick={() => window.location.href = '/contact'}
                      className="w-full bg-primary-green text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-green/90 transition-colors duration-300 flex items-center justify-center space-x-2 group/btn cursor-pointer"
                    >
                      <span>{solution.cta}</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button 
            onClick={() => window.location.href = '/contact'}
            className="btn-primary group cursor-pointer"
          >
            <span className="flex items-center">
              Book Your Appointment Now
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default EnergySolutionsSection 