module.exports = {
  onPreBuild: async ({ utils }) => {
    console.log('Checking for public directory and index.html...');
    const fs = require('fs');
    const path = require('path');
    
    // Check if public directory exists
    if (!fs.existsSync('public')) {
      console.error('Public directory not found!');
      utils.build.failBuild('Public directory not found');
      return;
    }
    
    // Check if index.html exists in public directory
    if (!fs.existsSync(path.join('public', 'index.html'))) {
      console.error('index.html not found in public directory!');
      utils.build.failBuild('index.html not found in public directory');
      return;
    }
    
    console.log('Public directory and index.html verified successfully!');
  }
};