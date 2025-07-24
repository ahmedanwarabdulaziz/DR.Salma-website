import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://drsalma.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/hormonal-health`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  // Try to get blog posts, but don't fail if Firebase is not available
  let blogPages: MetadataRoute.Sitemap = [];
  
  try {
    // Dynamic import to avoid Firebase being processed during metadata generation
    const { getAllBlogPostsSimple } = await import('@/lib/firebase-blog');
    const posts = await getAllBlogPostsSimple();
    
    blogPages = posts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: post.updatedAt?.toDate?.() || post.createdAt?.toDate?.() || new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.warn('Could not fetch blog posts for sitemap:', error);
    // Continue without blog posts if Firebase is not available
  }

  return [...staticPages, ...blogPages];
} 