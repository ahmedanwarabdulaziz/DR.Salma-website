'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react'
import Image from 'next/image'

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Dr. Salma', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Resources', href: '#resources' }
  ]

  const services = [
    { name: "Women's Health Hub", count: "10 Services", href: '#womens-health' },
    { name: "Classical Homeopathy", count: "3 Services", href: '#homeopathy' },
    { name: "View All Services", href: '#all-services' }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: '#', platform: 'Facebook' },
    { icon: <Instagram className="w-5 h-5" />, href: '#', platform: 'Instagram' },
    { icon: <Linkedin className="w-5 h-5" />, href: '#', platform: 'LinkedIn' },
    { icon: <Youtube className="w-5 h-5" />, href: '#', platform: 'YouTube' }
  ]

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Column 1 - Dr. Salma Branding */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Logo & Brand */}
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/logo.png"
                  alt="Dr. Salma Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-xl text-pink-600">
                    Dr.Salma
                  </h3>
                  <div className="relative w-5 h-5">
                    <Image
                      src="/images/butterfly.png"
                      alt="Butterfly"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-green-600 font-medium">
                  Women Ontario Hub
                </p>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              Empowering women's health through medical expertise and natural healing. Dr. Salma provides comprehensive care that addresses both symptoms and root causes.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300 group"
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
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-3">
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
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    {link.name}
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
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
            <ul className="space-y-3">
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
                    className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                  >
                    <div className="font-medium">{service.name}</div>
                    {service.count && (
                      <div className="text-sm text-gray-500">{service.count}</div>
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
            className="space-y-6 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold text-gray-900">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-pink-600" />
                <a 
                  href="tel:+12892186803" 
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                >
                  +1 (289) 218-6803
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MessageCircle className="w-5 h-5 text-pink-600" />
                <a 
                  href="mailto:info@drsalmawomenontariohub.com" 
                  className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
                >
                  info@drsalmawomenontariohub.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-pink-600" />
                <span className="text-gray-600">Ontario, Canada</span>
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
          className="mt-12 pt-8 border-t border-gray-200"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-600">
              <Heart className="w-4 h-4 text-pink-600" />
              <span>Made with care for women's health</span>
            </div>
            <div className="text-gray-600 text-sm">
              © 2024 Dr. Salma. All rights reserved.
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 