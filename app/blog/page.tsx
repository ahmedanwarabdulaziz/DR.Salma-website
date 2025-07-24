import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

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

export default async function BlogPage() {
  let posts: any[] = [];
  let error = false;
  
  try {
    // Dynamic import to avoid Firebase being processed during page generation
    const { getAllBlogPostsSimple } = await import('@/lib/firebase-blog');
    posts = await getAllBlogPostsSimple();
  } catch (error) {
    console.error('Error loading blog posts:', error);
    error = true;
  }

  // Generate structured data for the blog
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dr. Salma Women\'s Health Blog',
    description: 'Expert insights on women\'s health, hormonal balance, and natural medicine',
    url: 'https://drsalma.com/blog',
    author: { '@type': 'Person', name: 'Dr. Salma', jobTitle: 'Women\'s Health Specialist' },
    publisher: { '@type': 'Organization', name: 'Dr. Salma Women\'s Health', url: 'https://drsalma.com' },
    blogPost: posts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      author: { '@type': 'Person', name: post.author },
      datePublished: post.createdAt?.toDate?.() || post.createdAt,
      dateModified: post.updatedAt?.toDate?.() || post.updatedAt,
      url: `https://drsalma.com/blog/${post.slug}`,
      mainEntityOfPage: { '@type': 'WebPage', '@id': `https://drsalma.com/blog/${post.slug}` },
      image: post.featuredImage ? { '@type': 'ImageObject', url: post.featuredImage, width: 1200, height: 630 } : undefined,
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
            {error ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Connection Issue</h2>
                <p className="text-gray-600 mb-8">
                  We're having trouble connecting to our blog database. Please try again in a few minutes.
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Refresh Page
                </button>
              </div>
            ) : posts.length === 0 ? (
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
                  <article key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300" itemScope itemType="https://schema.org/BlogPosting">
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
                        {post.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors" itemProp="headline">
                        <h2 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h2>
                      </Link>
                      <p className="text-gray-600 mb-4 line-clamp-3" itemProp="description">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span itemProp="author" itemScope itemType="https://schema.org/Person"><span itemProp="name">By {post.author}</span></span>
                        <time itemProp="datePublished" dateTime={post.createdAt?.toDate?.() || post.createdAt}>{post.createdAt ? new Date(post.createdAt.toDate?.() || post.createdAt).toLocaleDateString() : 'N/A'}</time>
                      </div>
                      <meta itemProp="dateModified" content={post.updatedAt?.toDate?.() || post.updatedAt} />
                      <meta itemProp="url" content={`https://drsalma.com/blog/${post.slug}`} />
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
} 