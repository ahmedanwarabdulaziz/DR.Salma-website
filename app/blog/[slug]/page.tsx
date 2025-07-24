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
    title: `${post.title} - Dr. Salma`,
    description: post.excerpt,
    keywords: post.tags.join(', '),
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
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
} 