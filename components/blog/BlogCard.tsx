'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User } from 'lucide-react';

interface BlogCardProps {
  article: any;
}

// Helper function to extract text from Strapi content
function extractTextFromContent(content: any): string {
  if (!content) return '';
  
  // If content is a string, return it
  if (typeof content === 'string') {
    return content;
  }
  
  // If content is an array (Strapi blocks), extract text from each block
  if (Array.isArray(content)) {
    return content
      .map((block: any) => {
        if (block.type === 'paragraph' && block.children) {
          return block.children
            .map((child: any) => child.text || '')
            .join('');
        }
        return '';
      })
      .join(' ');
  }
  
  // If content is an object, try to extract text
  if (typeof content === 'object') {
    if (content.text) return content.text;
    if (content.content) return extractTextFromContent(content.content);
  }
  
  return '';
}

export default function BlogCard({ article }: BlogCardProps) {
  // Handle both Strapi v4 and direct data structure
  const {
    id,
    title,
    slug,
    excerpt,
    content,
    featuredImage,
    publishedAt,
    readingTime,
    author,
    category,
    tags,
    createdAt,
    updatedAt,
    // If data is nested under attributes, extract it
    attributes
  } = article;

  // Use direct fields or extract from attributes
  const articleData = attributes || article;
  
  const {
    title: articleTitle,
    slug: articleSlug,
    excerpt: articleExcerpt,
    content: articleContent,
    featuredImage: articleFeaturedImage,
    publishedAt: articlePublishedAt,
    readingTime: articleReadingTime,
    author: articleAuthor,
    category: articleCategory,
    tags: articleTags
  } = articleData;

  // Use the extracted data or fall back to direct fields
  const finalTitle = articleTitle || title;
  const finalSlug = articleSlug || slug;
  const finalExcerpt = articleExcerpt || excerpt;
  const finalContent = articleContent || content;
  const finalFeaturedImage = articleFeaturedImage || featuredImage;
  const finalPublishedAt = articlePublishedAt || publishedAt;
  const finalReadingTime = articleReadingTime || readingTime;
  const finalAuthor = articleAuthor || author;
  const finalCategory = articleCategory || category;
  const finalTags = articleTags || tags;

  // Generate image URL
  const imageUrl = finalFeaturedImage?.data?.attributes?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${finalFeaturedImage.data.attributes.url}`
    : finalFeaturedImage?.url 
    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${finalFeaturedImage.url}`
    : '/images/placeholder-blog.jpg';

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Generate excerpt from content if not provided
  const contentText = extractTextFromContent(finalContent);
  const displayExcerpt = finalExcerpt || (contentText ? contentText.substring(0, 150) + '...' : 'No excerpt available');

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    >
      <Link href={`/blog/${finalSlug}`}>
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={finalTitle || 'Blog post'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          
          {finalCategory?.data?.attributes?.name && (
            <div className="absolute top-4 left-4">
              <span 
                className="px-3 py-1 text-xs font-medium text-white rounded-full"
                style={{ backgroundColor: finalCategory.data.attributes.color || '#e40056' }}
              >
                {finalCategory.data.attributes.name}
              </span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(finalPublishedAt)}</span>
            </div>
            {finalReadingTime && (
              <div className="flex items-center space-x-1">
                <Clock className="w-4 h-4" />
                <span>{finalReadingTime} min read</span>
              </div>
            )}
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-pink-600 transition-colors font-heading">
            {finalTitle}
          </h3>
          
          <p className="text-gray-600 mb-4 line-clamp-3 font-body">
            {displayExcerpt}
          </p>
          
          <div className="flex items-center justify-between">
            {finalAuthor?.data?.attributes?.name && (
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-600 font-body">
                  {finalAuthor.data.attributes.name}
                </span>
              </div>
            )}
            
            {finalTags?.data && finalTags.data.length > 0 && (
              <div className="flex space-x-1">
                {finalTags.data.slice(0, 2).map((tag: any) => (
                  <span
                    key={tag.id}
                    className="px-2 py-1 text-xs rounded-full"
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
          </div>
        </div>
      </Link>
    </motion.article>
  );
} 