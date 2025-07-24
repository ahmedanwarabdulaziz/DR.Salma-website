import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'API Test - Dr. Salma',
  description: 'Testing API response structure',
};

async function testAPI() {
  try {
    const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
    console.log('Testing API at:', strapiUrl);
    
    const res = await fetch(`${strapiUrl}/api/articles?populate=*&sort=publishedAt:desc`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    console.log('Response status:', res.status);
    console.log('Response ok:', res.ok);
    
    if (!res.ok) {
      console.error('API response not ok:', res.status, res.statusText);
      return { error: `HTTP ${res.status}: ${res.statusText}` };
    }
    
    const data = await res.json();
    console.log('API response:', JSON.stringify(data, null, 2));
    
    return { data, error: null };
  } catch (error) {
    console.error('Error testing API:', error);
    return { 
      data: null, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

export default async function TestAPIPage() {
  const { data, error } = await testAPI();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">API Test Results</h1>
        
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
            <h2 className="text-red-800 font-semibold mb-2">Error:</h2>
            <p className="text-red-700">{error}</p>
          </div>
        )}
        
        {data && (
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">API Response:</h2>
            <pre className="bg-gray-100 p-4 rounded text-sm overflow-auto max-h-96">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
} 