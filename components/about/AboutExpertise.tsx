'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Brain, Users, Clock, Award, Leaf, Shield, Star } from 'lucide-react'
import Image from 'next/image'

const AboutExpertise = () => {
  const expertisePillars = [
    {
      icon: Shield,
      title: "Medical Authority",
      description: "Can interpret complex labs, understand diagnostic imaging, and recognize when conventional intervention is needed",
      features: [
        "20+ years of gynecological diagnostic expertise that builds immediate trust",
        "Understanding of when natural approaches are appropriate vs. when medical intervention is necessary",
        "Credibility with both patients and conventional medical colleagues"
      ],
      color: "green"
    },
    {
      icon: Leaf,
      title: "Natural Healing Mastery",
      description: "Comprehensive naturopathic toolkit including nutrition, botanical medicine, TCM, and acupuncture",
      features: [
        "Clinical Homeopathy specialization for individualized constitutional care",
        "Holistic approach addressing root causes, not just symptoms",
        "Safe, effective alternatives to pharmaceutical interventions"
      ],
      color: "pink"
    },
    {
      icon: Heart,
      title: "Women's Health Specialization",
      description: "Deep understanding of hormonal complexities, reproductive health, and life transitions",
      features: [
        "Expertise in conditions that disproportionately affect women",
        "Specialized knowledge of complex conditions like PCOS, endometriosis, and unexplained infertility",
        "Culturally sensitive approach to women's intimate health concerns"
      ],
      color: "green"
    },
    {
      icon: Brain,
      title: "Integrative Bridge",
      description: "Only practitioner who can confidently navigate both conventional and natural medicine worlds",
      features: [
        "Seamless integration of medical diagnostic skills with comprehensive natural solutions",
        "Evidence-based approach combining medical knowledge with natural health research",
        "Collaborative care with existing healthcare teams"
      ],
      color: "pink"
    }
  ]

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">
            Why Women Choose Dr. Salma
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four-Pillar Expertise That Sets Her Apart
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {expertisePillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${
                pillar.color === 'green' ? 'bg-primary-green/20' : 'bg-primary-pink/20'
              }`}>
                <pillar.icon className={`w-8 h-8 ${
                  pillar.color === 'green' ? 'text-primary-green' : 'text-primary-pink'
                }`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {pillar.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {pillar.description}
              </p>
              <div className="space-y-3">
                {pillar.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-3 flex-shrink-0 ${
                      pillar.color === 'green' ? 'bg-primary-green' : 'bg-primary-pink'
                    }`}></div>
                    <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 max-w-3xl mx-auto">
            <Star className="w-12 h-12 text-primary-green mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Experience the Difference
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Salma's unique combination of medical expertise and natural healing creates a comprehensive approach that addresses both the symptoms and root causes of women's health challenges.
            </p>
            <button className="btn-primary group">
              <span className="flex items-center">
                Book Your Consultation
                <Award className="w-5 h-5 ml-2 transition-transform group-hover:scale-110" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutExpertise 