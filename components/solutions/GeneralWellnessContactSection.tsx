'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle, Mail, Clock, Phone, Paperclip, Mic, ChevronDown, ArrowRight } from 'lucide-react'

const GeneralWellnessContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    consultationType: 'General Women\'s Wellness',
    contactMethod: 'phone',
    message: ''
  })

  const services = [
    "Comprehensive Wellness Assessment",
    "Personalized Wellness Plans", 
    "Preventive Care & Support"
  ]

  const consultationTypes = [
    "General Women's Wellness",
    "Hormonal Health Solutions",
    "Infertility and un-explained infertility",
    "Energy & Wellness Optimization",
    "Menopause & Perimenopause Support",
    "PCOS Management",
    "Endometriosis Pain Management",
    "Chronic Fatigue & Energy Optimization",
    "Anxiety Linked to Hormonal Imbalances",
    "Pain Management (TCM/Acupuncture)",
    "Classical Homeopathy"
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Description & Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Envelope Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start"
            >
              <div className="w-20 h-20 bg-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <Mail className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-green-600 text-center lg:text-left mb-6">
                Begin Your{' '}
                <span className="text-pink-600">Personalized Wellness Journey</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p className="text-lg text-gray-600 leading-relaxed text-center lg:text-left mb-8">
                Dr. Salma combines medical expertise with compassionate care to provide comprehensive women's wellness solutions. Get personalized care that addresses your unique health needs and empowers you to take control of your wellness journey.
              </p>
            </motion.div>

            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                What You'll Receive:
              </h3>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Contact Information:
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-600">+1 (289) 218-6803</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-600">info@drsalmawomenontariohub.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-pink-600" />
                  <span className="text-gray-600">Mon-Sat: 9AM-6PM</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                />
              </div>

              {/* Consultation Type */}
              <div>
                <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 mb-2">
                  I'm interested in:
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  {consultationTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Contact Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Contact Method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="phone"
                      checked={formData.contactMethod === 'phone'}
                      onChange={handleInputChange}
                      className="text-pink-600 focus:ring-pink-500"
                    />
                    <span className="text-gray-700">Phone Call</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="contactMethod"
                      value="email"
                      checked={formData.contactMethod === 'email'}
                      onChange={handleInputChange}
                      className="text-pink-600 focus:ring-pink-500"
                    />
                    <span className="text-gray-700">Email</span>
                  </label>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message (How can we support you, or what would you like us to know?)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  placeholder="Tell us about your wellness goals..."
                />
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 text-pink-600 focus:ring-pink-500"
                  />
                  <span className="text-sm text-gray-700">
                    I consent to Dr. Salma's team replying to my inquiry.
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="w-full bg-pink-600 text-white py-4 px-8 rounded-full font-semibold hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center space-x-2 group"
              >
                <span>Send My Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </form>

            {/* Bottom Note */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                We reply within one business day. Your information is kept 100% confidential.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GeneralWellnessContactSection 