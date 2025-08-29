'use client'

import React, { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BlogPost } from '@/lib/contentful'

interface BlogSearchProps {
  posts: BlogPost[]
  onSearchResults: (results: BlogPost[]) => void
}

export default function BlogSearch({ posts, onSearchResults }: BlogSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [isSearching, setIsSearching] = useState(false)

  useEffect(() => {
    if (searchTerm.trim() === '') {
      onSearchResults(posts)
      return
    }

    setIsSearching(true)
    
    // Debounce search
    const timeoutId = setTimeout(() => {
      const results = posts.filter((post) => {
        const searchLower = searchTerm.toLowerCase()
        const title = post.fields.title.toLowerCase()
        const excerpt = post.fields.excerpt?.toLowerCase() || ''
        const tags = post.fields.tags?.join(' ').toLowerCase() || ''
        const categories = post.fields.categories?.map(c => c.fields.name).join(' ').toLowerCase() || ''
        
        return (
          title.includes(searchLower) ||
          excerpt.includes(searchLower) ||
          tags.includes(searchLower) ||
          categories.includes(searchLower)
        )
      })
      
      onSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchTerm, posts, onSearchResults])

  return (
    <div className="relative">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm('')}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-300"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>
      
      {/* Search Loading Indicator */}
      <AnimatePresence>
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg p-4 z-10"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-pink-600"></div>
              <span>Searching...</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
