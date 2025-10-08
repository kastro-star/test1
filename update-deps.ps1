# Clean installation script for Windows PowerShell
Write-Host "Cleaning node_modules and package-lock.json..."
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

Write-Host "Cleaning npm cache..."
npm cache clean --force

Write-Host "Installing dependencies..."
npm install

Write-Host "Building project to verify..."
npm run build

Write-Host "Done! If the build succeeded, your project should now deploy successfully on Netlify."