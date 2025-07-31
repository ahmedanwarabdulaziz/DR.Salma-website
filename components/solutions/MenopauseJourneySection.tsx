'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight, CheckCircle } from 'lucide-react'
import Image from 'next/image'

const MenopauseJourneySection = () => {
  const journeySteps = [
    {
      month: "Month 1–2",
      title: "Gentle Relief Begins",
      description: "\"The sweats are less, my sleep is deeper, and I feel more like myself—even just a little.\" After your root-cause assessment, simple changes start calming your body and mind. Nutrition, herbal support, and gentle movement bring early wins—hope replaces dread.",
      image: "/images/pic37.png"
    },
    {
      month: "Month 3–4",
      title: "Balance Returns",
      description: "\"My moods aren't on a rollercoaster, and I have energy to enjoy my days again.\" With consistent support, your symptoms ease further: hot flashes decrease, you sleep better, and confidence grows as you learn how to steady your hormones.",
      image: "/images/pic38.png"
    },
    {
      month: "Month 6+",
      title: "Embracing Your New Beginning",
      description: "\"I've stopped worrying about my future health—I finally have tools that work.\" Life feels open again. You know how to support your body. Your mind is clearer, intimacy is easier, you trust yourself, and you step into this chapter with pride.",
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
            Your Path from Confusion to Empowerment
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your Gentle Menopause Guide
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
                  alt={`${step.title} - Menopause Journey`}
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

export default MenopauseJourneySection 