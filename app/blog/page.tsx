import React from 'react'
import { Metadata } from 'next'
import { getBlogPosts, getCategories } from '@/lib/contentful'
import BlogCard from '@/components/blog/BlogCard'
import BlogHero from '@/components/blog/BlogHero'
import BlogCategories from '@/components/blog/BlogCategories'
import BlogSearchWrapper from '@/components/blog/BlogSearchWrapper'

export const metadata: Metadata = {
  title: 'Blog | Dr. Salma - Women Ontario Hub',
  description: 'Expert insights on women\'s health, natural healing, and wellness from Dr. Salma. Discover natural remedies, patient stories, and professional health advice.',
  keywords: 'women health blog, natural remedies, hormonal health, fertility, wellness, Dr. Salma',
  openGraph: {
    title: 'Blog | Dr. Salma - Women Ontario Hub',
    description: 'Expert insights on women\'s health, natural healing, and wellness from Dr. Salma.',
    type: 'website',
  },
}

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getBlogPosts(),
    getCategories(),
  ])

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      <BlogHero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <BlogSearchWrapper posts={posts} />
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <BlogCategories categories={categories} />
          </div>
        </div>
      </div>
    </div>
  )
} 