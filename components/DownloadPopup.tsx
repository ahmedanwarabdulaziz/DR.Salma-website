'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Phone } from 'lucide-react'

interface DownloadPopupProps {
  isOpen: boolean
  onClose: () => void
  guideName: string
}

const DownloadPopup = ({ isOpen, onClose, guideName }: DownloadPopupProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-rose-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-primary-green">
                {guideName}
              </h3>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-6 border border-rose-200">
                <p className="text-gray-700 leading-relaxed mb-4">
                  This PDF guide is available exclusively for Dr. Salma's current clients. 
                  To access your personalized version, please contact us.
                </p>
                <p className="text-gray-600 text-sm">
                  We're here to help you on your health journey!
                </p>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">Contact Us:</h4>
                
                <a
                  href="mailto:info@drsalmawomenontariohub.com"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200 hover:from-pink-100 hover:to-rose-100 transition-all duration-300 group"
                >
                  <Mail className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                    info@drsalmawomenontariohub.com
                  </span>
                </a>

                <a
                  href="tel:+12892186803"
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 group"
                >
                  <Phone className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700 group-hover:text-green-600 transition-colors duration-300">
                    +1 (289) 218-6803
                  </span>
                </a>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => window.location.href = '/contact'}
                className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-pink-700 hover:to-rose-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Book Your Consultation
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default DownloadPopup 