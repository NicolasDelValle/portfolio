# 🚀 Guía de Deploy a Hostinger - Portfolio

## 📋 Requisitos Previos

- ✅ Cuenta de Hostinger activa
- ✅ Dominio configurado (o usar subdominio de Hostinger)
- ✅ Acceso a hPanel (panel de control de Hostinger)
- ✅ Build del portfolio generado (`npm run build`)

---

## 🎯 Pasos para Deploy en Hostinger

### PASO 1: Generar el Build

```bash
# En tu proyecto local
npm run build
```

Esto crea la carpeta `out/` con todos los archivos estáticos.

### PASO 2: Configurar Dominio en Hostinger

#### Opción A: Usar tu dominio principal
Si tu dominio es `nicolasdelvalle.com`:

1. En hPanel → **Dominios**
2. Verificar que tu dominio está activo
3. El document root será: `/public_html`

#### Opción B: Crear subdominio
Si quieres usar `portfolio.nicolasdelvalle.com`:

1. En hPanel → **Dominios** → **Subdominios**
2. Crear subdominio: `portfolio`
3. Document root: `/public_html/portfolio` (se crea automáticamente)

**IMPORTANTE:** Anota tu dominio final porque lo necesitarás en el PASO 3.

### PASO 3: Actualizar URLs en el Proyecto

**Antes de hacer el build final**, reemplaza el dominio en estos archivos:

#### 1. `app/layout.tsx` (línea ~25)
```typescript
metadataBase: new URL('https://tudominio.com'),
// o si usas subdominio:
metadataBase: new URL('https://portfolio.tudominio.com'),
```

#### 2. `app/sitemap.ts` (línea 4)
```typescript
const baseUrl = 'https://tudominio.com';
```

#### 3. `app/robots.ts` (línea 21)
```typescript
sitemap: 'https://tudominio.com/sitemap.xml',
```

#### 4. `app/page.tsx` (líneas ~81-82)
```typescript
image: "https://tudominio.com/nico-logo.svg"
url: "https://tudominio.com"
```

#### 5. `public/robots.txt` (última línea)
```
Sitemap: https://tudominio.com/sitemap.xml
```

**Comando rápido para reemplazar todo (PowerShell):**
```powershell
$OLD = "nicolasdelvalle.dev"
$NEW = "tudominio.com"  # Reemplaza con tu dominio real

Get-ChildItem -Path . -Include "*.tsx","*.ts","*.txt" -Recurse | 
  ForEach-Object { 
    (Get-Content $_.FullName) -replace $OLD, $NEW | 
    Set-Content $_.FullName 
  }
```

Después regenera el build:
```bash
npm run build
```

### PASO 4: Subir Archivos a Hostinger

#### Método 1: File Manager (Más Fácil) ⭐

1. **Login a hPanel:**
   - Ir a https://hpanel.hostinger.com
   - Iniciar sesión

2. **Abrir File Manager:**
   - En el menú → **Archivos** → **File Manager**

3. **Navegar a la carpeta correcta:**
   - Si usas dominio principal → `/public_html/`
   - Si usas subdominio → `/public_html/portfolio/`

4. **Limpiar carpeta (IMPORTANTE):**
   - Eliminar archivos por defecto de Hostinger
   - Dejar solo `.htaccess` si existe (lo editaremos después)

5. **Subir archivos:**
   - Click en **Upload**
   - **Opción A:** Arrastra TODO el contenido de la carpeta `out/`
   - **Opción B:** Comprimir `out/` en ZIP y subirlo, luego extraer

6. **Verificar estructura:**
   Deberías ver:
   ```
   public_html/
   ├── index.html
   ├── visual.html
   ├── 404.html
   ├── sitemap.xml
   ├── robots.txt
   ├── manifest.webmanifest
   ├── _next/
   ├── data/
   ├── icons/
   ├── locales/
   └── ...
   ```

#### Método 2: FTP (Más Rápido para actualizaciones)

1. **Obtener credenciales FTP:**
   - hPanel → **Archivos** → **FTP Accounts**
   - Usar cuenta principal o crear nueva
   - Anotar: Host, Username, Password, Port (21)

2. **Descargar FileZilla:**
   - https://filezilla-project.org/

