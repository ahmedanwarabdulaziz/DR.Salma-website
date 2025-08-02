'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const AnxietyStorySection = () => {
  const commonPhrases = [
    "Maybe you're just too sensitive",
    "You need to let things go",
    "Have you tried yoga or a walk outside?",
    "It's just part of being a woman"
  ]

  const invisibleStruggles = [
    "The panic before a big meeting—right before your cycle starts",
    "Mood swings that feel out of your control",
    "Trouble sleeping, even when you're exhausted",
    "Irritability that hurts your relationships, followed by guilt and shame",
    "The tension, headaches, and 'wired but tired' feeling that just won't quit"
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
            Your Story Is Not Just "Stress"—It's Real, and You're Not Alone
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
                Sometimes, you wake with your heart racing for no reason. The smallest things trigger tears, irritation, or panic. You track your moods and realize: it's worse before your period, or at certain times in your cycle. Doctors tell you to "relax" or "try meditation," but you know this isn't just in your head.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                What you're told:
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

            {/* But deep down */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                But deep down, you know your mind and body are intertwined. You know there's more to your story than just "stress."
              </p>
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
                The Unseen Weight of Hormonal Anxiety
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                No one else observes:
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
                You're not overreacting. You're not "crazy." And you're not alone.
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
                Dr. Salma Hears What Others Miss
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Finally, Someone Who Connects the Dots
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                After 20+ years as a gynecologist, Dr. Salma has met hundreds of women just like you—dismissed, misunderstood, and told to "try harder" at self-care. She recognizes the tell-tale signs when anxiety is really your hormones crying out for balance—and she created her practice to provide answers and gentle, real solutions.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                How is her care different? She validates your feelings and lived experience as REAL, not "just moodiness."
              </p>
            </div>
            
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-6 lg:mt-0">
              <Image
                src="/images/pic16.png"
                alt="Dr. Salma understanding women's anxiety journey"
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
              src="/images/pic84.png"
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

export default AnxietyStorySection 