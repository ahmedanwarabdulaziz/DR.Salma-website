'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/#home' },
    { name: 'About Dr. Salma', href: '/about' },
    { name: 'Services', href: '/#services' },
    { name: 'Resources', href: '/#resources' }
  ]

  const services = [
    { name: "Hormonal Health Solutions", count: "PCOS, Thyroid, Acne", href: '/#solutions-section' },
    { name: "Reproductive Health Care", count: "Fertility, Endometriosis, Menopause", href: '/#solutions-section' },
    { name: "Energy & Wellness Optimization", count: "Fatigue, Anxiety, Pain Management", href: '/#solutions-section' },
    { name: "Comprehensive Women's Care", count: "General Wellness, Homeopathy", href: '/#solutions-section' }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: 'https://www.facebook.com/DrSalmaWomenOntarioHub', platform: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/dr.salma.women.ontario.hub/', platform: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/salma-elhamadan-702a0033a/', platform: 'LinkedIn' }
  ]

  return (
    <footer className="bg-gradient-to-br from-rose-50 to-pink-50 border-t border-rose-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-16">
          
          {/* Column 1 - Dr. Salma Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            {/* Logo & Brand */}
            <div className="flex items-center space-x-4">
              <div className="relative w-16 h-16">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Salma Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-3">
                  <h3 className="font-bold text-2xl text-pink-600">
                    Dr.Salma
                  </h3>
                  <div className="relative w-6 h-6">
                    <Image
                      src="/images/butterfly.png"
                      alt="Butterfly"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-green-600 font-semibold">
                  Women Ontario Hub
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-700 leading-relaxed text-xl">
              Where medical expertise meets natural healing. Dr. Salma provides comprehensive women's health care that addresses both symptoms and root causes with compassion and expertise.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-rose-600 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  aria-label={social.platform}
                >
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-lg group"
                  >
                    <span className="group-hover:underline decoration-pink-300 decoration-2 underline-offset-4">
                      {link.name}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Specialized Care Areas</h3>
            <ul className="space-y-5">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.href}
                    className="text-gray-700 hover:text-pink-600 transition-colors duration-300 group"
                  >
                    <div className="font-semibold text-lg group-hover:underline decoration-pink-300 decoration-2 underline-offset-4">
                      {service.name}
                    </div>
                    {service.count && (
                      <div className="text-sm text-gray-600 mt-1 font-medium">{service.count}</div>
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-6">Contact Us</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <a 
                  href="tel:+12892186803" 
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-lg"
                >
                  +1 (289) 218-6803
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-pink-600" />
                </div>
                <a 
                  href="mailto:info@drsalmawomenontariohub.com" 
                  className="text-gray-700 hover:text-pink-600 transition-colors duration-300 font-medium text-lg"
                >
                  info@drsalmawomenontariohub.com
                </a>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-100 to-rose-100 rounded-full flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <span className="text-gray-700 font-medium text-lg">Ontario, Canada</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 pt-12 border-t border-rose-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-3 text-gray-700">
              <Heart className="w-5 h-5 text-pink-600" />
              <span className="font-medium text-lg">Made with care for women's health</span>
            </div>
            <div className="text-gray-600 text-base font-medium">
              © 2024 Dr. Salma. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 