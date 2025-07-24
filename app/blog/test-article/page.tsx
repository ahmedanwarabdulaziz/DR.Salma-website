import { Metadata } from 'next';
import ArticleHeader from '@/components/blog/ArticleHeader';
import ArticleContent from '@/components/blog/ArticleContent';
import RelatedArticles from '@/components/blog/RelatedArticles';

export const metadata: Metadata = {
  title: 'Test Article - Dr. Salma',
  description: 'A test article to verify the layout',
};

// Mock article data for testing
const mockArticle = {
  id: 1,
  attributes: {
    title: "Understanding Hormonal Balance: A Complete Guide",
    slug: "test-article",
    excerpt: "Learn about the importance of hormonal balance and how it affects your overall health and well-being. This comprehensive guide covers everything you need to know about maintaining hormonal health naturally.",
    content: "Hormonal balance is crucial for women's health. Our hormones regulate everything from our mood to our metabolism. When hormones are out of balance, it can lead to a variety of symptoms including fatigue, weight gain, mood swings, and irregular periods.\n\nIn this comprehensive guide, we'll explore the key hormones that affect women's health, common signs of hormonal imbalance, and natural approaches to restoring balance.\n\n## Key Hormones for Women's Health\n\n- **Estrogen**: Regulates menstrual cycle and reproductive health\n- **Progesterone**: Supports pregnancy and menstrual cycle\n- **Testosterone**: Affects energy, libido, and muscle mass\n- **Cortisol**: Stress hormone that affects metabolism\n- **Thyroid hormones**: Regulate metabolism and energy levels\n\n## Signs of Hormonal Imbalance\n\nCommon symptoms include:\n- Irregular periods\n- Fatigue and low energy\n- Weight gain or difficulty losing weight\n- Mood swings and irritability\n- Sleep disturbances\n- Low libido\n- Hair loss or thinning\n\n## Natural Approaches to Balance\n\n1. **Nutrition**: Focus on whole foods, healthy fats, and adequate protein\n2. **Stress Management**: Practice meditation, yoga, or deep breathing\n3. **Sleep**: Prioritize 7-9 hours of quality sleep\n4. **Exercise**: Regular physical activity helps regulate hormones\n5. **Supplements**: Consider vitamin D, magnesium, and omega-3s\n\n## Conclusion\n\nMaintaining hormonal balance is essential for overall health and well-being. By understanding the key hormones and implementing natural approaches, you can support your body's natural rhythms and improve your quality of life.",
    featuredImage: {
      data: {
        attributes: {
          url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
          alternativeText: "Hormonal balance illustration",
          caption: "Understanding hormonal balance is key to women's health"
        }
      }
    },
    publishedAt: "2024-01-15T10:00:00.000Z",
    readingTime: 8,
    author: {
      data: {
        attributes: {
          name: "Dr. Salma",
          bio: "Medical Naturopath specializing in women's health"
        }
      }
    },
    category: {
      data: {
        attributes: {
          name: "Hormonal Health",
          color: "#e40056"
        }
      }
    },
    tags: {
      data: [
        {
          id: 1,
          attributes: {
            name: "Hormones",
            color: "#e40056"
          }
        },
        {
          id: 2,
          attributes: {
            name: "Women's Health",
            color: "#10b981"
          }
        },
        {
          id: 3,
          attributes: {
            name: "Natural Medicine",
            color: "#8b5cf6"
          }
        }
      ]
    }
  }
};

const mockRelatedArticles = [
  {
    id: 2,
    attributes: {
      title: "PCOS Management: Natural Solutions That Work",
      slug: "pcos-natural-solutions",
      excerpt: "Discover effective natural approaches to managing PCOS symptoms and improving your quality of life.",
      featuredImage: {
        data: {
          attributes: {
            url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop"
          }
        }
      },
      publishedAt: "2024-01-14T10:00:00.000Z",
      readingTime: 10,
      category: {
        data: {
          attributes: {
            name: "PCOS",
            color: "#10b981"
          }
        }
      }
    }
  },
  {
    id: 3,
    attributes: {
      title: "Thyroid Health: The Foundation of Women's Wellness",
      slug: "thyroid-health-womens-wellness",
      excerpt: "Learn how thyroid function impacts every aspect of women's health and discover natural ways to support thyroid function.",
      featuredImage: {
        data: {
          attributes: {
            url: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
          }
        }
      },
      publishedAt: "2024-01-13T10:00:00.000Z",
      readingTime: 12,
      category: {
        data: {
          attributes: {
            name: "Thyroid Health",
            color: "#8b5cf6"
          }
        }
      }
    }
  }
];

export default function TestArticlePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Professional Article Layout */}
      <div className="relative">
        {/* Article Header with Hero Section */}
        <ArticleHeader article={mockArticle} />
        
        {/* Main Content Area */}
        <div className="relative z-10">
          {/* Article Content */}
          <ArticleContent article={mockArticle} />
          
          {/* Related Articles Section */}
          <div className="bg-gradient-to-b from-transparent to-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4">
              <RelatedArticles articles={mockRelatedArticles} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 