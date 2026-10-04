#!/bin/bash

# Script para iniciar ngrok y configurar la app automáticamente
# Uso: bash start-ngrok.sh

echo "================================"
echo "Iniciando ngrok para Aquanova"
echo "================================"
echo ""

# Verificar si ngrok está instalado
if ! command -v ngrok &> /dev/null; then
    echo "❌ ngrok no está instalado"
    echo ""
    echo "Instálalo con:"
    echo "  Mac:   brew install ngrok"
    echo "  Linux: https://ngrok.com/download"
    echo ""
    exit 1
fi

echo "✅ ngrok encontrado"
echo ""

echo "🚀 Iniciando ngrok en puerto 3000..."
echo ""
echo "INSTRUCCIONES:"
echo "1. Cuando ngrok inicie, verás una URL HTTPS"
echo "2. Copia la URL (ej: https://abc123.ngrok.io)"
echo "3. Abre: aquanova_computacion_movil/frontend/frontend/src/config/api.config.ts"
echo "4. Reemplaza NGROK_URL con tu URL y cambia USE_NGROK = true"
echo "5. Guarda y reinicia la app en el celular"
echo ""
echo "⚠️  Mantén esta ventana abierta mientras uses la app"
echo ""

# Iniciar ngrok
ngrok http 3000
