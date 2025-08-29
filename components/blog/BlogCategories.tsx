'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Category } from '@/lib/contentful'

interface BlogCategoriesProps {
  categories: Category[]
}

export default function BlogCategories({ categories }: BlogCategoriesProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6">
        Categories
      </h3>
      
      <div className="space-y-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.sys.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link
              href={`/blog/category/${category.fields.slug}`}
              className="flex items-center justify-between p-3 rounded-xl hover:bg-pink-50 transition-colors duration-300 group"
            >
              <div className="flex items-center space-x-3">
                <div 
                  className="w-3 h-3 rounded-full"
                  style={{ 
                    backgroundColor: category.fields.color || '#ec4899' 
                  }}
                />
                <span className="font-medium text-gray-700 group-hover:text-pink-600 transition-colors duration-300">
                  {category.fields.name}
                </span>
              </div>
              
              <div className="text-sm text-gray-400 group-hover:text-pink-400 transition-colors duration-300">
                →
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-8 p-4 bg-gradient-to-br from-pink-50 to-rose-50 rounded-xl border border-pink-200">
        <h4 className="font-semibold text-gray-900 mb-2">
          Stay Updated
        </h4>
        <p className="text-sm text-gray-600 mb-4">
          Get the latest health insights and wellness tips delivered to your inbox.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center w-full px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-lg hover:bg-pink-700 transition-colors duration-300"
        >
          Subscribe to Newsletter
        </Link>
      </div>
    </div>
  )
}
