import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

// Only initialize Firebase if we're in the browser or if all environment variables are available
const shouldInitializeFirebase = () => {
  if (typeof window === 'undefined') {
    // Server-side: only initialize if all env vars are present
    return process.env.NEXT_PUBLIC_FIREBASE_API_KEY &&
           process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN &&
           process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID &&
           process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET &&
           process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID &&
           process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
  }
  return true; // Client-side: always initialize
};

let app: any = null;
let db: any = null;
let storage: any = null;
let auth: any = null;

if (shouldInitializeFirebase()) {
  const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
  };

  try {
    // Initialize Firebase
    app = initializeApp(firebaseConfig);

    // Initialize Firebase services
    db = getFirestore(app);
    storage = getStorage(app);
    auth = getAuth(app);
  } catch (error) {
    console.warn('Firebase initialization failed:', error);
  }
}

export { db, storage, auth };
export default app; 