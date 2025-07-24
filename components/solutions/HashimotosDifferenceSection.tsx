'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Brain, Users, Clock } from 'lucide-react'
import Image from 'next/image'

const HashimotosDifferenceSection = () => {
  const differences = [
    {
      icon: Brain,
      title: "She Speaks Both Medical and Natural Languages",
      description: "Dr. Salma is the only practitioner in Ontario who can look at your complete thyroid panel with the eyes of a medical doctor AND offer you the comprehensive healing protocols of a master naturopath.",
      color: "blue"
    },
    {
      icon: Heart,
      title: "Personalized Care",
      description: "No generic thyroid protocols. No one-size-fits-all approaches. Dr. Salma creates a healing plan as unique as your autoimmune pattern.",
      color: "green"
    },
    {
      icon: Users,
      title: "Emotional Support",
      description: "She understands the emotional weight of living with Hashimoto's and provides both physical and emotional support throughout your journey.",
      color: "purple"
    },
    {
      icon: Clock,
      title: "Time and Attention",
      description: "You get the time and attention you've been craving. No rushed appointments or feeling like just another patient.",
      color: "indigo"
    }
  ]

  const personalizedPlan = [
    "Gentle inflammation reduction that doesn't suppress your immune system",
    "Nutrient support for your thyroid's actual needs",
    "Gut healing protocols that address the autoimmune root",
    "Stress management techniques that calm your nervous system",
    "Ongoing partnership because healing takes time and support"
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
            What Makes Dr. Salma Different
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            She bridges two worlds that have left you feeling frustrated and unheard
          </p>
        </motion.div>

        {/* Differences Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {differences.map((difference, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
                             <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                 difference.color === 'blue' ? 'bg-primary-pink/20' : 
                 difference.color === 'green' ? 'bg-primary-green/20' : 
                 difference.color === 'purple' ? 'bg-primary-pink/20' : 'bg-primary-green/20'
               }`}>
                 <difference.icon className={`w-8 h-8 ${
                   difference.color === 'blue' ? 'text-primary-pink' : 
                   difference.color === 'green' ? 'text-primary-green' : 
                   difference.color === 'purple' ? 'text-primary-pink' : 'text-primary-green'
                 }`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {difference.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {difference.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* With Dr. Salma Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
                     className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200/30 mb-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-8">
            <div>
                             <h3 className="text-3xl font-bold text-primary-green mb-6">
                 With Dr. Salma, you get:
               </h3>
               <div className="grid md:grid-cols-2 gap-6">
                 <div className="text-center">
                   <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Brain className="w-6 h-6 text-primary-green" />
                   </div>
                   <p className="font-semibold text-gray-800">The lab interpretation expertise you need</p>
                 </div>
                 <div className="text-center">
                   <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Heart className="w-6 h-6 text-primary-green" />
                   </div>
                   <p className="font-semibold text-gray-800">The natural healing solutions you want</p>
                 </div>
                 <div className="text-center">
                   <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Users className="w-6 h-6 text-primary-green" />
                   </div>
                   <p className="font-semibold text-gray-800">The autoimmune understanding you deserve</p>
                 </div>
                 <div className="text-center">
                   <div className="w-12 h-12 bg-primary-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                     <Clock className="w-6 h-6 text-primary-green" />
                   </div>
                   <p className="font-semibold text-gray-800">The comprehensive care you've been searching for</p>
                 </div>
              </div>
            </div>
            <div className="relative h-full min-h-[500px]">
              <Image
                src="/images/banner-7.png"
                alt="Dr. Salma's approach to Hashimoto's"
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
                             <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-lg border border-green-200">
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                  <div>
                    <p className="font-semibold text-gray-800">Personalized Care</p>
                    <p className="text-sm text-gray-600">Tailored to your unique needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personalized Plan Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
                     className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12 border border-green-200/30"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                             <h3 className="text-3xl font-bold text-primary-green">
                 Your Personalized Hashimoto's Healing Plan
               </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                No generic thyroid protocols. No one-size-fits-all approaches.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Dr. Salma creates a healing plan as unique as your autoimmune pattern:
              </p>
              <div className="space-y-4">
                {personalizedPlan.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-green rounded-full mt-3 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
                         <div className="bg-white rounded-2xl p-8 shadow-soft border border-green-200">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">
                Why This Approach Works
              </h4>
              <p className="text-gray-600 leading-relaxed mb-6">
                Dr. Salma's unique combination of medical expertise and natural healing addresses Hashimoto's at its root cause, not just its symptoms.
              </p>
              <div className="space-y-3">
                                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                   <span className="text-gray-700">Addresses autoimmune root causes</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                   <span className="text-gray-700">Supports thyroid function naturally</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                   <span className="text-gray-700">Reduces inflammation</span>
                 </div>
                 <div className="flex items-center space-x-3">
                   <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                   <span className="text-gray-700">Improves energy and mental clarity</span>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HashimotosDifferenceSection 