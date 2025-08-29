'use client'

import React, { useState } from 'react'
import { BlogPost } from '@/lib/contentful'
import BlogCard from './BlogCard'
import BlogSearch from './BlogSearch'

interface BlogSearchWrapperProps {
  posts: BlogPost[]
}

export default function BlogSearchWrapper({ posts }: BlogSearchWrapperProps) {
  const [filteredPosts, setFilteredPosts] = useState<BlogPost[]>(posts)

  return (
    <div>
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Latest Articles
        </h2>
        <p className="text-gray-600 mb-6">
          Expert insights on women's health and natural healing
        </p>
        
        {/* Search Bar */}
        <BlogSearch posts={posts} onSearchResults={setFilteredPosts} />
      </div>
      
      {filteredPosts.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">
            No articles found matching your search.
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.sys.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
