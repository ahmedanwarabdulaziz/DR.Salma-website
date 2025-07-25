'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const HashimotosStorySection = () => {
  const commonPhrases = [
    "Your thyroid levels look normal",
    "Maybe you just need to sleep better",
    "Have you tried exercising more?",
    "It's probably just stress",
    "This is what happens as we get older"
  ]

  const invisibleStruggles = [
    "The bone-deep fatigue that no amount of rest can fix",
    "The weight that keeps creeping up despite eating practically nothing",
    "The hair falling out in clumps in the shower",
    "The cold that seems to come from your very core",
    "The brain fog that makes you feel like you're living in a haze",
    "The frustration when your doctor says 'everything looks fine'"
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
            You're Not Alone in This Invisible Battle
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This is Your Story, Isn't It?
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
               className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 border border-green-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Every morning feels like you're trying to start a car with a dead battery. You wake up more tired than when you went to bed. The simplest tasks feel overwhelming. Your brain feels wrapped in cotton, and you can barely remember what you walked into a room to get.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                You've heard it all before:
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
                  <Quote className="w-5 h-5 text-primary-green flex-shrink-0" />
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
                But you know something deeper is wrong. Your body feels like it's betraying you at every turn.
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
            {/* The Hashimoto's Reality */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
                             <h3 className="text-3xl font-bold text-primary-green mb-6">
                 The Hashimoto's Reality No One Talks About
               </h3>
              <p className="text-lg text-gray-600 mb-8">
                The worst part? People can't see your struggle. They don't understand:
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
                  <div className="w-3 h-3 bg-primary-green rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{struggle}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* You're not imagining this */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 border border-blue-300/30 text-center"
            >
                             <Heart className="w-12 h-12 text-primary-green mx-auto mb-4" />
               <p className="text-xl text-gray-800 font-semibold leading-relaxed">
                 You're not imagining this. You're not being dramatic. Your struggle is real.
               </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Dr. Salma Sees the Whole Picture Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
                     className="mt-20 bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-6 md:p-12 border border-green-200/30"
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-4 md:space-y-6">
                             <h3 className="text-2xl md:text-3xl font-bold text-primary-green">
                 Dr. Salma Sees the Whole Picture
               </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                Finally, Someone Who Understands Autoimmune Complexity
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                After 20+ years as a gynecologist, Dr. Salma witnessed countless women with Hashimoto's being dismissed or undertreated. She saw the pain in their eyes when they were told their symptoms were "just part of having thyroid disease." She felt their frustration when they couldn't get answers beyond "take your medication and come back in six months."
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                That's why she transformed her practice. She left conventional medicine to become a naturopath—not because she stopped believing in thyroid medication, but because she knew women with Hashimoto's deserved comprehensive care that addressed the root causes, not just TSH numbers.
              </p>
            </div>
            
            <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-6 lg:mt-0">
              <Image
                src="/images/pic26.png"
                alt="Dr. Salma understanding Hashimoto's complexity"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
                             <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-green-200">
                 <div className="flex items-center space-x-2 md:space-x-3">
                   <User className="w-6 h-6 md:w-8 md:h-8 text-primary-green" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Your Thyroid Whisperer</p>
                    <p className="text-xs md:text-sm text-gray-600">Comprehensive autoimmune care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Image - Full Width */}
          <div className="relative mt-8 md:mt-12">
            <Image
              src="/images/pic27.png"
              alt="Women supporting each other in Hashimoto's journey"
              width={1200}
              height={400}
              className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
              <p className="text-xs md:text-sm font-medium">You're not alone in this autoimmune journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HashimotosStorySection 