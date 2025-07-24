import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    // Dynamic import to avoid Firebase being processed during metadata generation
    const { getBlogPostBySlug } = await import('@/lib/firebase-blog');
    const post = await getBlogPostBySlug(params.slug);
    
    if (!post) {
      return {
        title: 'Post Not Found - Dr. Salma Women\'s Health',
        description: 'The requested blog post could not be found.',
      };
    }

    const keywords = [
      'women\'s health',
      'hormonal balance',
      'natural medicine',
      'Dr. Salma',
      ...post.tags,
      post.title.toLowerCase(),
    ].join(', ');

    return {
      title: `${post.seoTitle || post.title} - Dr. Salma Women's Health Blog`,
      description: post.seoDescription || post.excerpt,
      keywords: keywords,
      authors: [{ name: post.author }],
      creator: post.author,
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
        canonical: `https://drsalma.com/blog/${post.slug}`,
      },
      openGraph: {
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        url: `https://drsalma.com/blog/${post.slug}`,
        siteName: 'Dr. Salma Women\'s Health',
        type: 'article',
        locale: 'en_US',
        publishedTime: post.createdAt?.toDate?.() || post.createdAt,
        modifiedTime: post.updatedAt?.toDate?.() || post.updatedAt,
        authors: [post.author],
        tags: post.tags,
        images: post.featuredImage ? [
          {
            url: post.featuredImage,
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ] : [
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
        title: post.seoTitle || post.title,
        description: post.seoDescription || post.excerpt,
        images: post.featuredImage ? [post.featuredImage] : ['https://drsalma.com/images/salma-1.png'],
        creator: '@drsalma',
        site: '@drsalma',
      },
      other: {
        'article:publisher': 'https://www.facebook.com/drsalma',
        'article:author': 'https://www.facebook.com/drsalma',
        'article:published_time': post.createdAt?.toDate?.() || post.createdAt,
        'article:modified_time': post.updatedAt?.toDate?.() || post.updatedAt,
        'article:section': 'Women\'s Health',
        'article:tag': post.tags.join(', '),
      },
    };
  } catch (error) {
    console.warn('Could not fetch blog post for metadata:', error);
    return {
      title: 'Post Not Found - Dr. Salma Women\'s Health',
      description: 'The requested blog post could not be found.',
    };
  }
}

export async function generateStaticParams() {
  try {
    // Dynamic import to avoid Firebase being processed during metadata generation
    const { getAllBlogPostsSimple } = await import('@/lib/firebase-blog');
    const posts = await getAllBlogPostsSimple();
    
    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.warn('Could not fetch blog posts for static params:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: Props) {
  try {
    // Dynamic import to avoid Firebase being processed during page generation
    const { getBlogPostBySlug } = await import('@/lib/firebase-blog');
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      notFound();
    }

    // Generate structured data for the blog post
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.seoTitle || post.title,
      description: post.seoDescription || post.excerpt,
      author: {
        '@type': 'Person',
        name: post.author,
        jobTitle: 'Women\'s Health Specialist',
        description: 'Expert in women\'s health, hormonal balance, and natural medicine',
      },
      publisher: {
        '@type': 'Organization',
        name: 'Dr. Salma Women\'s Health',
        url: 'https://drsalma.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://drsalma.com/images/logo.png',
        },
      },
      datePublished: post.createdAt?.toDate?.() || post.createdAt,
      dateModified: post.updatedAt?.toDate?.() || post.updatedAt,
      url: `https://drsalma.com/blog/${post.slug}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://drsalma.com/blog/${post.slug}`,
      },
      image: post.featuredImage ? {
        '@type': 'ImageObject',
        url: post.featuredImage,
        width: 1200,
        height: 630,
        alt: post.title,
      } : {
        '@type': 'ImageObject',
        url: 'https://drsalma.com/images/salma-1.png',
        width: 1200,
        height: 630,
        alt: 'Dr. Salma Women\'s Health Blog',
      },
      keywords: post.seoKeywords?.join(', ') || post.tags.join(', '),
      articleSection: 'Women\'s Health',
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      isPartOf: {
        '@type': 'Blog',
        name: 'Dr. Salma Women\'s Health Blog',
        url: 'https://drsalma.com/blog',
      },
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
              <div className="max-w-4xl mx-auto">
                <Link
                  href="/blog"
                  className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
                >
                  ← Back to Blog
                </Link>
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                  {post.title}
                </h1>
                <div className="flex items-center space-x-4 text-white/80">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <time dateTime={post.createdAt?.toDate?.() || post.createdAt}>
                    {post.createdAt ? new Date(post.createdAt.toDate?.() || post.createdAt).toLocaleDateString() : 'N/A'}
                  </time>
                </div>
                {post.tags.length > 0 && (
                  <div className="flex items-center space-x-2 mt-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/20 px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Article Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              {post.featuredImage && (
                <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              
              <article 
                className="prose prose-lg max-w-none"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4" itemProp="headline">
                      {post.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-gray-600 mb-6">
                      <span itemProp="author" itemScope itemType="https://schema.org/Person">
                        <span itemProp="name">By {post.author}</span>
                      </span>
                      <span>•</span>
                      <time itemProp="datePublished" dateTime={post.createdAt?.toDate?.() || post.createdAt}>
                        {post.createdAt ? new Date(post.createdAt.toDate?.() || post.createdAt).toLocaleDateString() : 'N/A'}
                      </time>
                    </div>
                    {post.tags.length > 0 && (
                      <div className="flex items-center space-x-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  
                  <div 
                    className="text-gray-700 leading-relaxed"
                    itemProp="articleBody"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                  
                  <meta itemProp="dateModified" content={post.updatedAt?.toDate?.() || post.updatedAt} />
                  <meta itemProp="url" content={`https://drsalma.com/blog/${post.slug}`} />
                </div>
              </article>

              {/* Back to Blog */}
              <div className="mt-12 text-center">
                <Link
                  href="/blog"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ← Back to Blog
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.warn('Could not fetch blog post for page generation:', error);
    notFound();
  }
} 