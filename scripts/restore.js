const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { execSync } = require('child_process');

const backupsDir = path.join(__dirname, '..', 'backups');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🔄 Backup Restore Tool\n');

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

  console.log('📋 Available Backups:\n');

  backups.forEach((backup, index) => {
    const backupPath = path.join(backupsDir, backup);
    const stat = fs.statSync(backupPath);
    const date = stat.mtime.toLocaleString();
    
    console.log(`${index + 1}. 📁 ${backup}`);
    console.log(`   📅 Created: ${date}`);
    console.log('');
  });

  rl.question('Select backup number to restore (or "cancel" to abort): ', (answer) => {
    if (answer.toLowerCase() === 'cancel') {
      console.log('❌ Restore cancelled.');
      rl.close();
      return;
    }

    const backupIndex = parseInt(answer) - 1;
    
    if (isNaN(backupIndex) || backupIndex < 0 || backupIndex >= backups.length) {
      console.log('❌ Invalid selection.');
      rl.close();
      return;
    }

    const selectedBackup = backups[backupIndex];
    const backupPath = path.join(backupsDir, selectedBackup);
    
    console.log(`\n🔄 Restoring from: ${selectedBackup}`);
    console.log('⚠️  This will overwrite current files. Continue? (y/N): ');
    
    rl.question('', (confirm) => {
      if (confirm.toLowerCase() !== 'y' && confirm.toLowerCase() !== 'yes') {
        console.log('❌ Restore cancelled.');
        rl.close();
        return;
      }

      // Check for running processes before restore
      checkRunningProcesses().then(() => {
        restoreBackup(backupPath);
        rl.close();
      }).catch((error) => {
        console.error('❌ Cannot proceed with restore:', error.message);
        rl.close();
      });
    });
  });

} catch (error) {
  console.error('❌ Error during restore:', error.message);
  rl.close();
  process.exit(1);
}

async function checkRunningProcesses() {
  console.log('\n🔍 Checking for running processes...');
  
  try {
    // Check if Strapi is running
    const strapiProcess = execSync('tasklist /FI "IMAGENAME eq node.exe" /FO CSV', { encoding: 'utf8' });
    if (strapiProcess.includes('strapi')) {
      throw new Error('Strapi server is running. Please stop it first with "npm run develop" in strapi-blog directory.');
    }
    
    // Check if Next.js dev server is running
    const nextProcess = execSync('netstat -ano | findstr :3000', { encoding: 'utf8' });
    if (nextProcess.includes('LISTENING')) {
      console.log('⚠️  Next.js dev server is running. Consider stopping it for a clean restore.');
      console.log('💡 You can stop it with Ctrl+C in the terminal where it\'s running.');
      
      rl.question('Continue anyway? (y/N): ', (answer) => {
        if (answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'yes') {
          throw new Error('Restore cancelled by user.');
        }
      });
    }
    
    console.log('✅ No conflicting processes detected.');
    
  } catch (error) {
    if (error.message.includes('Strapi server is running')) {
      throw error;
    }
    // If netstat fails, continue anyway
    console.log('⚠️  Could not check all processes, proceeding with caution...');
  }
}

function restoreBackup(backupPath) {
  console.log('\n🔄 Starting restore...');
  
  try {
    const projectRoot = path.join(__dirname, '..');
    
    // Get all items in backup
    const backupItems = fs.readdirSync(backupPath);
    
    backupItems.forEach(item => {
      if (item === 'BACKUP_MANIFEST.json') return; // Skip manifest
      
      const sourcePath = path.join(backupPath, item);
      const destPath = path.join(projectRoot, item);
      
      if (fs.statSync(sourcePath).isDirectory()) {
        // Handle directory restoration with retry logic
        restoreDirectory(sourcePath, destPath, item);
      } else {
        // Copy file
        try {
          fs.copyFileSync(sourcePath, destPath);
          console.log(`✅ Restored file: ${item}`);
        } catch (error) {
          console.log(`⚠️  Could not restore file ${item}: ${error.message}`);
        }
      }
    });
    
    console.log('\n🎉 Restore completed successfully!');
    console.log('💡 Next steps:');
    console.log('   1. Run "npm install" to reinstall dependencies');
    console.log('   2. Run "npm run dev" to start development server');
    console.log('   3. If you have Strapi, run "npm run develop" in strapi-blog directory');
    
  } catch (error) {
    console.error('❌ Restore failed:', error.message);
    process.exit(1);
  }
}

function restoreDirectory(sourcePath, destPath, itemName) {
  try {
    // Try to remove existing directory
    if (fs.existsSync(destPath)) {
      try {
        fs.rmSync(destPath, { recursive: true, force: true });
      } catch (error) {
        if (error.code === 'EBUSY' || error.code === 'ENOTEMPTY') {
          console.log(`⚠️  Directory ${itemName} is busy. Trying alternative approach...`);
          
          // Try to remove files individually
          removeDirectoryContents(destPath);
        } else {
          throw error;
        }
      }
    }
    
    // Copy directory
    copyDirectory(sourcePath, destPath);
    console.log(`✅ Restored directory: ${itemName}`);
    
  } catch (error) {
    console.log(`⚠️  Could not restore directory ${itemName}: ${error.message}`);
    console.log(`💡 You may need to manually copy ${itemName} from the backup.`);
  }
}

function removeDirectoryContents(dirPath) {
  if (!fs.existsSync(dirPath)) return;
  
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const itemPath = path.join(dirPath, item);
    const stat = fs.statSync(itemPath);
    
    if (stat.isDirectory()) {
      try {
        fs.rmSync(itemPath, { recursive: true, force: true });
      } catch (error) {
        // If directory is busy, try to remove contents
        removeDirectoryContents(itemPath);
      }
    } else {
      try {
        fs.unlinkSync(itemPath);
      } catch (error) {
        // File might be locked, skip it
        console.log(`⚠️  Could not remove file: ${itemPath}`);
      }
    }
  });
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      try {
        fs.copyFileSync(srcPath, destPath);
      } catch (error) {
        console.log(`⚠️  Could not copy file: ${item}`);
      }
    }
  });
} 