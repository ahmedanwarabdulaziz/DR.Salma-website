import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Dr. Salma | Women\'s Health & Natural Medicine',
  description: 'Expert insights on women\'s health, hormonal balance, PCOS, thyroid health, and natural remedies from Dr. Salma Elhamadan.',
  keywords: ['women health', 'hormonal balance', 'PCOS', 'natural medicine', 'thyroid health', 'wellness'],
  openGraph: {
    title: 'Dr. Salma\'s Blog - Women\'s Health & Natural Medicine',
    description: 'Expert insights on women\'s health, hormonal balance, PCOS, thyroid health, and natural remedies.',
    type: 'website',
    url: 'https://drsalma.com/blog',
    siteName: 'Dr. Salma - Women\'s Health',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Salma\'s Blog - Women\'s Health & Natural Medicine',
    description: 'Expert insights on women\'s health, hormonal balance, PCOS, thyroid health, and natural remedies.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

async function getArticles() {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    const response = await fetch(`${strapiUrl}/api/articles?populate=*&sort=publishedAt:desc`, {
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export default async function BlogPage() {
  const articles = await getArticles();

  // Generate structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Dr. Salma\'s Blog',
    description: 'Expert insights on women\'s health, hormonal balance, PCOS, thyroid health, and natural remedies.',
    url: 'https://drsalma.com/blog',
    author: {
      '@type': 'Person',
      name: 'Dr. Salma Elhamadan',
      jobTitle: 'Naturopathic Doctor',
      description: 'Women\'s Health Specialist',
    },
    blogPost: articles.map((article: any) => ({
      '@type': 'BlogPosting',
      headline: article.attributes?.title || '',
      description: article.attributes?.excerpt || '',
      author: {
        '@type': 'Person',
        name: article.attributes?.author?.data?.attributes?.name || 'Dr. Salma Elhamadan',
      },
      datePublished: article.attributes?.publishedAt || '',
      dateModified: article.attributes?.updatedAt || '',
      url: `https://drsalma.com/blog/${article.attributes?.slug || ''}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://drsalma.com/blog/${article.attributes?.slug || ''}`,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Dr. Salma's Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on women's health, hormonal balance, PCOS, thyroid health, and natural remedies.
            </p>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article: any) => (
                <article key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  {article.attributes?.mainImage?.data?.attributes?.url && (
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${article.attributes.mainImage.data.attributes.url}`}
                        alt={article.attributes.mainImage.data.attributes.alternativeText || article.attributes.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
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
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      <a 
                        href={`/blog/${article.attributes?.slug}`}
                        className="hover:text-pink-600 transition-colors"
                      >
                        {article.attributes?.title}
                      </a>
                    </h2>
                    <p className="text-gray-600 mb-4">{article.attributes?.excerpt}</p>
                    {article.attributes?.categories?.data && article.attributes.categories.data.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
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
                    <a
                      href={`/blog/${article.attributes?.slug}`}
                      className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
                      aria-label={`Read full article: ${article.attributes?.title}`}
                    >
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No blog posts yet
              </h3>
              <p className="text-gray-600 mb-4">
                Blog posts will appear here once they're published in Strapi.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
                <h4 className="font-medium text-blue-900 mb-2">Next Steps:</h4>
                <ol className="text-sm text-blue-800 space-y-1">
                  <li>1. Start Strapi: <code className="bg-blue-100 px-1 rounded">cd strapi-blog && npm run develop</code></li>
                  <li>2. Create admin account at <a href="http://localhost:1337/admin" className="underline">http://localhost:1337/admin</a></li>
                  <li>3. Add articles in Strapi admin panel</li>
                  <li>4. Deploy to Vercel for production</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
} 