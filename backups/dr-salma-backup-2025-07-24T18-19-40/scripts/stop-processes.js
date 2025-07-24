const { execSync } = require('child_process');

console.log('🛑 Stopping running processes...\n');

try {
  // Check for running Node.js processes
  console.log('🔍 Checking for running Node.js processes...');
  
  try {
    const nodeProcesses = execSync('tasklist /FI "IMAGENAME eq node.exe" /FO CSV', { encoding: 'utf8' });
    console.log('📋 Found Node.js processes:');
    console.log(nodeProcesses);
  } catch (error) {
    console.log('ℹ️  No Node.js processes found or could not check.');
  }

  // Check for processes on port 3000 (Next.js)
  console.log('\n🔍 Checking for processes on port 3000...');
  try {
    const port3000 = execSync('netstat -ano | findstr :3000', { encoding: 'utf8' });
    if (port3000) {
      console.log('⚠️  Found processes on port 3000:');
      console.log(port3000);
      console.log('\n💡 To stop these processes:');
      console.log('   1. Press Ctrl+C in the terminal running your dev server');
      console.log('   2. Or close the terminal window running npm run dev');
    } else {
      console.log('✅ No processes found on port 3000');
    }
  } catch (error) {
    console.log('✅ No processes found on port 3000');
  }

  // Check for processes on port 1337 (Strapi)
  console.log('\n🔍 Checking for processes on port 1337...');
  try {
    const port1337 = execSync('netstat -ano | findstr :1337', { encoding: 'utf8' });
    if (port1337) {
      console.log('⚠️  Found processes on port 1337 (Strapi):');
      console.log(port1337);
      console.log('\n💡 To stop Strapi:');
      console.log('   1. Go to strapi-blog directory');
      console.log('   2. Press Ctrl+C in the terminal running Strapi');
      console.log('   3. Or close the terminal window running npm run develop');
    } else {
      console.log('✅ No processes found on port 1337');
    }
  } catch (error) {
    console.log('✅ No processes found on port 1337');
  }

  console.log('\n📋 Manual Steps to Stop Processes:');
  console.log('1. Press Ctrl+C in any terminal running your development servers');
  console.log('2. Close terminal windows running npm run dev or npm run develop');
  console.log('3. Wait a few seconds for processes to fully stop');
  console.log('4. Then run: npm run backup:restore');

} catch (error) {
  console.error('❌ Error checking processes:', error.message);
} 