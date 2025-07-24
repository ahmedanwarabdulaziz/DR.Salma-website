const { execSync } = require('child_process');

const firebaseConfig = {
  apiKey: "AIzaSyCjsIS5LrGEMO6DyZt5nVUFWxC2I_a4sKQ",
  authDomain: "salmablog-21af3.firebaseapp.com",
  projectId: "salmablog-21af3",
  storageBucket: "salmablog-21af3.firebasestorage.app",
  messagingSenderId: "113616494697",
  appId: "1:113616494697:web:f50a9f764dd3fc186d42f8"
};

const envVars = [
  { name: 'NEXT_PUBLIC_FIREBASE_API_KEY', value: firebaseConfig.apiKey },
  { name: 'NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN', value: firebaseConfig.authDomain },
  { name: 'NEXT_PUBLIC_FIREBASE_PROJECT_ID', value: firebaseConfig.projectId },
  { name: 'NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET', value: firebaseConfig.storageBucket },
  { name: 'NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID', value: firebaseConfig.messagingSenderId },
  { name: 'NEXT_PUBLIC_FIREBASE_APP_ID', value: firebaseConfig.appId }
];

console.log('🚀 Adding Firebase environment variables to Vercel...\n');

envVars.forEach(({ name, value }) => {
  try {
    console.log(`Adding ${name}...`);
    execSync(`vercel env add ${name} production`, { 
      input: value + '\n',
      stdio: ['pipe', 'pipe', 'pipe']
    });
    console.log(`✅ ${name} added successfully!`);
  } catch (error) {
    console.log(`⚠️  ${name} might already exist or there was an error`);
  }
});

console.log('\n🎉 Environment variables setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Deploy to production: vercel --prod');
console.log('2. Your live site will now connect to Firebase!'); 