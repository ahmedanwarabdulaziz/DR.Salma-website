import { Metadata } from 'next';
import { notFound } from 'next/navigation';

interface Props {
  params: { slug: string };
}

async function getArticle(slug: string) {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const response = await fetch(`${strapiUrl}/api/articles?filters[slug][$eq]=${slug}&populate=*`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data?.[0] || null;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticle(params.slug);
  
  if (!article) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: article.attributes?.seoTitle || article.attributes?.title,
    description: article.attributes?.seoDescription || article.attributes?.excerpt,
    keywords: article.attributes?.seoKeywords || ['women health', 'natural medicine', 'wellness'],
    openGraph: {
      title: article.attributes?.seoTitle || article.attributes?.title,
      description: article.attributes?.seoDescription || article.attributes?.excerpt,
      type: 'article',
      url: `https://drsalma.com/blog/${article.attributes?.slug}`,
      siteName: 'Dr. Salma - Women\'s Health',
      publishedTime: article.attributes?.publishedAt,
      authors: [article.attributes?.author?.data?.attributes?.name || 'Dr. Salma Elhamadan'],
      images: article.attributes?.mainImage?.data?.attributes?.url ? [
        {
          url: `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${article.attributes.mainImage.data.attributes.url}`,
          width: 1200,
          height: 630,
          alt: article.attributes.mainImage.data.attributes.alternativeText || article.attributes.title,
        }
      ] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.attributes?.seoTitle || article.attributes?.title,
      description: article.attributes?.seoDescription || article.attributes?.excerpt,
      images: article.attributes?.mainImage?.data?.attributes?.url ? 
        `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${article.attributes.mainImage.data.attributes.url}` : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const article = await getArticle(params.slug);
  
  if (!article) {
    notFound();
  }

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.attributes?.title,
    description: article.attributes?.excerpt,
          author: {
      '@type': 'Person',
      name: article.attributes?.author?.data?.attributes?.name || 'Dr. Salma Elhamadan',
      jobTitle: 'Naturopathic Doctor',
    },
    datePublished: article.attributes?.publishedAt,
    dateModified: article.attributes?.updatedAt,
    publisher: {
      '@type': 'Organization',
      name: 'Dr. Salma - Women\'s Health',
      url: 'https://drsalma.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://drsalma.com/blog/${article.attributes?.slug}`,
    },
    url: `https://drsalma.com/blog/${article.attributes?.slug}`,
    articleSection: article.attributes?.categories?.data?.map((cat: any) => cat.attributes?.name).join(', ') || '',
    keywords: article.attributes?.seoKeywords?.join(', ') || 'women health, natural medicine, wellness',
    image: article.attributes?.mainImage?.data?.attributes?.url ? 
      `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${article.attributes.mainImage.data.attributes.url}` : undefined,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Header Image */}
            {article.attributes?.mainImage?.data?.attributes?.url && (
              <div className="w-full h-64 md:h-96 relative">
                <img
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${article.attributes.mainImage.data.attributes.url}`}
                  alt={article.attributes.mainImage.data.attributes.alternativeText || article.attributes.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Header */}
            <div className="p-8">
              <nav className="mb-4">
                <a
                  href="/blog"
                  className="text-pink-600 hover:text-pink-700 font-medium"
                >
                  ← Back to Blog
                </a>
              </nav>
              
              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span>{article.attributes?.author?.data?.attributes?.name || 'Dr. Salma Elhamadan'}</span>
                {article.attributes?.publishedAt && (
                  <>
                    <span className="mx-2">•</span>
                    <time dateTime={article.attributes.publishedAt}>
                      {new Date(article.attributes.publishedAt).toLocaleDateString()}
                    </time>
                  </>
                )}
              </div>
              
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {article.attributes?.title}
              </h1>
              
              {article.attributes?.excerpt && (
                <p className="text-xl text-gray-600 mb-6">
                  {article.attributes.excerpt}
                </p>
              )}
              
              {article.attributes?.categories?.data && article.attributes.categories.data.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.attributes.categories.data.map((category: any) => (
                    <span
                      key={category.id}
                      className="px-3 py-1 bg-pink-100 text-pink-800 text-sm rounded-full"
                    >
                      {category.attributes?.name}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className="px-8 pb-8">
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.attributes?.content || '' }}
              />
        </div>

            {/* Footer */}
            <footer className="px-8 py-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <a
                  href="/blog"
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
                >
                  ← Back to Blog
                </a>
                
                <div className="text-sm text-gray-500">
                  <time dateTime={article.attributes?.publishedAt}>
                    Published {article.attributes?.publishedAt ? new Date(article.attributes.publishedAt).toLocaleDateString() : ''}
                  </time>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </div>
    </>
  );
} 