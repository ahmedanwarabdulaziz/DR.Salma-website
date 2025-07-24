const sampleArticles = [
  {
    title: "Understanding Hormonal Balance: A Complete Guide",
    slug: "hormonal-balance-guide",
    excerpt: "Learn about the importance of hormonal balance and how it affects your overall health and well-being.",
    content: "Hormonal balance is crucial for women's health. Our hormones regulate everything from our mood to our metabolism. When hormones are out of balance, it can lead to a variety of symptoms including fatigue, weight gain, mood swings, and irregular periods.\n\nIn this comprehensive guide, we'll explore the key hormones that affect women's health, common signs of hormonal imbalance, and natural approaches to restoring balance.\n\n## Key Hormones for Women's Health\n\n- **Estrogen**: Regulates menstrual cycle and reproductive health\n- **Progesterone**: Supports pregnancy and menstrual cycle\n- **Testosterone**: Affects energy, libido, and muscle mass\n- **Cortisol**: Stress hormone that affects metabolism\n- **Thyroid hormones**: Regulate metabolism and energy levels\n\n## Signs of Hormonal Imbalance\n\nCommon symptoms include:\n- Irregular periods\n- Fatigue and low energy\n- Weight gain or difficulty losing weight\n- Mood swings and irritability\n- Sleep disturbances\n- Low libido\n- Hair loss or thinning\n\n## Natural Approaches to Balance\n\n1. **Nutrition**: Focus on whole foods, healthy fats, and adequate protein\n2. **Stress Management**: Practice meditation, yoga, or deep breathing\n3. **Sleep**: Prioritize 7-9 hours of quality sleep\n4. **Exercise**: Regular physical activity helps regulate hormones\n5. **Supplements**: Consider vitamin D, magnesium, and omega-3s",
    featuredImage: {
      name: "hormonal-balance.jpg",
      alternativeText: "Hormonal balance illustration",
      caption: "Understanding hormonal balance is key to women's health"
    },
    readingTime: 8,
    category: {
      name: "Hormonal Health",
      color: "#e40056"
    },
    tags: [
      { name: "Hormones", color: "#e40056" },
      { name: "Women's Health", color: "#10b981" },
      { name: "Natural Medicine", color: "#8b5cf6" }
    ],
    author: {
      name: "Dr. Salma",
      bio: "Medical Naturopath specializing in women's health"
    }
  },
  {
    title: "PCOS Management: Natural Solutions That Work",
    slug: "pcos-natural-solutions",
    excerpt: "Discover effective natural approaches to managing PCOS symptoms and improving your quality of life.",
    content: "Polycystic Ovary Syndrome (PCOS) affects up to 10% of women of reproductive age. This complex hormonal disorder can cause a variety of symptoms including irregular periods, weight gain, acne, and fertility issues.\n\nWhile PCOS can be challenging to manage, there are many natural approaches that can help improve symptoms and overall health.\n\n## Understanding PCOS\n\nPCOS is characterized by:\n- High levels of androgens (male hormones)\n- Insulin resistance\n- Irregular or absent menstrual cycles\n- Multiple small cysts on the ovaries\n\n## Natural Management Strategies\n\n### 1. Dietary Changes\n- Focus on low-glycemic foods\n- Increase fiber intake\n- Include healthy fats\n- Reduce processed foods and sugar\n\n### 2. Exercise\n- Regular physical activity improves insulin sensitivity\n- Both cardio and strength training are beneficial\n- Aim for 150 minutes of moderate exercise weekly\n\n### 3. Stress Management\n- Chronic stress can worsen PCOS symptoms\n- Practice mindfulness and meditation\n- Consider yoga or tai chi\n\n### 4. Supplements\n- Inositol: Helps with insulin sensitivity\n- Vitamin D: Often deficient in PCOS\n- Omega-3: Reduces inflammation\n- Magnesium: Supports hormone balance\n\n## Success Stories\n\nMany women have successfully managed their PCOS symptoms through natural approaches. The key is consistency and finding what works for your individual body.\n\nRemember, PCOS management is a journey, not a destination. Small changes can lead to significant improvements over time.",
    featuredImage: {
      name: "pcos-management.jpg",
      alternativeText: "PCOS management illustration",
      caption: "Natural approaches to PCOS management"
    },
    readingTime: 10,
    category: {
      name: "PCOS",
      color: "#10b981"
    },
    tags: [
      { name: "PCOS", color: "#10b981" },
      { name: "Fertility", color: "#e40056" },
      { name: "Natural Medicine", color: "#8b5cf6" }
    ],
    author: {
      name: "Dr. Salma",
      bio: "Medical Naturopath specializing in women's health"
    }
  },
  {
    title: "Thyroid Health: The Foundation of Women's Wellness",
    slug: "thyroid-health-womens-wellness",
    excerpt: "Learn how thyroid function impacts every aspect of women's health and discover natural ways to support thyroid function.",
    content: "The thyroid gland plays a crucial role in women's health, affecting metabolism, energy levels, mood, and reproductive health. Thyroid disorders are more common in women than men, and symptoms can be subtle and easily overlooked.\n\n## The Thyroid's Role in Women's Health\n\nThe thyroid gland produces hormones that regulate:\n- Metabolism and energy levels\n- Body temperature\n- Heart rate and blood pressure\n- Brain development and function\n- Reproductive health\n\n## Common Thyroid Disorders\n\n### Hypothyroidism (Underactive Thyroid)\nSymptoms include:\n- Fatigue and low energy\n- Weight gain\n- Cold intolerance\n- Dry skin and hair\n- Depression\n- Irregular periods\n\n### Hyperthyroidism (Overactive Thyroid)\nSymptoms include:\n- Rapid heartbeat\n- Weight loss\n- Anxiety and irritability\n- Heat intolerance\n- Insomnia\n- Irregular periods\n\n## Natural Support for Thyroid Health\n\n### 1. Nutrition\n- Ensure adequate iodine intake\n- Include selenium-rich foods\n- Eat plenty of fruits and vegetables\n- Avoid processed foods\n\n### 2. Lifestyle Factors\n- Manage stress levels\n- Get adequate sleep\n- Exercise regularly\n- Avoid environmental toxins\n\n### 3. Supplements\n- Vitamin D\n- Selenium\n- Zinc\n- Omega-3 fatty acids\n\n## When to Seek Help\n\nIf you're experiencing persistent symptoms that could be related to thyroid dysfunction, it's important to consult with a healthcare provider. Thyroid disorders are treatable, and early diagnosis leads to better outcomes.\n\nRemember, thyroid health is foundational to overall wellness. Supporting your thyroid function can improve energy, mood, and quality of life.",
    featuredImage: {
      name: "thyroid-health.jpg",
      alternativeText: "Thyroid health illustration",
      caption: "Supporting thyroid health for overall wellness"
    },
    readingTime: 12,
    category: {
      name: "Thyroid Health",
      color: "#8b5cf6"
    },
    tags: [
      { name: "Thyroid", color: "#8b5cf6" },
      { name: "Energy", color: "#e40056" },
      { name: "Metabolism", color: "#10b981" }
    ],
    author: {
      name: "Dr. Salma",
      bio: "Medical Naturopath specializing in women's health"
    }
  }
];

async function addSampleArticles() {
  const strapiUrl = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
  
  console.log('Adding sample articles to Strapi...');
  
  for (const article of sampleArticles) {
    try {
      console.log(`Adding article: ${article.title}`);
      
      const response = await fetch(`${strapiUrl}/api/articles`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            title: article.title,
            slug: article.slug,
            excerpt: article.excerpt,
            content: article.content,
            readingTime: article.readingTime,
            publishedAt: new Date().toISOString(),
            featuredImage: {
              name: article.featuredImage.name,
              alternativeText: article.featuredImage.alternativeText,
              caption: article.featuredImage.caption
            },
            category: article.category,
            tags: article.tags,
            author: article.author
          }
        })
      });
      
      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Successfully added: ${article.title}`);
        console.log('Article ID:', result.data.id);
      } else {
        console.error(`❌ Failed to add: ${article.title}`);
        console.error('Status:', response.status);
        const errorText = await response.text();
        console.error('Error:', errorText);
      }
    } catch (error) {
      console.error(`❌ Error adding article: ${article.title}`);
      console.error(error);
    }
  }
  
  console.log('Finished adding sample articles.');
}

// Run the script
addSampleArticles().catch(console.error); 