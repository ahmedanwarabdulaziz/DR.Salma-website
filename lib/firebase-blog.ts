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
  limit,
  serverTimestamp 
} from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Dynamic import to avoid Firebase being processed during build
let db: any = null;
let storage: any = null;

const getFirebaseServices = async () => {
  if (!db || !storage) {
    try {
      const firebase = await import('./firebase');
      db = firebase.db;
      storage = firebase.storage;
    } catch (error) {
      console.warn('Firebase services not available:', error);
      return { db: null, storage: null };
    }
  }
  return { db, storage };
};

export interface BlogPost {
  id?: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  featuredImage?: string;
  tags: string[];
  seoTitle?: string;
  seoDescription?: string;
  published: boolean;
  createdAt?: any;
  updatedAt?: any;
}

// Create a new blog post
export async function createBlogPost(postData: Omit<BlogPost, 'id' | 'createdAt' | 'updatedAt'>): Promise<string> {
  try {
    const { db } = await getFirebaseServices();
    if (!db) {
      throw new Error('Firebase not available');
    }

    const docRef = await addDoc(collection(db, 'blog-posts'), {
      ...postData,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    
    return docRef.id;
  } catch (error) {
    console.error('Error creating blog post:', error);
    throw error;
  }
}

// Get all blog posts (simplest version - no queries, no indexes needed)
export async function getAllBlogPostsSimple(): Promise<BlogPost[]> {
  try {
    const { db } = await getFirebaseServices();
    if (!db) {
      console.warn('Firebase not available, returning empty array');
      return [];
    }

    console.log('Fetching blog posts...');
    const querySnapshot = await getDocs(collection(db, 'blog-posts'));

    if (querySnapshot.empty) {
      console.log('No blog posts found');
      return [];
    }

    const allPosts = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as BlogPost[];

    console.log(`Found ${allPosts.length} total posts`);

    // Filter published posts and sort by date
    const publishedPosts = allPosts
      .filter(post => post.published === true)
      .sort((a, b) => {
        const dateA = a.createdAt?.toDate?.() || a.createdAt || new Date(0);
        const dateB = b.createdAt?.toDate?.() || b.createdAt || new Date(0);
        return new Date(dateB).getTime() - new Date(dateA).getTime();
      });

    console.log(`Found ${publishedPosts.length} published posts`);
    return publishedPosts;
  } catch (error) {
    console.error('Error getting blog posts:', error);
    return [];
  }
}

// Get all blog posts for admin (including unpublished)
export async function getAllBlogPostsAdmin(): Promise<BlogPost[]> {
  try {
    const { db } = await getFirebaseServices();
    if (!db) {
      console.warn('Firebase not available, returning empty array');
      return [];
    }

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

// Get a single blog post by slug
export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const { db } = await getFirebaseServices();
    if (!db) {
      console.warn('Firebase not available');
      return null;
    }

    const q = query(collection(db, 'blog-posts'), where('slug', '==', slug));
    const querySnapshot = await getDocs(q);
    
    if (querySnapshot.empty) {
      return null;
    }
    
    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data()
    } as BlogPost;
  } catch (error) {
    console.error('Error getting blog post by slug:', error);
    return null;
  }
}

// Update a blog post
export async function updateBlogPost(id: string, updates: Partial<BlogPost>): Promise<void> {
  try {
    const { db } = await getFirebaseServices();
    if (!db) {
      throw new Error('Firebase not available');
    }

    const docRef = doc(db, 'blog-posts', id);
    await updateDoc(docRef, {
      ...updates,
      updatedAt: serverTimestamp(),
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    throw error;
  }
}

// Delete a blog post
export async function deleteBlogPost(id: string): Promise<void> {
  try {
    const { db } = await getFirebaseServices();
    if (!db) {
      throw new Error('Firebase not available');
    }

    const docRef = doc(db, 'blog-posts', id);
    await deleteDoc(docRef);
  } catch (error) {
    console.error('Error deleting blog post:', error);
    throw error;
  }
}

// Generate a unique slug
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Upload image to Firebase Storage
export async function uploadImage(file: File): Promise<string> {
  try {
    const { storage } = await getFirebaseServices();
    if (!storage) {
      throw new Error('Firebase Storage not available');
    }

    const storageRef = ref(storage, `blog-images/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    // Return a placeholder image if upload fails
    return 'https://via.placeholder.com/800x400/4F46E5/FFFFFF?text=Blog+Image';
  }
} 