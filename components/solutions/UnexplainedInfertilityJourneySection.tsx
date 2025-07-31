'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const UnexplainedInfertilityJourneySection = () => {
  const journeySteps = [
    {
      month: "Month 1–2",
      title: "Finding What's Been Overlooked",
      description: "For the first time, I felt seen, not just processed. You receive a comprehensive, kind review of your whole fertility story—labs, cycles, symptoms, even your lived experience and dreams. Together, subtle clues or previously ignored patterns come to light.",
      image: "/images/pic57.png"
    },
    {
      month: "Month 3–4",
      title: "Gentle, Personalized Action",
      description: "We finally had options—and a plan that made sense for us. Dr. Salma explains everything clearly: what's been missed, what might help, and what gentle, natural supports you can try alongside (or instead of) medical options. You gain clarity, confidence, and a renewed sense of partnership with your body.",
      image: "/images/pic58.png"
    },
    {
      month: "Month 6+",
      title: "Hope Re-Ignited",
      description: "Even before conceiving, I felt we had a partner—and real hope again. Whether your cycle regulates, your partner's labs improve, or your stress lifts, you see progress. For some, natural conception happens; for all, the pain of \"unexplained\" is replaced by empowerment and hope.",
      image: "/images/pic59.png"
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
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Your Journey from Uncertainty to Possibility
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Gentle Infertility Guide
          </p>
        </motion.div>

        {/* Journey Steps */}
        <div className="space-y-12 lg:space-y-16">
          {journeySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-soft border border-gray-200">
                    <span className="text-sm font-medium text-gray-600">{step.month}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Image
                  src={step.image}
                  alt={`${step.title} - Unexplained Infertility Journey`}
                  width={400}
                  height={300}
                  className="rounded-3xl shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UnexplainedInfertilityJourneySection 