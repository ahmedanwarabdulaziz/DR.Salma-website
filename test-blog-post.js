const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyCjsIS5LrGEMO6DyZt5nVUFWxC2I_a4sKQ",
  authDomain: "salmablog-21af3.firebaseapp.com",
  projectId: "salmablog-21af3",
  storageBucket: "salmablog-21af3.firebasestorage.app",
  messagingSenderId: "113616494697",
  appId: "1:113616494697:web:f50a9f764dd3fc186d42f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function testBlogPosts() {
  try {
    console.log('🔍 Checking for blog posts in Firebase...');
    
    const querySnapshot = await getDocs(collection(db, 'blog-posts'));
    
    if (querySnapshot.empty) {
      console.log('❌ No blog posts found in Firebase');
      console.log('\n📋 To fix this:');
      console.log('1. Go to: http://localhost:3000/admin');
      console.log('2. Create a new blog post');
      console.log('3. Make sure "Publish immediately" is checked');
    } else {
      console.log(`✅ Found ${querySnapshot.size} blog post(s):`);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(`- ${data.title} (Published: ${data.published})`);
      });
    }
  } catch (error) {
    console.error('❌ Error checking blog posts:', error);
  }
}

testBlogPosts(); 