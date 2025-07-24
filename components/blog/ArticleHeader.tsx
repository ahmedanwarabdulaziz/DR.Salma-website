'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, User, Tag, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';

interface ArticleHeaderProps {
  article: any;
}

export default function ArticleHeader({ article }: ArticleHeaderProps) {
  // Handle Strapi v4 data structure
  const {
    id,
    attributes
  } = article;

  const {
    title,
    excerpt,
    featuredImage,
    publishedAt,
    readingTime,
    author,
    category,
    tags,
    slug
  } = attributes || {};

  // Generate image URL
  const imageUrl = featuredImage?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${featuredImage.data.attributes.url}`
    : '/images/placeholder-blog.jpg';

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <header className="relative bg-white overflow-hidden">
      {/* Professional Navigation Bar */}
      <div className="border-b border-gray-100 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link 
            href="/blog"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-pink-600 transition-colors font-body group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Section with Featured Image */}
      {featuredImage?.data?.attributes?.url && (
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[60vh] min-h-[400px] overflow-hidden"
        >
          <Image
            src={imageUrl}
            alt={title || 'Article featured image'}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-4xl mx-auto px-4 pb-12 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white"
              >
                {/* Category Badge */}
                {category?.data?.attributes?.name && (
                  <div className="mb-6">
                    <span 
                      className="px-4 py-2 text-sm font-medium text-white rounded-full border border-white/20 backdrop-blur-sm"
                      style={{ backgroundColor: `${category.data.attributes.color || '#e40056'}CC` }}
                    >
                      {category.data.attributes.name}
                    </span>
                  </div>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-heading drop-shadow-lg">
                  {title}
                </h1>

                {/* Excerpt */}
                {excerpt && (
                  <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed font-body max-w-3xl drop-shadow-md">
                    {excerpt}
                  </p>
                )}

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-6 text-white/80 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-body">{formatDate(publishedAt)}</span>
                  </div>
                  
                  {readingTime && (
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="font-body">{readingTime} min read</span>
                    </div>
                  )}
                  
                  {author?.data?.attributes?.name && (
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span className="font-body">By {author.data.attributes.name}</span>
                    </div>
                  )}
                </div>

                {/* Tags */}
                {tags?.data && tags.data.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {tags.data.map((tag: any) => (
                      <span
                        key={tag.id}
                        className="px-3 py-1 text-sm rounded-full font-body border border-white/20 backdrop-blur-sm"
                        style={{ 
                          backgroundColor: `${tag.attributes.color}CC`,
                          color: 'white'
                        }}
                      >
                        {tag.attributes.name}
                      </span>
                    ))}
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Content Header (when no featured image) */}
      {!featuredImage?.data?.attributes?.url && (
        <div className="max-w-4xl mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Category */}
            {category?.data?.attributes?.name && (
              <div className="mb-8">
                <span 
                  className="px-6 py-3 text-sm font-medium text-white rounded-full"
                  style={{ backgroundColor: category.data.attributes.color || '#e40056' }}
                >
                  {category.data.attributes.name}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight font-heading">
              {title}
            </h1>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed font-body max-w-3xl mx-auto">
                {excerpt}
              </p>
            )}

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 mb-8">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span className="font-body">{formatDate(publishedAt)}</span>
              </div>
              
              {readingTime && (
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-body">{readingTime} min read</span>
                </div>
              )}
              
              {author?.data?.attributes?.name && (
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-body">By {author.data.attributes.name}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            {tags?.data && tags.data.length > 0 && (
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tags.data.map((tag: any) => (
                  <span
                    key={tag.id}
                    className="px-4 py-2 text-sm rounded-full font-body"
                    style={{ 
                      backgroundColor: `${tag.attributes.color}20`,
                      color: tag.attributes.color 
                    }}
                  >
                    {tag.attributes.name}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </header>
  );
} 