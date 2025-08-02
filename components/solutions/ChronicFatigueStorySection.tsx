'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const ChronicFatigueStorySection = () => {
  const commonPhrases = [
    "You just need to sleep earlier.",
    "Are you stressed?",
    "Exercise more, it'll give you energy.",
    "It's probably just your age."
  ]

  const invisibleStruggles = [
    "The deep fatigue, even on weekends or holidays",
    "The guilt for canceling plans or not being your 'old self'",
    "The memory lapses, foggy thinking, and low mood",
    "The cycle of 'get up and try again' that leaves you feeling broken"
  ]

  return (
    <section className="py-16 lg:py-20 bg-white">
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
            You're Not Alone in This Exhaustion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This Is Your Story, Isn't It?
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Story */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-8 border border-pink-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You drag yourself out of bed after eight hours of sleep, still bone-tired. Coffee is your lifeline, but it barely makes a dent. By mid-afternoon, brain fog sets in and your to-do list feels impossible. Friends and family mean well, but don't get it:
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                But you know it's not just stress. You know your body is begging for help—and you're tired of just pushing through.
              </p>
            </motion.div>

            {/* Common Phrases */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {commonPhrases.map((phrase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white rounded-2xl p-4 shadow-soft border border-gray-100"
                >
                  <Quote className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium italic">"{phrase}"</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Invisible Struggles */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* The Invisible Struggle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-pink-600 mb-6">
                The Invisible Struggle No One Sees
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Others don't see:
              </p>
            </motion.div>

            {/* Struggle List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {invisibleStruggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4 bg-white rounded-2xl p-6 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-3 h-3 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{struggle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* You're not broken */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 border border-pink-300/30 text-center"
            >
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                You're not lazy. You're not making excuses. Your exhaustion is real.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dr. Salma Sees You Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-12 border border-green-200/30"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-green-600">
                Dr. Salma Knows—And Looks Deeper
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Finally, Someone Who Gets It
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                After two decades of practice, Dr. Salma has heard hundreds of women share the same story: "Every test is 'normal' but something is deeply off." She's made it her mission to listen for what others miss, honor your lived experience, and restore your spark.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Her care is different because she listens fully, never rushing or doubting your symptoms.
              </p>
            </div>
            
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-6 lg:mt-0">
              <Image
                src="/images/pic16.png"
                alt="Dr. Salma understanding women's chronic fatigue journey"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Your Gentle Healing Partner</p>
                    <p className="text-xs md:text-sm text-gray-600">Compassionate care that understands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Image - Full Width */}
          <div className="relative mt-8 md:mt-12">
            <Image
              src="/images/pic77.png"
              alt="Women supporting each other"
              width={1200}
              height={400}
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
              <p className="text-xs md:text-sm font-medium">You're not alone in this journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChronicFatigueStorySection 