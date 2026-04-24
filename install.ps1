# install.ps1
Write-Host "🚀 Setting up Moms-Lunch-Box from Replit..." -ForegroundColor Cyan
Write-Host ""

# Check Node.js
Write-Host "Checking Node.js..." -ForegroundColor Yellow
$nodeVersion = node --version 2>$null
if (-not $nodeVersion) {
    Write-Host "❌ Node.js is not installed. Please install Node.js v18 or higher from https://nodejs.org/" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Node.js $nodeVersion found" -ForegroundColor Green

# Check pnpm
Write-Host ""
Write-Host "Checking pnpm..." -ForegroundColor Yellow
$pnpmVersion = pnpm --version 2>$null
if (-not $pnpmVersion) {
    Write-Host "Installing pnpm..." -ForegroundColor Yellow
    npm install -g pnpm
    $pnpmVersion = pnpm --version
}
Write-Host "✅ pnpm $pnpmVersion ready" -ForegroundColor Green

# Clean old files
Write-Host ""
Write-Host "Cleaning old Replit files..." -ForegroundColor Yellow
if (Test-Path "clean-all.ps1") {
    powershell -ExecutionPolicy Bypass -File clean-all.ps1
}

# Install dependencies
Write-Host ""
Write-Host "Installing dependencies (this may take 2-3 minutes)..." -ForegroundColor Yellow
pnpm install --no-frozen-lockfile

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Installation failed. Trying with legacy peer deps..." -ForegroundColor Yellow
    pnpm install --no-frozen-lockfile --legacy-peer-deps
}

# Build TypeScript references
Write-Host ""
Write-Host "Building TypeScript project references..." -ForegroundColor Yellow
pnpm run typecheck:libs

Write-Host ""
Write-Host "✅ Setup Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "To start the development server, run:" -ForegroundColor Cyan
Write-Host "  pnpm run dev" -ForegroundColor White
Write-Host ""
Write-Host "Or run the start script:" -ForegroundColor Cyan
Write-Host "  .\start.ps1" -ForegroundColor White