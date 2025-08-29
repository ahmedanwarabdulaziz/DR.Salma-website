import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, Clock, User, Tag, ArrowLeft, Share2, Heart } from 'lucide-react'
import { getBlogPost, getBlogPosts } from '@/lib/contentful'
import RichTextRenderer from '@/components/blog/RichTextRenderer'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: 'Article Not Found | Dr. Salma Blog',
    }
  }

  return {
    title: post.fields.seoTitle || post.fields.title,
    description: post.fields.seoDescription || post.fields.excerpt,
    keywords: post.fields.tags?.join(', '),
    openGraph: {
      title: post.fields.title,
      description: post.fields.excerpt,
      type: 'article',
      publishedTime: post.sys.createdAt,
      authors: post.fields.author ? [post.fields.author.fields.name] : [],
      images: post.fields.featuredImage ? [
        {
          url: `https:${post.fields.featuredImage.fields.file.url}`,
          width: 1200,
          height: 630,
          alt: post.fields.title,
        }
      ] : [],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  
  return posts.map((post) => ({
    slug: post.fields.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const getReadingTime = (content: any) => {
    const text = JSON.stringify(content)
    const words = text.split(' ').length
    return Math.ceil(words / 200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Blog</span>
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-8">
          {/* Categories */}
          {post.fields.categories && post.fields.categories.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.fields.categories.map((category) => (
                <Link
                  key={category.fields.slug}
                  href={`/blog/category/${category.fields.slug}`}
                  className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-pink-100 text-pink-800 hover:bg-pink-200 transition-colors duration-300"
                >
                  {category.fields.name}
                </Link>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.fields.title}
          </h1>

          {/* Excerpt */}
          {post.fields.excerpt && (
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              {post.fields.excerpt}
            </p>
          )}

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
            {/* Author */}
            {post.fields.author && (
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.fields.author.fields.name}</span>
                {post.fields.author.fields.credentials && (
                  <span className="text-gray-400">• {post.fields.author.fields.credentials}</span>
                )}
              </div>
            )}

            {/* Date */}
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(post.sys.createdAt)}</span>
            </div>

            {/* Reading Time */}
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>{post.fields.readingTime || getReadingTime(post.fields.content)} min read</span>
            </div>
          </div>

          {/* Featured Image */}
          {post.fields.featuredImage && (
            <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
              <Image
                src={`https:${post.fields.featuredImage.fields.file.url}`}
                alt={post.fields.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          )}
        </header>

        {/* Content */}
        <RichTextRenderer content={post.fields.content} />

        {/* Tags */}
        {post.fields.tags && post.fields.tags.length > 0 && (
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex items-center space-x-2 mb-4">
              <Tag className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Tags:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {post.fields.tags.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Share and Actions */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors duration-300">
                <Heart className="w-5 h-5" />
                <span>Like</span>
              </button>
              <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 transition-colors duration-300">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
