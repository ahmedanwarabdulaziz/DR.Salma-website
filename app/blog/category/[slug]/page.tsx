import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getBlogPostsByCategory, getCategories } from '@/lib/contentful'
import BlogCard from '@/components/blog/BlogCard'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categories = await getCategories()
  const category = categories.find(cat => cat.fields.slug === params.slug)
  
  if (!category) {
    return {
      title: 'Category Not Found | Dr. Salma Blog',
    }
  }

  return {
    title: `${category.fields.name} | Dr. Salma Blog`,
    description: category.fields.description || `Articles about ${category.fields.name}`,
    openGraph: {
      title: `${category.fields.name} | Dr. Salma Blog`,
      description: category.fields.description || `Articles about ${category.fields.name}`,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  const categories = await getCategories()
  
  return categories.map((category) => ({
    slug: category.fields.slug,
  }))
}

export default async function CategoryPage({ params }: Props) {
  const [posts, categories] = await Promise.all([
    getBlogPostsByCategory(params.slug),
    getCategories(),
  ])
  
  const currentCategory = categories.find(cat => cat.fields.slug === params.slug)
  
  if (!currentCategory) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category Header */}
        <div className="text-center mb-12">
          <div 
            className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold"
            style={{ backgroundColor: currentCategory.fields.color || '#ec4899' }}
          >
            {currentCategory.fields.icon || '🏥'}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {currentCategory.fields.name}
          </h1>
          {currentCategory.fields.description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {currentCategory.fields.description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-gray-500 text-lg">
                  No articles found in this category yet.
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {posts.map((post) => (
                  <BlogCard key={post.sys.id} post={post} />
                ))}
              </div>
            )}
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                All Categories
              </h3>
              
              <div className="space-y-3">
                {categories.map((category) => (
                  <Link
                    key={category.sys.id}
                    href={`/blog/category/${category.fields.slug}`}
                    className={`flex items-center justify-between p-3 rounded-xl transition-colors duration-300 group ${
                      category.fields.slug === params.slug
                        ? 'bg-pink-100 text-pink-800'
                        : 'hover:bg-pink-50'
                    }`}
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
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
