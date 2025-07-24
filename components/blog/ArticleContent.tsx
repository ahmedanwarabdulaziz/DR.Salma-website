'use client';

import { motion } from 'framer-motion';
import { Share2, Calendar, Clock, User } from 'lucide-react';

interface ArticleContentProps {
  article: any;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  // Handle both old structure (with attributes) and new structure (direct properties)
  const { content, publishedAt, createdAt, attributes } = article;
  
  // Use direct properties or fallback to attributes
  const articleData = attributes || article;

  // Function to render rich text content from Strapi
  const renderContent = (content: any) => {
    if (!content) return null;
    
    // If content is a string, render it directly
    if (typeof content === 'string') {
      return (
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-heading prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-a:text-pink-600 prose-a:no-underline hover:prose-a:text-pink-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:leading-relaxed prose-blockquote:border-l-pink-500 prose-blockquote:bg-pink-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      );
    }
    
    // If content is an array (Strapi rich text blocks), render each block
    if (Array.isArray(content)) {
      return (
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-heading prose-p:text-gray-700 prose-p:leading-relaxed prose-p:text-lg prose-a:text-pink-600 prose-a:no-underline hover:prose-a:text-pink-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:leading-relaxed prose-blockquote:border-l-pink-500 prose-blockquote:bg-pink-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg">
          {content.map((block: any, index: number) => {
            if (block.type === 'paragraph') {
              return (
                <p key={index} className="mb-8 leading-relaxed text-gray-700 text-lg">
                  {block.children?.map((child: any, childIndex: number) => {
                    if (child.type === 'text') {
                      return <span key={childIndex}>{child.text}</span>;
                    }
                    return null;
                  })}
                </p>
              );
            }
            if (block.type === 'heading') {
              const level = block.level || 2;
              const Tag = `h${level}` as keyof JSX.IntrinsicElements;
              const headingClasses = {
                1: 'text-4xl md:text-5xl font-bold text-gray-900 mb-8 mt-12',
                2: 'text-3xl md:text-4xl font-bold text-gray-900 mb-6 mt-10',
                3: 'text-2xl md:text-3xl font-semibold text-gray-900 mb-4 mt-8',
                4: 'text-xl md:text-2xl font-semibold text-gray-900 mb-4 mt-6',
                5: 'text-lg md:text-xl font-semibold text-gray-900 mb-3 mt-4',
                6: 'text-base md:text-lg font-semibold text-gray-900 mb-2 mt-3'
              };
              return (
                <Tag key={index} className={`${headingClasses[level as keyof typeof headingClasses]} font-heading`}>
                  {block.children?.map((child: any, childIndex: number) => {
                    if (child.type === 'text') {
                      return <span key={childIndex}>{child.text}</span>;
                    }
                    return null;
                  })}
                </Tag>
              );
            }
            return null;
          })}
        </div>
      );
    }
    
    // Fallback: try to stringify the content
    return (
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed text-lg">
          {JSON.stringify(content)}
        </p>
      </div>
    );
  };

  // Get the correct date (publishedAt or createdAt)
  const displayDate = articleData.publishedAt || publishedAt || articleData.createdAt || createdAt || new Date();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-8 md:p-12 lg:p-16 shadow-xl border border-gray-100 relative overflow-hidden"
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-100 to-transparent rounded-full translate-y-12 -translate-x-12 opacity-50"></div>
        
        {/* Article Content */}
        <div className="relative z-10">
          <div className="max-w-none mb-12">
            {renderContent(articleData.content || content)}
          </div>
        </div>
        
        {/* Professional Article Footer */}
        <div className="relative z-10 mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Share Section */}
            <div className="flex flex-col space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 font-heading">Share this article</h3>
              <div className="flex space-x-3">
                <button className="p-3 rounded-full bg-pink-100 text-pink-600 hover:bg-pink-200 transition-all duration-200 hover:scale-105 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </button>
                <button className="p-3 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all duration-200 hover:scale-105 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </button>
                <button className="p-3 rounded-full bg-green-100 text-green-600 hover:bg-green-200 transition-all duration-200 hover:scale-105 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>
                <button className="p-3 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all duration-200 hover:scale-105 shadow-sm">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537 1.255-1.049 1.715-.512.46-1.174.76-1.87.76H7.5c-.696 0-1.358-.3-1.87-.76-.512-.46-.904-1.057-1.049-1.715L2.106 8.221C2.037 7.95 2 7.67 2 7.387c0-.696.3-1.358.76-1.87.46-.512 1.057-.904 1.715-1.049L12 4.5l7.525 1.968c.658.145 1.255.537 1.715 1.049.46.512.76 1.174.76 1.87 0 .283-.037.563-.106.834z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Publication Info */}
            <div className="flex flex-col items-end space-y-3">
              <div className="text-sm text-gray-500 font-body">
                <span className="font-medium">Published on</span>
              </div>
              <div className="text-lg font-semibold text-gray-900 font-heading">
                {new Date(displayDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
} 