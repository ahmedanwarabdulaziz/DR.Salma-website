import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts, formatDate } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Women\'s Health Blog - Dr. Salma | Expert Insights on Hormonal Balance & Natural Medicine',
  description: 'Discover expert insights on women\'s health, hormonal balance, natural medicine, and wellness from Dr. Salma. Evidence-based advice for optimal women\'s health.',
  keywords: 'women\'s health, hormonal balance, natural medicine, Dr. Salma, women wellness, PMS, menopause, fertility, nutrition for women, herbal medicine, women\'s health blog',
  authors: [{ name: 'Dr. Salma' }],
  creator: 'Dr. Salma',
  publisher: 'Dr. Salma Women\'s Health',
  category: 'Health & Wellness',
  classification: 'Medical Information',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://drsalma.com/blog',
  },
  openGraph: {
    title: 'Women\'s Health Blog - Dr. Salma | Expert Insights on Hormonal Balance & Natural Medicine',
    description: 'Discover expert insights on women\'s health, hormonal balance, natural medicine, and wellness from Dr. Salma. Evidence-based advice for optimal women\'s health.',
    url: 'https://drsalma.com/blog',
    siteName: 'Dr. Salma Women\'s Health',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://drsalma.com/images/salma-1.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Salma Women\'s Health Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Women\'s Health Blog - Dr. Salma | Expert Insights on Hormonal Balance & Natural Medicine',
    description: 'Discover expert insights on women\'s health, hormonal balance, natural medicine, and wellness from Dr. Salma.',
    images: ['https://drsalma.com/images/salma-1.png'],
    creator: '@drsalma',
    site: '@drsalma',
  },
  other: {
    'article:publisher': 'https://www.facebook.com/drsalma',
    'article:author': 'https://www.facebook.com/drsalma',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Generate structured data for the blog
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dr. Salma Women\'s Health Blog',
    description: 'Expert insights on women\'s health, hormonal balance, and natural medicine',
    url: 'https://drsalma.com/blog',
    author: {
      '@type': 'Person',
      name: 'Dr. Salma',
      jobTitle: 'Women\'s Health Specialist',
      description: 'Expert in women\'s health, hormonal balance, and natural medicine',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Salma Women\'s Health',
      url: 'https://drsalma.com',
    },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      datePublished: post.date,
      dateModified: post.date,
      url: `https://drsalma.com/blog/${post.slug}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://drsalma.com/blog/${post.slug}`,
      },
      image: post.featuredImage ? {
        '@type': 'ImageObject',
        url: `https://drsalma.com${post.featuredImage}`,
        width: 1200,
        height: 630,
      } : undefined,
      keywords: post.tags.join(', '),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Dr. Salma's Women's Health Blog
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Expert insights on women's health, hormonal balance, and natural medicine
              </p>
              <div className="flex justify-center space-x-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  Women's Health
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  Hormonal Balance
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">
                  Natural Medicine
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="container mx-auto px-4 py-16">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                >
                  {post.featuredImage && (
                    <div className="relative h-48">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-xl font-bold mb-3 text-gray-900">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-blue-600 transition-colors"
                        itemProp="headline"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">By {post.author}</span>
                      </span>
                      <time itemProp="datePublished" dateTime={post.date}>
                        {formatDate(post.date)}
                      </time>
                    </div>
                    <meta itemProp="dateModified" content={post.date} />
                    <meta itemProp="url" content={`https://drsalma.com/blog/${post.slug}`} />
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="max-w-md mx-auto">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  No blog posts yet
                </h2>
                <p className="text-gray-600 mb-8">
                  Blog posts will appear here once they're created. Check back soon for expert insights on women's health!
                </p>
                <Link
                  href="/"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ← Back to Home
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 