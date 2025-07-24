const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get current timestamp
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const backupName = `dr-salma-backup-${timestamp}`;
const backupPath = path.join(__dirname, '..', 'backups', backupName);

// Essential files and folders to backup
const essentialItems = [
  'app',
  'components', 
  'public',
  'strapi-blog',
  'styles',
  'assets',
  'package.json',
  'package-lock.json',
  'next.config.js',
  'tailwind.config.js',
  'tsconfig.json',
  'postcss.config.js',
  'README.md',
  'scripts'
];

// Files to exclude from backup
const excludeItems = [
  'node_modules',
  '.next',
  '.git',
  'backups',
  '.env.local',
  '.env.production.local',
  '.env.development.local'
];

console.log('🚀 Creating backup...');
console.log(`📁 Backup name: ${backupName}`);

try {
  // Create backup directory
  if (!fs.existsSync(path.join(__dirname, '..', 'backups'))) {
    fs.mkdirSync(path.join(__dirname, '..', 'backups'));
  }
  
  fs.mkdirSync(backupPath, { recursive: true });
  
  // Copy essential items
  essentialItems.forEach(item => {
    const sourcePath = path.join(__dirname, '..', item);
    const destPath = path.join(backupPath, item);
    
    if (fs.existsSync(sourcePath)) {
      if (fs.statSync(sourcePath).isDirectory()) {
        // Copy directory
        copyDirectory(sourcePath, destPath);
        console.log(`✅ Copied directory: ${item}`);
      } else {
        // Copy file
        fs.copyFileSync(sourcePath, destPath);
        console.log(`✅ Copied file: ${item}`);
      }
    } else {
      console.log(`⚠️  Skipped (not found): ${item}`);
    }
  });
  
  // Create backup manifest
  const manifest = {
    backupName,
    timestamp: new Date().toISOString(),
    items: essentialItems,
    excluded: excludeItems,
    totalSize: getDirectorySize(backupPath)
  };
  
  fs.writeFileSync(
    path.join(backupPath, 'BACKUP_MANIFEST.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log('\n🎉 Backup completed successfully!');
  console.log(`📂 Location: ${backupPath}`);
  console.log(`📊 Size: ${formatBytes(manifest.totalSize)}`);
  
} catch (error) {
  console.error('❌ Backup failed:', error.message);
  process.exit(1);
}

// Helper functions
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    // Skip excluded items
    if (excludeItems.includes(item)) {
      return;
    }
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function getDirectorySize(dirPath) {
  let size = 0;
  
  function calculateSize(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    items.forEach(item => {
      const itemPath = path.join(currentPath, item);
      const stat = fs.statSync(itemPath);
      
      if (stat.isDirectory()) {
        calculateSize(itemPath);
      } else {
        size += stat.size;
      }
    });
  }
  
  calculateSize(dirPath);
  return size;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
} 