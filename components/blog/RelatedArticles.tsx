'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface RelatedArticlesProps {
  articles: any[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mt-16"
    >
      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-pink-100 to-transparent rounded-full -translate-y-20 translate-x-20 opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-16 -translate-x-16 opacity-30"></div>
        
        <div className="relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-heading">
              Related Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto font-body">
              Discover more insights on women's health and wellness
            </p>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              // Handle both old structure (with attributes) and new structure (direct properties)
              const {
                title,
                slug,
                excerpt,
                featuredImage,
                publishedAt,
                readingTime,
                category,
                // Fallback to attributes if they exist
                attributes
              } = article;

              // Use direct properties or fallback to attributes
              const articleData = attributes || article;

              const imageUrl = featuredImage?.data?.attributes?.url 
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${featuredImage.data.attributes.url}`
                : featuredImage?.url 
                ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${featuredImage.url}`
                : '/images/placeholder-blog.jpg';

              const formatDate = (dateString: string) => {
                if (!dateString) return 'Recently';
                return new Date(dateString).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric'
                });
              };

              return (
                <motion.article
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <Link href={`/blog/${articleData.slug || slug}`}>
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={imageUrl}
                        alt={articleData.title || title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                      
                      {category?.data?.attributes?.name && (
                        <div className="absolute top-4 left-4">
                          <span 
                            className="px-3 py-1 text-xs font-medium text-white rounded-full backdrop-blur-sm"
                            style={{ backgroundColor: `${category.data.attributes.color || '#e40056'}CC` }}
                          >
                            {category.data.attributes.name}
                          </span>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-6">
                      {/* Meta Information */}
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-body">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-3 h-3" />
                          <span>{formatDate(articleData.publishedAt || publishedAt)}</span>
                        </div>
                        
                        {readingTime && (
                          <div className="flex items-center space-x-1">
                            <Clock className="w-3 h-3" />
                            <span>{readingTime} min read</span>
                          </div>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors line-clamp-2 font-heading text-lg">
                        {articleData.title || title}
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-gray-600 mb-4 line-clamp-3 font-body leading-relaxed">
                        {articleData.excerpt || excerpt}
                      </p>
                      
                      {/* Read More */}
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-pink-600 group-hover:text-pink-700 transition-colors">
                          Read more
                        </span>
                        
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-pink-600 transition-colors group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                </motion.article>
              );
            })}
          </div>
          
          {/* View All Articles Link */}
          <div className="mt-12 text-center">
            <Link 
              href="/blog"
              className="inline-flex items-center space-x-2 bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700 transition-all duration-200 hover:scale-105 shadow-lg font-medium font-body"
            >
              <span>View all articles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </motion.section>
  );
} 