import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCjsIS5LrGEMO6DyZt5nVUFWxC2I_a4sKQ",
  authDomain: "salmablog-21af3.firebaseapp.com",
  projectId: "salmablog-21af3",
  storageBucket: "salmablog-21af3.firebasestorage.app",
  messagingSenderId: "113616494697",
  appId: "1:113616494697:web:f50a9f764dd3fc186d42f8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app); 