import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPosts, BlogPost } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Women\'s Health Blog - Dr. Salma',
  description: 'Expert insights on women\'s health, hormonal balance, and natural medicine',
  keywords: 'women\'s health, hormonal balance, natural medicine, Dr. Salma',
};

export default async function BlogPage() {
  console.log('Fetching blog posts...');
  const posts = await getBlogPosts();
  console.log('Posts received:', posts.length, posts);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Dr. Salma's Women's Health Blog</h1>
            <p className="text-xl text-white/90 mb-8">
              Expert insights on women's health, hormonal balance, and natural medicine
            </p>
          </div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">No Blog Posts Yet</h2>
              <p className="text-gray-600 mb-8">
                Check back soon for expert insights on women's health and hormonal balance.
              </p>
              <Link
                href="/admin"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create First Post
              </Link>
            </div>
          ) : (
            <div className="grid gap-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  {post.featuredImage && (
                    <div className="relative h-64">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                    </Link>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>By {post.author}</span>
                      <time>{post.createdAt ? new Date(post.createdAt.toDate?.() || post.createdAt).toLocaleDateString() : 'N/A'}</time>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 