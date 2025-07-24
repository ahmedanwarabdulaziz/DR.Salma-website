import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  getDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featuredImage?: string;
  tags: string[];
  published: boolean;
  createdAt?: any;
  updatedAt?: any;
}

// Get all published blog posts (simplified version)
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Get all posts first, then filter client-side to avoid index issues
    const querySnapshot = await getDocs(collection(db, 'blog-posts'));
    
    const allPosts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];

    // Filter published posts and sort by date
    const publishedPosts = allPosts
      .filter(post => post.published === true)
      .sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() || a.createdAt || new Date(0);
        const dateB = b.createdAt?.toDate?.() || b.createdAt || new Date(0);
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });

    console.log(`Found ${publishedPosts.length} published posts out of ${allPosts.length} total`);
    return publishedPosts;
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

// Get all blog posts for admin
export async function getAdminBlogPosts(): Promise<BlogPost[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'blog-posts'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];
  } catch (error) {
    console.error('Error getting admin blog posts:', error);
    return [];
  }
}

// Get single blog post by slug
export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const querySnapshot = await getDocs(collection(db, 'blog-posts'));
    
    for (const doc of querySnapshot.docs) {
      const post = { id: doc.id, ...doc.data() } as BlogPost;
      if (post.slug === slug && post.published === true) {
        return post;
      }
    }
    
    return null;
  } catch (error) {
    console.error('Error getting blog post:', error);
    return null;
  }
}

// Create new blog post
export async function createBlogPost(post: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const docRef = await addDoc(collection(db, 'blog-posts'), {
      ...post,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

// Update blog post
export async function updateBlogPost(id: string, post: Partial<BlogPost>): Promise<void> {
  try {
    const docRef = doc(db, 'blog-posts', id);
    await updateDoc(docRef, {
      ...post,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
}

// Delete blog post
export async function deleteBlogPost(id: string): Promise<void> {
  try {
    const docRef = doc(db, 'blog-posts', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}

// Upload image
export async function uploadImage(file: File): Promise<string> {
  try {
    const storageRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    return 'https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Blog+Image';
  }
}

// Generate slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
} 