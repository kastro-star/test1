# Netlify Deployment Troubleshooting Guide

## Common Issues and Solutions

### Issue: "Could not find a required file. Name: index.html"

**Problem**: Netlify cannot find the `index.html` file in the publish directory during build.

**Solutions**:

1. **Verify File Existence**:
   - Ensure `index.html` exists in the `public` directory
   - Run `npm run prebuild` locally to verify

2. **Check Build Configuration**:
   - Confirm `netlify.toml` has correct settings:
     ```toml
     [build]
       command = "npm ci && npm run build"
       publish = "build"
     ```
   - The `publish` directory should match where your build outputs files (typically `build` or `dist`)

3. **Dependency Issues**:
   - Run `npm ci` instead of `npm install` for clean installs
   - Check for compatibility between React, React DOM, and other dependencies
   - Consider using Node.js v20 as specified in `netlify.toml`

4. **Build Process**:
   - Ensure the build process is completing successfully
   - Check for any errors in the build logs
   - Verify that the build process is generating the `index.html` file in the correct location

5. **Git Issues**:
   - Make sure all necessary files are committed to Git
   - Check `.gitignore` to ensure critical files aren't being excluded

## Debugging Steps

1. **Local Verification**:
   ```bash
   # Run verification script
   node verify-build.js
   
   # Build locally
   npm run build
   
   # Check build output
   node verify-build.js --after-build
   ```

2. **Manual Deployment**:
   If automatic deployment fails, try manual deployment:
   ```bash
   # Install Netlify CLI
   npm install -g netlify-cli
   
   # Login to Netlify
   netlify login
   
   # Deploy manually
   netlify deploy --prod
   ```

3. **Environment Variables**:
   - Check if any required environment variables are missing
   - Ensure environment variables are properly set in Netlify dashboard

## Custom Plugin

This project includes a custom Netlify plugin (`netlify.plugin.js`) that verifies the existence of required files before the build process starts. If the plugin detects missing files, it will fail the build with a clear error message.

## Additional Resources

- [Netlify Build Troubleshooting](https://docs.netlify.com/configure-builds/troubleshooting-tips/)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/#netlify)
- [Netlify Community Forum](https://answers.netlify.com/)