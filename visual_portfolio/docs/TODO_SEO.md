# ✅ TODO LIST - Configuración SEO Pendiente

## 🎯 Estado Actual

**Configurado (90%):**
- ✅ Metadata completa en layout.tsx
- ✅ Schema.org JSON-LD para Rich Snippets
- ✅ robots.txt y robots.ts
- ✅ sitemap.xml dinámico
- ✅ Manifest PWA
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Structured Data component
- ✅ Datos de contacto verificados
- ✅ Redes sociales configuradas
- ✅ Keywords optimizadas (español + inglés)

**Pendiente (10%):**
- ❌ Crear imágenes (OG + favicons)
- ⚠️ Reemplazar dominio placeholder

---

## 📋 PASOS SIGUIENTES (En orden)

### PASO 1: Crear Imágenes 🎨

#### A. Imagen Open Graph (CRÍTICO)
**Archivo:** `public/og-image.png`  
**Tamaño:** 1200px × 630px  
**Tiempo estimado:** 10-15 minutos

**Opción más rápida:**
1. Ir a https://og-playground.vercel.app/
2. Escribir:
   ```
   Nicolás Del Valle
   Full Stack Developer
   React · Next.js · TypeScript
   ```
3. Ajustar colores (fondo oscuro #1e1e1e)
4. Download → Guardar como `og-image.png` en carpeta `public/`

**O usar Canva:**
- https://canva.com → Buscar "Open Graph"
- Personalizar con tu info
- Descargar PNG 1200×630

📖 **Guía completa:** `OG_IMAGE_GUIDE.md`

#### B. Favicons (CRÍTICO)
**Archivos necesarios:**
- `public/favicon.ico` (32×32)
- `public/icon-192.png` (192×192)
- `public/icon-512.png` (512×512)

**Opción más rápida:**
1. Ir a https://favicon.io/
2. Upload tu logo (`nico-logo.svg`)
3. Generate
4. Download ZIP
5. Extraer archivos a carpeta `public/`

**Tiempo estimado:** 5 minutos

---

### PASO 2: Decidir Dominio 🌐

#### Opción A: Ya tengo dominio
Si ya compraste `nicolasdelvalle.dev` o similar:

**Reemplazar en estos 5 archivos:**

1. **app/layout.tsx** (línea 25):
```typescript
metadataBase: new URL('https://TU-DOMINIO.com'),
```

2. **app/sitemap.ts** (línea 4):
```typescript
const baseUrl = 'https://TU-DOMINIO.com';
```

3. **app/robots.ts** (línea 21):
```typescript
sitemap: 'https://TU-DOMINIO.com/sitemap.xml',
```

4. **app/page.tsx** (líneas 81-82):
```typescript
image: "https://TU-DOMINIO.com/nico-logo.svg"
url: "https://TU-DOMINIO.com"
```

5. **public/robots.txt** (última línea):
```
Sitemap: https://TU-DOMINIO.com/sitemap.xml
```

**Comando rápido (PowerShell):**
```powershell
$OLD = "nicolasdelvalle.dev"
$NEW = "TU-DOMINIO.com"

Get-ChildItem -Path . -Include "*.tsx","*.ts","*.txt" -Recurse | 
  ForEach-Object { 
    (Get-Content $_.FullName) -replace $OLD, $NEW | 
    Set-Content $_.FullName 
  }
```

#### Opción B: Usar subdominio Hostinger
Si usas Hostinger, puedes:
- Dominio principal: `tudominio.com`
- Subdominio: `portfolio.tudominio.com`
- Dominio temporal de Hostinger mientras compras uno

**En Hostinger:**
- hPanel → Dominios → Ver tu dominio actual

**Para más tarde comprar dominio:**
- Namecheap.com (económico)
- Google Domains
- Vercel Domains

---

### PASO 3: Deploy a Hostinger 🚀

**Tu portfolio se deployará en Hostinger** como sitio estático.

1. **Generar build:**
```bash
npm run build
```

2. **Subir a Hostinger:**
   - Acceder a hPanel (panel de Hostinger)
   - File Manager → `/public_html/`
   - Subir TODO el contenido de la carpeta `out/`
   - O usar FTP con FileZilla

3. **Configurar .htaccess:**
   - Ya está incluido en `public/.htaccess`
   - Se copiará automáticamente al hacer build
   - Optimiza cache, compresión y fuerza HTTPS

**Ver guía completa:** `DEPLOY_HOSTINGER.md`

**Tiempo estimado:** 10-15 minutos

---

### PASO 4: Configurar Google Search Console 🔍

**Después de que el sitio esté live:**

1. Ir a https://search.google.com/search-console
2. Add Property → Tu dominio
3. Verify ownership (DNS o HTML tag)
4. Google te da código de verificación
5. Agregar en `app/layout.tsx` (línea 69):
```typescript
verification: {
  google: 'tu-codigo-aqui',
},
```
6. Submit sitemap: `https://tudominio.com/sitemap.xml`

**Tiempo estimado:** 10 minutos  
**Cuándo hacerlo:** Después del deploy

---

### PASO 5: Testing SEO 🧪

Una vez deployado, probar en:

1. **Rich Results Test:**
   - https://search.google.com/test/rich-results
   - Pega tu URL
   - Verifica que Schema.org funcione

2. **PageSpeed Insights:**
   - https://pagespeed.web.dev/
   - Verifica performance (debe ser 90+)

3. **Open Graph Preview:**
   - https://www.opengraph.xyz/
   - Verifica que imagen OG se vea bien

4. **Mobile-Friendly Test:**
   - https://search.google.com/test/mobile-friendly

**Tiempo estimado:** 15 minutos

---

### PASO 6 (OPCIONAL): Analytics 📊

**Si quieres trackear visitas:**

1. Crear cuenta Google Analytics 4
2. Obtener ID: `G-XXXXXXXXXX`
3. Crear `app/GoogleAnalytics.tsx` (código en SEO_SETUP_GUIDE.md)
4. Agregar en layout.tsx

**Tiempo estimado:** 10 minutos  
**Cuándo hacerlo:** Cuando quieras

---

## ⏱️ Tiempo Total Estimado

- ✅ **Mínimo viable:** 30 minutos (imágenes + deploy)
- ✅ **Completo:** 1-2 horas (con dominio + Google + testing)
- ✅ **Con Analytics:** +10 minutos

---

## 🎯 Checklist Rápido

### Antes de Deploy:
- [ ] Crear `og-image.png` (1200×630)
- [ ] Crear `favicon.ico`
- [ ] Crear `icon-192.png`
- [ ] Crear `icon-512.png`
- [ ] Decidir dominio (propio o Vercel)
- [ ] Reemplazar dominio en archivos (si tienes uno)
- [ ] Ejecutar `npm run check:seo`
- [ ] Commit & Push a GitHub

### Durante Deploy:
- [ ] Import en Vercel
- [ ] Deploy exitoso
- [ ] Verificar sitio funciona
- [ ] Si usas Vercel domain, actualizar archivos

### Después de Deploy:
- [ ] Probar Rich Results
- [ ] Verificar PageSpeed
- [ ] Testear Open Graph preview
- [ ] Configurar Google Search Console
- [ ] Submit sitemap
- [ ] Compartir en redes (LinkedIn, Twitter)
- [ ] (Opcional) Setup Analytics

---

## 🚨 PRIORIDAD MÁXIMA

Si tienes poco tiempo, haz SOLO esto:

1. **Crear `og-image.png`** (10 min) → https://og-playground.vercel.app/
2. **Crear favicons** (5 min) → https://favicon.io/
3. **Deploy a Vercel** (5 min)
4. **Submit a Google** (5 min)

Total: **25 minutos para estar 100% funcional**

El resto (dominio propio, analytics) puedes hacerlo después.

---

## 📚 Recursos Creados

Tienes estos archivos de ayuda:

1. **SEO_SETUP_GUIDE.md** - Guía completa paso a paso
2. **SEO_SUMMARY.md** - Resumen de lo configurado
3. **OG_IMAGE_GUIDE.md** - Cómo crear imagen OG
4. **TODO_SEO.md** - Este archivo (checklist)
5. **scripts/check-seo.ps1** - Script de validación

**Ejecuta siempre antes de deployar:**
```bash
npm run check:seo
```

---

## 💡 Tips Finales

1. **No te estreses:** Puedes deployar sin dominio propio (usa Vercel)
2. **Imágenes primero:** Sin OG image, no se verá bien en redes sociales
3. **Google tarda:** SEO tarda 1-3 meses en dar resultados
4. **Actualiza seguido:** Agrega proyectos, Google premia contenido fresco
5. **Comparte:** LinkedIn, Twitter, Dev.to con link a tu portfolio

---

## 🎉 Próximo Milestone

**Cuando completes todo esto, tu portfolio:**
- ✅ Aparecerá en Google con Rich Snippets
- ✅ Se verá perfecto al compartir en WhatsApp/LinkedIn
- ✅ Tendrá performance 95+
- ✅ Será encontrable por reclutadores
- ✅ Mostrará tu email/teléfono en resultados

**¡Estás a 30 minutos de tener un portfolio profesional nivel senior! 🚀**

---

## ❓ ¿Dudas?

Si algo no está claro:
1. Revisa los archivos MD de ayuda
2. Ejecuta `npm run check:seo` para ver qué falta
3. Pregúntame específicamente sobre el paso que necesites

**¡Vamos que se puede! 💪**
