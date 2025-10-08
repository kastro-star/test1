# Remove node_modules and package-lock.json
Write-Host "Cleaning up old dependencies..." -ForegroundColor Cyan
if (Test-Path -Path "node_modules") {
    Remove-Item -Recurse -Force "node_modules"
}
if (Test-Path -Path "package-lock.json") {
    Remove-Item -Force "package-lock.json"
}

# Clear npm cache
Write-Host "Clearing npm cache..." -ForegroundColor Cyan
npm cache clean --force

# Install dependencies
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm install

# Build the project
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

Write-Host "Done! Check the build folder for output." -ForegroundColor Green