3. **Conectar:**
   - Host: `ftp.tudominio.com` o IP de Hostinger
   - Username: tu usuario FTP
   - Password: tu contraseña
   - Port: 21

4. **Subir archivos:**
   - Navegar a `/public_html/` (o `/public_html/portfolio/`)
   - Arrastrar TODO el contenido de `out/` (lado izquierdo → derecho)
   - Esperar a que termine (puede tardar 5-10 min)

### PASO 5: Configurar .htaccess (IMPORTANTE)

Hostinger usa Apache, necesitas un archivo `.htaccess` para:
- Forzar HTTPS
- Optimizar cache
- Comprimir archivos
- Manejar errores 404

**Crear/editar `.htaccess` en File Manager:**

1. En `/public_html/` crear archivo `.htaccess`
2. Pegar este contenido:

```apache
# ===================================
# Portfolio Next.js - Hostinger Config
# ===================================

# Forzar HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# ===================================
# Comprimir archivos
# ===================================
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
  AddOutputFilterByType DEFLATE application/xml
  AddOutputFilterByType DEFLATE application/xhtml+xml
  AddOutputFilterByType DEFLATE application/rss+xml
  AddOutputFilterByType DEFLATE image/svg+xml
</IfModule>

# ===================================
# Cache de archivos estáticos
# ===================================
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Imágenes - 1 año
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/x-icon "access plus 1 year"
  
  # CSS y JS - 1 mes
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType text/javascript "access plus 1 month"
  
  # Fonts - 1 año
  ExpiresByType font/woff "access plus 1 year"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType application/font-woff "access plus 1 year"
  ExpiresByType application/font-woff2 "access plus 1 year"
  
  # HTML - sin cache (siempre actualizado)
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# ===================================
# Security Headers
# ===================================
<IfModule mod_headers.c>
  # Prevenir clickjacking
  Header always set X-Frame-Options "SAMEORIGIN"
  
  # Prevenir MIME sniffing
  Header always set X-Content-Type-Options "nosniff"
  
  # XSS Protection
  Header always set X-XSS-Protection "1; mode=block"
  
  # Referrer Policy
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  
  # Cache-Control para archivos
  <FilesMatch "\.(jpg|jpeg|png|gif|svg|webp|ico|css|js|woff|woff2)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  
  # No cache para HTML
  <FilesMatch "\.html$">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </FilesMatch>
</IfModule>

# ===================================
# Manejo de errores
# ===================================
ErrorDocument 404 /404.html

# ===================================
# Servir archivos HTML sin extensión
# ===================================
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME}.html -f
RewriteRule ^(.*)$ $1.html [L]

# ===================================
# Bloquear acceso a archivos sensibles
# ===================================
<FilesMatch "^\.">
  Order allow,deny
  Deny from all
</FilesMatch>

# ===================================
# Habilitar CORS (si necesitas)
# ===================================
# <IfModule mod_headers.c>
#   Header set Access-Control-Allow-Origin "*"
# </IfModule>
```

3. Guardar archivo

### PASO 6: Configurar SSL/HTTPS en Hostinger

1. **En hPanel → SSL:**
   - Hostinger ofrece SSL gratis con Let's Encrypt
   - Si no está activo, click en **Install SSL**
   - Esperar 15-30 minutos a que se active

2. **Forzar HTTPS:**
   - Ya configurado en `.htaccess` arriba
   - O en hPanel → **Advanced** → **Force HTTPS**

### PASO 7: Verificar el Sitio

1. **Abrir tu dominio:**
   - `https://tudominio.com`
   - Verificar que carga correctamente

2. **Probar páginas:**
   - Home: `https://tudominio.com`
   - Visual: `https://tudominio.com/visual`
   - 404: `https://tudominio.com/pagina-que-no-existe`

3. **Verificar archivos SEO:**
   - Sitemap: `https://tudominio.com/sitemap.xml`
   - Robots: `https://tudominio.com/robots.txt`
   - Manifest: `https://tudominio.com/manifest.webmanifest`

4. **Probar en mobile:**
   - Abrir en tu celular
   - Verificar responsive

### PASO 8: Optimizaciones Hostinger (Opcional)

#### A. Habilitar LiteSpeed Cache

Si tu plan tiene LiteSpeed:

1. hPanel → **Advanced** → **LiteSpeed Cache**
2. Enable cache
3. Configurar:
   - Enable CSS Minify ✅
   - Enable JS Minify ✅
   - Enable Image Optimization ✅

