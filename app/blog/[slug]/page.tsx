import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost } from '@/lib/blog';

// Force dynamic rendering - no caching
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found - Dr. Salma',
      description: 'The requested blog post could not be found.',
    };
  }

  return {
    title: post.seoTitle || `${post.title} - Dr. Salma`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords?.join(', ') || post.tags.join(', '),
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.socialDescription || post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link href="/blog" className="text-white/80 hover:text-white mb-4 inline-block">
              ← Back to Blog
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center space-x-4 text-white/80">
              <span>By {post.author}</span>
              <span>•</span>
              <time>{post.createdAt ? new Date(post.createdAt.toDate?.() || post.createdAt).toLocaleDateString() : 'N/A'}</time>
              {post.readingTime && (
                <>
                  <span>•</span>
                  <span>{post.readingTime} min read</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Post Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            {post.featuredImage && (
              <div className="relative h-96">
                <Image
                  src={post.featuredImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-8">
              <div className="flex items-center space-x-2 mb-6">
                {post.category && (
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {post.category.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                )}
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
                {post.featured && (
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              {post.allowComments && (
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-lg font-semibold mb-4">Comments</h3>
                  <p className="text-gray-600">Comments feature coming soon!</p>
                </div>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 