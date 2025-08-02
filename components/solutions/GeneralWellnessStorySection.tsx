'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Quote, User, Calendar } from 'lucide-react'
import Image from 'next/image'

const GeneralWellnessStorySection = () => {
  const commonExperiences = [
    "Ten-minute appointments, but a lifetime of questions left unasked",
    "Normal test results, but a nagging sense that something's being missed",
    "Recommendations for more pills or just wait and see",
    "Yearly checkups that feel like checkboxes, not a real partnership"
  ]

  const everydayStruggles = [
    "Trying to keep up—at work, at home, with relationships—while your energy wanes",
    "Anxiety about getting older, hormonal changes, or chronic symptoms popping up unannounced",
    "Wondering if you should just accept fatigue, mood swings, low libido, or constant tension",
    "Wishing for answers—before small problems grow into bigger ones"
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
            You Deserve Care as Unique as You Are
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
                You're proactive, conscious, and committed to your health—yet too often healthcare feels rushed, impersonal, or focused only on what's wrong. You don't just want symptoms "managed." You want a guide to help you feel your best, prevent future issues, and celebrate your body at every age.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                You've experienced:
              </p>
            </motion.div>

            {/* Common Experiences */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {commonExperiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 bg-white rounded-2xl p-4 shadow-soft border border-gray-100"
                >
                  <Quote className="w-5 h-5 text-pink-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium italic">"{experience}"</span>
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
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                You know deep down: Real wellness is more than not being sick. It's feeling vibrant, whole, and truly cared for.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                The Everyday Struggles Women Silently Carry:
              </p>
            </motion.div>

            {/* Everyday Struggles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {everydayStruggles.map((struggle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 bg-white rounded-2xl p-4 shadow-soft border border-gray-100"
                >
                  <Heart className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{struggle}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Final Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-8 border border-blue-200/30"
            >
              <p className="text-lg text-gray-700 leading-relaxed font-semibold">
                You are worth investment, empathy, prevention, and answers.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative"
            >
                             <div className="relative w-full h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                 <Image
                   src="/images/pic92.png"
                   alt="Dr. Salma - Understanding Women's Wellness"
                   fill
                   className="object-cover"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
               </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 text-center border border-pink-200/30">
                <div className="text-3xl font-bold text-pink-600 mb-2">95%</div>
                <div className="text-sm text-gray-600">Feel truly heard</div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 text-center border border-green-200/30">
                <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">Preventive care success</div>
              </div>
            </motion.div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl p-6 border border-purple-200/30"
            >
              <div className="flex items-center space-x-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Quote key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">
                "For the first time, I don't dread doctor visits. Dr. Salma helped me prevent issues, feel truly myself, and be confident in every part of my health."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-pink-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Rania</div>
                  <div className="text-sm text-gray-600">Wellness Patient</div>
                </div>
              </div>
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
                Dr. Salma Puts the "Care" Back in Women's Healthcare
              </h3>
              <h4 className="text-xl md:text-2xl font-semibold text-gray-800">
                A Practitioner Who Honors Your Whole Life
              </h4>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                After 20+ years as a gynecologist—and now as a medical naturopath—Dr. Salma believes in proactive, root-cause care tailored to you. She's seen the relief and joy on women's faces when small issues are caught early, when bodies heal gently, and when care is about celebration as much as intervention.
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                Here's how she is different: Listens—truly listens—to your goals, fears, lifestyle, and symptoms.
              </p>
            </div>
            
                         <div className="relative h-full min-h-[300px] md:min-h-[400px] lg:min-h-[500px] mt-6 lg:mt-0">
               <Image
                 src="/images/pic16.png"
                 alt="Dr. Salma understanding women's wellness journey"
                 width={600}
                 height={600}
                 className="w-full h-full object-cover rounded-2xl shadow-lg"
               />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-green-200">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <User className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-800 text-sm md:text-base">Your Wellness Partner</p>
                    <p className="text-xs md:text-sm text-gray-600">Compassionate care that understands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
                     {/* Additional Image - Full Width */}
           <div className="relative mt-8 md:mt-12">
             <Image
               src="/images/pic93.png"
               alt="Women supporting each other"
               width={1200}
               height={400}
               className="w-full h-48 md:h-64 object-cover rounded-2xl shadow-lg"
             />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl"></div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 text-white">
              <p className="text-xs md:text-sm font-medium">You're not alone in your wellness journey</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default GeneralWellnessStorySection 