#### B. Configurar Cloudflare (Gratis)

Hostinger incluye Cloudflare gratis:

1. hPanel → **Advanced** → **Cloudflare**
2. Enable Cloudflare
3. Beneficios:
   - CDN global (más rápido)
   - DDoS protection
   - SSL adicional
   - Cache en edge

#### C. Configurar Email Forwarding

Para recibir emails de `contact@tudominio.com`:

1. hPanel → **Emails**
2. Email Forwarding
3. Crear: `contact@tudominio.com` → tu email personal

---

## 📊 Después del Deploy

### Google Search Console

1. Ir a https://search.google.com/search-console
2. Add Property → `https://tudominio.com`
3. Verificar con método HTML tag:
   - Google te da un código
   - Agregar en `app/layout.tsx` (línea ~69):
     ```typescript
     verification: {
       google: 'tu-codigo-aqui',
     },
     ```
   - Regenerar build y subir

4. Submit sitemap:
   - URL: `https://tudominio.com/sitemap.xml`

### Probar SEO

- **Rich Results:** https://search.google.com/test/rich-results
- **PageSpeed:** https://pagespeed.web.dev/
- **Mobile Friendly:** https://search.google.com/test/mobile-friendly
- **Open Graph:** https://www.opengraph.xyz/

---

## 🔄 Actualizar el Sitio

Cuando hagas cambios:

```bash
# 1. Hacer cambios en código local
# 2. Probar localmente
npm run dev

# 3. Generar nuevo build
npm run build

# 4. Subir solo archivos cambiados vía FTP
# O reemplazar todo con File Manager
```

**Tip:** Usa FTP para actualizaciones rápidas (solo subes archivos modificados).

---

## 🚨 Troubleshooting Hostinger

### Error: "Internal Server Error"
**Solución:**
- Revisar `.htaccess` (comentar líneas una por una)
- Verificar permisos de archivos (644 para archivos, 755 para carpetas)

### CSS/JS no carga
**Solución:**
- Verificar que carpeta `_next/` está completa
- Limpiar cache del navegador (Ctrl + Shift + R)
- Verificar en hPanel → Advanced → Clear Cache

### Imágenes no cargan
**Solución:**
- Verificar permisos (644)
- Asegurar que carpeta `public/` está en la raíz
- Revisar rutas en código (deben ser relativas)

### SSL no funciona
**Solución:**
- Esperar 30 minutos después de instalación
- Verificar en hPanel que SSL está activo
- Contactar soporte Hostinger

### Sitio muy lento
**Solución:**
- Habilitar LiteSpeed Cache (si disponible)
- Activar Cloudflare
- Comprimir imágenes antes de subir
- Verificar que `.htaccess` tiene cache configurado

---

## 📞 Soporte Hostinger

Si algo no funciona:
- **Chat 24/7:** Disponible en hPanel
- **Tickets:** hPanel → Support
- **Base de conocimiento:** https://support.hostinger.com

---

## ✅ Checklist Final Hostinger

### Antes de subir:
- [ ] Build generado (`npm run build`)
- [ ] Dominio configurado en archivos
- [ ] Imágenes OG y favicons creados
- [ ] SSL activo en Hostinger

### Durante deploy:
- [ ] Archivos subidos a `/public_html/`
- [ ] `.htaccess` configurado
- [ ] HTTPS forzado
- [ ] Permisos correctos

### Después de deploy:
- [ ] Sitio accesible por HTTPS
- [ ] Todas las páginas funcionan
- [ ] Sitemap y robots.txt accesibles
- [ ] Google Search Console configurado
- [ ] Cloudflare activado (opcional)
- [ ] Cache habilitado

---

## 💡 Tips Pro Hostinger

1. **Usa Cloudflare:** Gratis e incluido, mejora velocidad
2. **Backups automáticos:** Hostinger los hace diarios
3. **Monitoreo:** Activa uptime monitoring en hPanel
4. **Email profesional:** Crea `contact@tudominio.com`
5. **Subdominios:** Usa uno para testing antes de actualizar producción

---

**¡Tu portfolio está listo para Hostinger! 🚀**

Cualquier duda con el proceso, revisa el chat de soporte de Hostinger (es muy bueno).
