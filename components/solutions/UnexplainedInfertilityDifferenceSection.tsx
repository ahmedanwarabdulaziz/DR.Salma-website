'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Heart, Star } from 'lucide-react'
import Image from 'next/image'

const UnexplainedInfertilityDifferenceSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Where Science Meets Soul
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Dr. Salma is Ontario's only practitioner who combines:
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Medical expertise</h3>
                  <p className="text-gray-600">in reviewing complex infertility cases and test results</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Advanced investigation</h3>
                  <p className="text-gray-600">beyond "normal" labs to uncover hidden issues</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">The heart of a true partner</h3>
                  <p className="text-gray-600">—she honors your grief and hope as much as your hormones</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/images/pic40.png"
              alt="Dr. Salma's unique approach"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default UnexplainedInfertilityDifferenceSection 