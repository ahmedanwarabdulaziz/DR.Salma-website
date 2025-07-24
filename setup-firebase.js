const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc, serverTimestamp } = require('firebase/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');

const firebaseConfig = {
  apiKey: "AIzaSyCjsIS5LrGEMO6DyZt5nVUFWxC2I_a4sKQ",
  authDomain: "salmablog-21af3.firebaseapp.com",
  projectId: "salmablog-21af3",
  storageBucket: "salmablog-21af3.firebasestorage.app",
  messagingSenderId: "113616494697",
  appId: "1:113616494697:web:f50a9f764dd3fc186d42f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

async function testFirebaseConnection() {
  console.log('🧪 Testing Firebase connection...');
  
  try {
    // Test Firestore
    console.log('📝 Testing Firestore...');
    const testDoc = await addDoc(collection(db, 'blog-posts'), {
      title: 'Test Post',
      excerpt: 'This is a test post',
      content: 'Test content',
      author: 'Dr. Salma',
      tags: ['test'],
      slug: 'test-post',
      published: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
    console.log('✅ Firestore test successful! Document ID:', testDoc.id);
    
    // Test Storage
    console.log('📁 Testing Storage...');
    const testFile = new File(['test content'], 'test.txt', { type: 'text/plain' });
    const storageRef = ref(storage, `blog-images/test-${Date.now()}.txt`);
    const snapshot = await uploadBytes(storageRef, testFile);
    const downloadURL = await getDownloadURL(snapshot.ref);
    console.log('✅ Storage test successful! URL:', downloadURL);
    
    console.log('\n🎉 All Firebase services are working correctly!');
    console.log('\n📋 Next steps:');
    console.log('1. Go to Firebase Console: https://console.firebase.google.com/');
    console.log('2. Select your project: salmablog-21af3');
    console.log('3. Enable Firestore Database (if not already enabled)');
    console.log('4. Enable Storage (if not already enabled)');
    console.log('5. Set up security rules (see QUICK_FIREBASE_SETUP.md)');
    
  } catch (error) {
    console.error('❌ Firebase test failed:', error);
    console.log('\n🔧 To fix this:');
    console.log('1. Go to Firebase Console: https://console.firebase.google.com/');
    console.log('2. Select your project: salmablog-21af3');
    console.log('3. Enable Firestore Database');
    console.log('4. Enable Storage');
    console.log('5. Set security rules to allow read/write (see QUICK_FIREBASE_SETUP.md)');
  }
}

testFirebaseConnection(); 