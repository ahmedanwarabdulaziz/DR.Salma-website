import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Add Articles - Dr. Salma',
  description: 'Instructions for adding articles to the blog',
};

export default function AddArticlesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 font-heading">
            Adding Articles to the Blog
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 font-heading">
              How to Add Articles
            </h2>
            
            <p className="text-gray-700 mb-6 font-body">
              Since the API doesn't allow direct article creation, you can add articles manually through the Strapi admin interface.
            </p>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 font-heading">
                Step-by-Step Instructions:
              </h3>
              
              <ol className="list-decimal list-inside space-y-3 text-gray-700 font-body">
                <li>
                  <strong>Access Strapi Admin:</strong> Go to{' '}
                  <a href="http://localhost:1337/admin" target="_blank" rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-700 underline">
                    http://localhost:1337/admin
                  </a>
                </li>
                
                <li>
                  <strong>Login:</strong> Use your admin credentials to log in
                </li>
                
                <li>
                  <strong>Navigate to Articles:</strong> In the left sidebar, click on "Content Manager" → "Article"
                </li>
                
                <li>
                  <strong>Create New Article:</strong> Click the "Create new entry" button
                </li>
                
                <li>
                  <strong>Fill in the Details:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li><strong>Title:</strong> Enter the article title</li>
                    <li><strong>Slug:</strong> Enter a URL-friendly slug (e.g., "hormonal-balance-guide")</li>
                    <li><strong>Excerpt:</strong> Write a brief summary of the article</li>
                    <li><strong>Content:</strong> Write the full article content (supports markdown)</li>
                    <li><strong>Reading Time:</strong> Enter estimated reading time in minutes</li>
                    <li><strong>Featured Image:</strong> Upload an image for the article</li>
                    <li><strong>Category:</strong> Select or create a category</li>
                    <li><strong>Tags:</strong> Add relevant tags</li>
                    <li><strong>Author:</strong> Select or create an author</li>
                  </ul>
                </li>
                
                <li>
                  <strong>Publish:</strong> Click "Save" and then "Publish" to make the article live
                </li>
              </ol>
            </div>
            
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-green-900 mb-4 font-heading">
                Test the Article Page
              </h3>
              
              <p className="text-gray-700 mb-4 font-body">
                Once you've added an article, you can test the professional layout by visiting:
              </p>
              
              <div className="bg-white border border-green-300 rounded-lg p-4">
                <code className="text-green-800 font-mono">
                  http://localhost:3000/blog/test-article
                </code>
              </div>
              
              <p className="text-sm text-gray-600 mt-2 font-body">
                This will show you how the article page looks with the professional layout, even if no real articles exist yet.
              </p>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-4 font-heading">
                Professional Features Included:
              </h3>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700 font-body">
                <li><strong>Hero Section:</strong> Full-height featured image with overlay text</li>
                <li><strong>Professional Typography:</strong> Custom fonts (Playfair Display, Source Sans Pro)</li>
                <li><strong>Enhanced Content:</strong> Better spacing, typography, and readability</li>
                <li><strong>Share Buttons:</strong> Social media sharing options</li>
                <li><strong>Related Articles:</strong> Professional card layout for related content</li>
                <li><strong>Responsive Design:</strong> Works perfectly on all devices</li>
                <li><strong>Brand Colors:</strong> Consistent pink and green color scheme</li>
                <li><strong>Smooth Animations:</strong> Professional hover effects and transitions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/blog"
              className="inline-flex items-center justify-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors font-medium font-body"
            >
              View Blog
            </Link>
            
            <Link 
              href="/blog/test-article"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium font-body"
            >
              Test Article Layout
            </Link>
            
            <a 
              href="http://localhost:1337/admin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors font-medium font-body"
            >
              Open Strapi Admin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 