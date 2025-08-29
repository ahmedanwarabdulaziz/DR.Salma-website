'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, Tag } from 'lucide-react'
import { BlogPost } from '@/lib/contentful'

interface BlogCardProps {
  post: BlogPost
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getReadingTime = (content: any) => {
    // Simple reading time calculation
    const text = JSON.stringify(content)
    const words = text.split(' ').length
    return Math.ceil(words / 200) // Average reading speed
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
    >
      <Link href={`/blog/${post.fields.slug}`}>
        {/* Featured Image */}
        {post.fields.featuredImage && (
          <div className="relative h-48 overflow-hidden">
            <Image
              src={`https:${post.fields.featuredImage.fields.file.url}`}
              alt={post.fields.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          {post.fields.categories && post.fields.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {post.fields.categories.slice(0, 2).map((category) => (
                <span
                  key={category.fields.slug}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800"
                >
                  {category.fields.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors duration-300 line-clamp-2">
            {post.fields.title}
          </h3>

          {/* Excerpt */}
          {post.fields.excerpt && (
            <p className="text-gray-600 mb-4 line-clamp-3">
              {post.fields.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-4">
              {/* Author */}
              {post.fields.author && (
                <div className="flex items-center space-x-1">
                  <User className="w-4 h-4" />
                  <span>{post.fields.author.fields.name}</span>
                </div>
              )}

              {/* Date */}
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(post.sys.createdAt)}</span>
              </div>

              {/* Reading Time */}
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{post.fields.readingTime || getReadingTime(post.fields.content)} min read</span>
              </div>
            </div>

            {/* Tags */}
            {post.fields.tags && post.fields.tags.length > 0 && (
              <div className="flex items-center space-x-1">
                <Tag className="w-4 h-4" />
                <span className="text-xs">
                  {post.fields.tags.slice(0, 2).join(', ')}
                  {post.fields.tags.length > 2 && '...'}
                </span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
