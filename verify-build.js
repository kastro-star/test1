const fs = require('fs');
const path = require('path');

console.log('Verifying build process...');

// Check if public directory exists
if (!fs.existsSync('public')) {
  console.error('Error: Public directory not found!');
  process.exit(1);
}

// Check if index.html exists in public directory
if (!fs.existsSync(path.join('public', 'index.html'))) {
  console.error('Error: index.html not found in public directory!');
  process.exit(1);
}

console.log('Public directory and index.html verified successfully!');

// Check if build directory exists after build
if (process.argv.includes('--after-build') && !fs.existsSync('build')) {
  console.error('Error: Build directory not found after build!');
  process.exit(1);
}

// Check if index.html exists in build directory after build
if (process.argv.includes('--after-build') && !fs.existsSync(path.join('build', 'index.html'))) {
  console.error('Error: index.html not found in build directory after build!');
  process.exit(1);
}

if (process.argv.includes('--after-build')) {
  console.log('Build directory and index.html verified successfully!');
}

console.log('Verification completed successfully!');