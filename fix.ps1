# fix.ps1
Write-Host "🔧 Troubleshooting Moms-Lunch-Box..." -ForegroundColor Cyan

# Clear Vite cache
Write-Host "Clearing Vite cache..." -ForegroundColor Yellow
$viteCache = "$env:LOCALAPPDATA\.vite"
if (Test-Path $viteCache) {
    Remove-Item -Path $viteCache -Recurse -Force
    Write-Host "  Cleared Vite cache"
}

# Clear pnpm store (optional - only if having severe issues)
Write-Host ""
$clearStore = Read-Host "Clear pnpm store? (y/N) - Only if having dependency issues"
if ($clearStore -eq 'y') {
    Write-Host "Clearing pnpm store..." -ForegroundColor Yellow
    pnpm store prune
}

# Reinstall
Write-Host ""
$reinstall = Read-Host "Reinstall all dependencies? (y/N)"
if ($reinstall -eq 'y') {
    Write-Host "Reinstalling..." -ForegroundColor Yellow
    Remove-Item -Path "node_modules" -Recurse -Force -ErrorAction SilentlyContinue
    Remove-Item -Path "pnpm-lock.yaml" -Force -ErrorAction SilentlyContinue
    pnpm install
}

Write-Host ""
Write-Host "✅ Fixes applied. Try running: .\start.ps1" -ForegroundColor Green