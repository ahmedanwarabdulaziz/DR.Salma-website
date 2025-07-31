'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowRight } from 'lucide-react'
import ContactSection from '@/components/ContactSection'

const AnxietyContactSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
            Dr. Salma is Ready When You Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your healing begins with a single conversation—not pressure, not judgment, but gentle expertise and hope.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-pink-200/30"
        >
          <div className="text-center space-y-6 mb-8">
            <Heart className="w-16 h-16 text-pink-600 mx-auto" />
            <h3 className="text-2xl font-bold text-gray-900">
              Contact Us
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
              We'd Love to Hear From You ♥
            </p>
            <p className="text-gray-600">
              Share your story or your questions, and our care team will respond with the care and understanding you deserve.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Contact form fields:
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Name</li>
                  <li>• Email Address</li>
                  <li>• Phone (optional)</li>
                  <li>• I'm interested in: Anxiety Linked to Hormonal Imbalances</li>
                  <li>• Your Message (How can we support you?)</li>
                  <li>• Consent Checkbox ("I consent to Dr. Salma's team replying to my inquiry.")</li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200/30">
                <p className="text-sm text-gray-600 mb-2">We reply within one business day. Your information is kept 100% confidential.</p>
                <p className="text-lg font-semibold text-gray-900 italic">
                  "You are not your anxiety. You are resilient, wise, and worthy of peace. Let's walk this path from overwhelm to calm—together, gently, step by step."
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center space-x-2 w-full">
                  <span>Send My Message</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200/30">
                <h4 className="font-semibold text-gray-900 mb-3">Ready to Start Your Journey?</h4>
                <div className="space-y-3">
                  <button className="w-full bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-sm">
                    Book Your Heart-to-Heart Consultation
                  </button>
                  <button className="w-full bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-sm">
                    Download: "Women's Calm & Clarity Guide"
                  </button>
                  <button className="w-full bg-white text-pink-600 border-2 border-pink-600 px-6 py-3 rounded-full font-semibold hover:bg-pink-50 transition-colors duration-300 text-sm">
                    Book Your Appointment Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Include the main ContactSection component */}
      <ContactSection />
    </section>
  )
}

export default AnxietyContactSection 