# start.ps1
Write-Host "🚀 Starting Moms-Lunch-Box Development Server..." -ForegroundColor Cyan
Write-Host ""

# Kill any process using port 3000
$port = 3000
$connection = Get-NetTCPConnection -LocalPort $port -ErrorAction SilentlyContinue
if ($connection) {
    Write-Host "Port $port is busy. Stopping process..." -ForegroundColor Yellow
    $connection | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }
    Start-Sleep -Seconds 2
}

Write-Host "Starting Vite dev server..." -ForegroundColor Yellow
Write-Host "📍 App will be available at: http://localhost:$port" -ForegroundColor Green
Write-Host ""

pnpm run dev