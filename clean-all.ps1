# clean-all.ps1
Write-Host "🧹 Cleaning all Replit-specific files and caches..." -ForegroundColor Cyan

# Remove node_modules from all locations
Write-Host "Removing node_modules..." -ForegroundColor Yellow
Get-ChildItem -Path . -Name "node_modules" -Recurse -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    Write-Host "  Removing: $_"
    Remove-Item -Path $_ -Recurse -Force -ErrorAction SilentlyContinue
}

# Remove lock files
Write-Host "Removing lock files..." -ForegroundColor Yellow
Remove-Item -Path "pnpm-lock.yaml" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "package-lock.json" -Force -ErrorAction SilentlyContinue
Remove-Item -Path "yarn.lock" -Force -ErrorAction SilentlyContinue

# Remove build artifacts
Write-Host "Removing build artifacts..." -ForegroundColor Yellow
$folders = @("dist", "build", ".next", ".turbo", ".cache", "out", ".vite")
foreach ($folder in $folders) {
    Get-ChildItem -Path . -Name $folder -Recurse -Directory -ErrorAction SilentlyContinue | ForEach-Object {
        Write-Host "  Removing: $_"
        Remove-Item -Path $_ -Recurse -Force -ErrorAction SilentlyContinue
    }
}

# Remove TypeScript cache
Remove-Item -Path "*.tsbuildinfo" -Force -ErrorAction SilentlyContinue

Write-Host "✅ Cleanup complete!" -ForegroundColor Green