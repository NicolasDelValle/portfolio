# 🔍 Script de Validación SEO

# Este script verifica que todos los elementos SEO estén configurados correctamente
# Ejecutar: npm run check:seo

Write-Host "🔍 Validando configuración SEO..." -ForegroundColor Cyan
Write-Host ""

$errors = 0
$warnings = 0

# Función para verificar archivos
function Test-FileExists {
    param($path, $description)
    if (Test-Path $path) {
        Write-Host "✅ $description encontrado" -ForegroundColor Green
    } else {
        Write-Host "❌ FALTA: $description en $path" -ForegroundColor Red
        $script:errors++
    }
}

# Función para verificar contenido en archivos
function Test-FileContent {
    param($path, $pattern, $description)
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        if ($content -match $pattern) {
            Write-Host "⚠️  PENDIENTE: $description en $path" -ForegroundColor Yellow
            $script:warnings++
        } else {
            Write-Host "✅ $description configurado" -ForegroundColor Green
        }
    }
}

Write-Host "📁 Verificando archivos SEO..." -ForegroundColor Cyan
Write-Host ""

# Verificar archivos esenciales
Test-FileExists "public/og-image.png" "Imagen Open Graph"
Test-FileExists "public/favicon.ico" "Favicon"
Test-FileExists "public/icon-192.png" "Icono PWA 192px"
Test-FileExists "public/icon-512.png" "Icono PWA 512px"
Test-FileExists "app/sitemap.ts" "Sitemap dinámico"
Test-FileExists "app/robots.ts" "Robots.txt dinámico"
Test-FileExists "app/manifest.ts" "Manifest PWA"
Test-FileExists "components/StructuredData.tsx" "Structured Data"

Write-Host ""
Write-Host "🌐 Verificando URLs de dominio..." -ForegroundColor Cyan
Write-Host ""

# Verificar que el dominio haya sido reemplazado
Test-FileContent "app/layout.tsx" "nicolasdelvalle\.dev" "⚠️ Reemplazar dominio placeholder"
Test-FileContent "app/sitemap.ts" "nicolasdelvalle\.dev" "⚠️ Reemplazar dominio placeholder"
Test-FileContent "app/robots.ts" "nicolasdelvalle\.dev" "⚠️ Reemplazar dominio placeholder"
Test-FileContent "app/page.tsx" "nicolasdelvalle\.dev" "⚠️ Reemplazar dominio placeholder"

Write-Host ""
Write-Host "📊 Verificando datos de contacto..." -ForegroundColor Cyan
Write-Host ""

if (Test-Path "public/data/portfolio.json") {
    $portfolio = Get-Content "public/data/portfolio.json" | ConvertFrom-Json
    
    if ($portfolio.basics.email) {
        Write-Host "✅ Email configurado: $($portfolio.basics.email)" -ForegroundColor Green
    } else {
        Write-Host "❌ FALTA: Email en portfolio.json" -ForegroundColor Red
        $errors++
    }
    
    if ($portfolio.basics.phone) {
        Write-Host "✅ Teléfono configurado: $($portfolio.basics.phone)" -ForegroundColor Green
    } else {
        Write-Host "⚠️  OPCIONAL: Teléfono en portfolio.json" -ForegroundColor Yellow
        $warnings++
    }
    
    if ($portfolio.basics.profiles.Count -gt 0) {
        Write-Host "✅ Redes sociales: $($portfolio.basics.profiles.Count) perfiles" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Recomendado: Agregar perfiles sociales" -ForegroundColor Yellow
        $warnings++
    }
}

Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "📊 RESUMEN" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

if ($errors -eq 0 -and $warnings -eq 0) {
    Write-Host "🎉 ¡PERFECTO! Todo está configurado correctamente" -ForegroundColor Green
    Write-Host "✅ Listo para deployar" -ForegroundColor Green
} elseif ($errors -eq 0) {
    Write-Host "⚠️  $warnings advertencias encontradas" -ForegroundColor Yellow
    Write-Host "👍 Puedes deployar, pero revisa las advertencias" -ForegroundColor Yellow
} else {
    Write-Host "❌ $errors errores críticos" -ForegroundColor Red
    Write-Host "⚠️  $warnings advertencias" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🔧 Revisa docs/SEO_SETUP_GUIDE.md para solucionar los errores" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "📚 Consulta estos archivos para más información:" -ForegroundColor Cyan
Write-Host "   - docs/SEO_SETUP_GUIDE.md (guía detallada)" -ForegroundColor White
Write-Host "   - docs/SEO_SUMMARY.md (resumen rápido)" -ForegroundColor White
Write-Host ""
