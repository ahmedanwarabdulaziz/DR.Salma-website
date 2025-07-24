const fs = require('fs');
const path = require('path');

const backupsDir = path.join(__dirname, '..', 'backups');

console.log('📋 Available Backups:\n');

try {
  if (!fs.existsSync(backupsDir)) {
    console.log('❌ No backups directory found.');
    console.log('💡 Run "npm run backup" to create your first backup.');
    process.exit(0);
  }

  const backups = fs.readdirSync(backupsDir)
    .filter(item => fs.statSync(path.join(backupsDir, item)).isDirectory())
    .sort((a, b) => {
      const statA = fs.statSync(path.join(backupsDir, a));
      const statB = fs.statSync(path.join(backupsDir, b));
      return statB.mtime - statA.mtime; // Sort by newest first
    });

  if (backups.length === 0) {
    console.log('❌ No backups found.');
    console.log('💡 Run "npm run backup" to create your first backup.');
    process.exit(0);
  }

  backups.forEach((backup, index) => {
    const backupPath = path.join(backupsDir, backup);
    const stat = fs.statSync(backupPath);
    const manifestPath = path.join(backupPath, 'BACKUP_MANIFEST.json');
    
    let manifest = null;
    if (fs.existsSync(manifestPath)) {
      try {
        manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
      } catch (e) {
        // Manifest file corrupted or invalid
      }
    }

    const size = getDirectorySize(backupPath);
    const date = stat.mtime.toLocaleString();
    
    console.log(`${index + 1}. 📁 ${backup}`);
    console.log(`   📅 Created: ${date}`);
    console.log(`   📊 Size: ${formatBytes(size)}`);
    
    if (manifest) {
      console.log(`   📝 Items: ${manifest.items.length} files/folders`);
      console.log(`   ⏰ Timestamp: ${manifest.timestamp}`);
    }
    
    console.log('');
  });

  console.log(`📊 Total backups: ${backups.length}`);
  console.log('\n💡 To restore a backup, run: npm run backup:restore');

} catch (error) {
  console.error('❌ Error listing backups:', error.message);
  process.exit(1);
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