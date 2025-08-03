'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Dr. Salma', href: '/about' },
    {
      name: 'Solutions',
      href: '#solutions',
      dropdown: [
        { 
          name: 'Hormonal Health Solutions', 
          href: '/hormonal-health',
          children: [
            { name: 'PCOS Management', href: '/pcos-management' },
            { name: 'Hashimoto\'s Thyroiditis Management', href: '/hashimotos-thyroiditis' },
            { name: 'Hormonal Acne Treatment', href: '/hormonal-acne-treatment' }
          ]
        },
        { 
          name: 'Infertility & Unexplained Infertility', 
          href: '/infertility-unexplained-infertility',
          children: [
            { name: 'Unexplained Infertility Solutions', href: '/unexplained-infertility-solutions' },
            { name: 'Endometriosis Pain Management', href: '/endometriosis-pain-management' },
            { name: 'Menopause & Perimenopause Support', href: '/menopause-perimenopause-support' }
          ]
        },
        { 
          name: 'Energy & Wellness Optimization', 
          href: '/energy-wellness-optimization',
          children: [
            { name: 'Chronic Fatigue & Energy Optimization', href: '/chronic-fatigue-energy-optimization' },
            { name: 'Anxiety Linked to Hormonal Imbalances', href: '/anxiety-hormonal-imbalances' },
            { name: 'Pain Management (TCM/Acupuncture)', href: '/pain-management-tcm-acupuncture' }
          ]
        },
        { 
          name: 'Comprehensive Women\'s Care', 
          href: '/comprehensive-womens-care',
          children: [
            { name: 'General Women\'s Wellness', href: '/general-womens-wellness' },
            { name: 'Classical Homeopathy', href: '/classical-homeopathy' }
          ]
        },
      ]
    },
    {
      name: 'Resources',
      href: '#resources',
      dropdown: [
        { name: 'Blog', href: '/blog' },
        { name: 'Patient Resources', href: '/patient-resources' },
        { name: 'FAQ', href: '/faq' },
      ]
    },
    { name: 'Locations', href: '/locations' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-pink-200' 
        : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-4 hover:opacity-80 transition-opacity duration-300">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-4"
            >
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
                  <h1 className="font-bold text-2xl text-pink-600 leading-tight">
                    Dr.Salma
                  </h1>
                  <div className="relative w-5 h-5">
                    <Image
                      src="/images/butterfly.png"
                      alt="Butterfly"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <p className="text-xs font-medium text-green-600 uppercase tracking-wider">
                  Women Ontario Hub
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="dropdown">
                    <button className="nav-link flex items-center space-x-1">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    <div className="dropdown-menu">
                      {item.dropdown.map((subItem) => (
                        <div key={subItem.name}>
                          <a
                            href={subItem.href}
                            className="block px-6 py-3 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300"
                          >
                            {subItem.name}
                          </a>
                          {subItem.children && (
                            <div className="ml-4 border-l border-pink-200">
                              {subItem.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  className="block px-6 py-2 text-xs text-gray-500 hover:text-pink-600 hover:bg-pink-50 transition-all duration-300"
                                >
                                  {child.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="nav-link"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <button 
              onClick={() => router.push('/contact')}
              className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            >
              Book Consultation
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block py-3 text-lg font-medium text-gray-800 hover:text-pink-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <div key={subItem.name}>
                          <a
                            href={subItem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-pink-600 transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </a>
                          {subItem.children && (
                            <div className="ml-4 space-y-1">
                              {subItem.children.map((child) => (
                                <a
                                  key={child.name}
                                  href={child.href}
                                  className="block py-1 text-xs text-gray-500 hover:text-pink-600 transition-colors"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {child.name}
                                </a>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <button 
                  onClick={() => {
                    router.push('/contact')
                    setIsMenuOpen(false)
                  }}
                  className="w-full bg-gradient-to-r from-pink-600 to-pink-700 text-white px-6 py-3 rounded-xl font-semibold cursor-pointer"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 