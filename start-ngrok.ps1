# Script para iniciar ngrok y configurar la app automáticamente
# Uso: .\start-ngrok.ps1

Write-Host "================================" -ForegroundColor Cyan
Write-Host "Iniciando ngrok para Aquanova" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si ngrok está instalado
$ngrokPath = Get-Command ngrok -ErrorAction SilentlyContinue
if (-not $ngrokPath) {
    Write-Host "❌ ngrok no está instalado o no está en PATH" -ForegroundColor Red
    Write-Host ""
    Write-Host "Instala ngrok desde: https://ngrok.com/download" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Después de instalar, puedes ejecutar este script nuevamente." -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ ngrok encontrado: $($ngrokPath.Source)" -ForegroundColor Green
Write-Host ""

# Iniciar ngrok en puerto 3000
Write-Host "🚀 Iniciando ngrok en puerto 3000..." -ForegroundColor Cyan
Write-Host ""
Write-Host "INSTRUCCIONES:" -ForegroundColor Yellow
Write-Host "1. Cuando ngrok inicie, verás una URL HTTPS en la consola" -ForegroundColor Yellow
Write-Host "2. Copia la URL (ej: https://abc123.ngrok.io)" -ForegroundColor Yellow
Write-Host "3. Abre: aquanova_computacion_movil/frontend/frontend/src/config/api.config.ts" -ForegroundColor Yellow
Write-Host "4. Reemplaza NGROK_URL con tu URL y cambia USE_NGROK = true" -ForegroundColor Yellow
Write-Host "5. Guarda el archivo y reinicia la app en el celular" -ForegroundColor Yellow
Write-Host ""
Write-Host "⚠️  Mantén esta ventana abierta mientras uses la app" -ForegroundColor Yellow
Write-Host ""

# Iniciar ngrok
ngrok http 3000
