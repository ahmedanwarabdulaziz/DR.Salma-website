import { getBlogPosts } from '@/lib/blog';

export default async function TestBlogPage() {
  console.log('🧪 Test blog page loading...');
  
  try {
    const posts = await getBlogPosts();
    console.log('🧪 Test results:', posts);
    
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog Test Page</h1>
          
          <div className="bg-white rounded-lg p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
            <p><strong>Total Posts Found:</strong> {posts.length}</p>
            <p><strong>Timestamp:</strong> {new Date().toISOString()}</p>
          </div>
          
          {posts.length > 0 ? (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Posts Found:</h2>
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-lg p-4 border">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-gray-600">ID: {post.id}</p>
                  <p className="text-sm text-gray-600">Published: {post.published ? 'Yes' : 'No'}</p>
                  <p className="text-sm text-gray-600">Slug: {post.slug}</p>
                  <p className="text-sm text-gray-600">Created: {post.createdAt ? new Date(post.createdAt.toDate?.() || post.createdAt).toISOString() : 'N/A'}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-100 border border-yellow-400 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-yellow-800">No Posts Found</h2>
              <p className="text-yellow-700">No published posts were found in the database.</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('🧪 Test page error:', error);
    
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Blog Test Page - ERROR</h1>
          
          <div className="bg-red-100 border border-red-400 rounded-lg p-4">
            <h2 className="text-xl font-semibold text-red-800">Error Occurred</h2>
            <p className="text-red-700">Error: {error instanceof Error ? error.message : String(error)}</p>
          </div>
        </div>
      </div>
    );
  }
} 