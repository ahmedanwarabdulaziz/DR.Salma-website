import { createClient } from 'contentful'

const client = createClient({
  space: '2m3g7bxde8j2',
  accessToken: 'G4T3uMpp0fF4CUA5T0fWEPbuB4f-DApJUIgxY77JH7E',
})

export interface BlogPost {
  sys: {
    id: string
    createdAt: string
    updatedAt: string
  }
  fields: {
    title: string
    slug: string
    content: any
    excerpt?: string
    featuredImage?: {
      fields: {
        file: {
          url: string
        }
      }
    }
    author?: {
      fields: {
        name: string
        bio?: string
        avatar?: {
          fields: {
            file: {
              url: string
            }
          }
        }
        credentials?: string
      }
    }
    categories?: Array<{
      fields: {
        name: string
        slug: string
        description?: string
        color?: string
      }
    }>
    tags?: string[]
    seoTitle?: string
    seoDescription?: string
    publicationDate?: string
    readingTime?: number
  }
}

export interface Author {
  sys: {
    id: string
  }
  fields: {
    name: string
    bio?: string
    avatar?: {
      fields: {
        file: {
          url: string
        }
      }
    }
    credentials?: string
    socialLinks?: {
      instagram?: string
      linkedin?: string
    }
  }
}

export interface Category {
  sys: {
    id: string
  }
  fields: {
    name: string
    slug: string
    description?: string
    color?: string
    icon?: string
  }
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      order: '-sys.createdAt',
      include: 2, // Include referenced entries (author, categories)
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      include: 2,
      limit: 1,
    })
    
    return response.items[0] as BlogPost || null
  } catch (error) {
    console.error('Error fetching blog post:', error)
    return null
  }
}

export async function getAuthors(): Promise<Author[]> {
  try {
    const response = await client.getEntries({
      content_type: 'author',
      include: 2,
    })
    
    return response.items as Author[]
  } catch (error) {
    console.error('Error fetching authors:', error)
    return []
  }
}

export async function getCategories(): Promise<Category[]> {
  try {
    const response = await client.getEntries({
      content_type: 'category',
      include: 2,
    })
    
    return response.items as Category[]
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}

export async function getBlogPostsByCategory(categorySlug: string): Promise<BlogPost[]> {
  try {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.categories.sys.contentType.sys.id': 'category',
      'fields.categories.fields.slug': categorySlug,
      order: '-sys.createdAt',
      include: 2,
    })
    
    return response.items as BlogPost[]
  } catch (error) {
    console.error('Error fetching blog posts by category:', error)
    return []
  }
}
