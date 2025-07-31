'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const AnxietyJourneySection = () => {
  const journeySteps = [
    {
      month: "Month 1–2",
      title: "Lingering Clouds Begin to Lift",
      description: "\"I finally understood why my anxiety flared before my period, and gentle changes made a difference almost right away.\" Hormone-supportive nutrition, practical self-care strategies, and subtle natural tools make anxiety more predictable—and for many, less acute.",
      image: "/images/pic37.png"
    },
    {
      month: "Month 3–4",
      title: "Calm Becomes Normal Again",
      description: "\"I'm not afraid of my moods anymore; I know how to support myself.\" Emotional outbursts fade, panic decreases, and you feel balanced and steady. The \"cycle\" of dread gives way to real confidence, calm, and control.",
      image: "/images/pic38.png"
    },
    {
      month: "Month 6+",
      title: "Joy and Comfort in Your Own Mind",
      description: "\"I recognize myself again—joyful, motivated, and able to handle what life brings.\" You wake up with clarity. Relationships feel easier. You trust your feelings instead of fearing them.",
      image: "/images/pic39.png"
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
            Your Journey from Overwhelm to Ease
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Gentle Anxiety Guide
          </p>
        </motion.div>
        
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
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-white rounded-full px-6 py-3 shadow-soft border border-gray-200">
                    <span className="text-sm font-medium text-gray-600">{step.month}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <Image
                  src={step.image}
                  alt={`${step.title} - Anxiety Journey`}
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

export default AnxietyJourneySection 