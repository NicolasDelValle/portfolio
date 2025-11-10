# 📦 Guía de Deploy Estático - Portfolio

## 🎯 Configuración Actual

Tu portfolio está configurado para generar un **sitio completamente estático** que puede subirse a cualquier hosting de archivos.

### ✅ Cambios Realizados

1. **next.config.ts** - Configurado para export estático
   - `output: 'export'` - Genera HTML estático
   - `images: { unoptimized: true }` - Imágenes sin optimización server-side

2. **Comandos disponibles:**
   ```bash
   npm run build    # Genera build estático en carpeta 'out/'
   ```

---

## 🚀 Cómo Generar el Build

### Paso 1: Preparar Imágenes
```bash
# Asegúrate de tener las imágenes necesarias
# Ver OG_IMAGE_GUIDE.md para crearlas
```

### Paso 2: Configurar Dominio
**IMPORTANTE:** Reemplaza el dominio en estos archivos antes de hacer build:

- `app/layout.tsx` (línea ~25)
- `app/sitemap.ts` (línea 4)
- `app/robots.ts` (línea 21)
- `app/page.tsx` (líneas ~81-82)
- `public/robots.txt` (última línea)

**Usa el dominio donde vas a hostearlo**, por ejemplo:
- `https://www.nicolasdelvalle.com`
- `https://nicolasdelvalle.github.io`
- `https://storage.example.com/portfolio`

### Paso 3: Generar Build
```bash
# Instalar dependencias (primera vez)
npm install

# Generar build estático
npm run build
```

Esto crea una carpeta `out/` con todos los archivos estáticos.

### Paso 4: Verificar Build Local
```bash
# Instalar servidor estático (primera vez)
npm install -g serve

# Probar el build localmente
serve out
```

Abre http://localhost:3000 y verifica que todo funcione.

---

## 📁 Estructura de la Carpeta `out/`

Después del build, tendrás:

```
out/
├── index.html              # Página principal
├── visual.html             # Página /visual
├── 404.html                # Página 404
├── sitemap.xml             # Sitemap
├── robots.txt              # Robots.txt
├── manifest.webmanifest    # PWA manifest
├── _next/
│   ├── static/             # CSS, JS, chunks
│   └── ...
├── data/
│   └── portfolio.json      # Tus datos
├── icons/                  # Iconos
├── locales/               # Traducciones
│   ├── en.json
│   └── es.json
└── [otros archivos]
```

**TODO el contenido de `out/` debe subirse al servidor.**

---

## 🌐 Opciones de Hosting

### Opción 1: GitHub Pages (GRATIS) ⭐

**Pros:**
- ✅ Totalmente gratis
- ✅ HTTPS automático
- ✅ Dominio: `usuario.github.io/repo`
- ✅ Puedes usar dominio custom

**Pasos:**
```bash
# 1. Crear repositorio en GitHub (si no existe)
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/portfolio.git
git push -u origin main

# 2. Instalar gh-pages
npm install --save-dev gh-pages

# 3. Agregar scripts a package.json
# (Ya están configurados más abajo)

# 4. Deploy
npm run deploy
```

**Configurar dominio custom:**
1. Agregar archivo `out/CNAME` con tu dominio
2. Configurar DNS en tu proveedor de dominio

### Opción 2: Netlify (GRATIS)

**Pros:**
- ✅ Gratis con límites generosos
- ✅ HTTPS automático
- ✅ Deploy automático desde Git
- ✅ Formularios, redirects, headers

**Pasos:**
```bash
# 1. Instalar Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
npm run build
netlify deploy --prod --dir=out
```

**O usar drag & drop:**
1. Ir a https://app.netlify.com
2. Arrastrar carpeta `out/`
3. ¡Listo!

### Opción 3: Azure Static Web Apps

**Pros:**
- ✅ Tier gratis disponible
- ✅ Integración con GitHub
- ✅ CDN global
- ✅ Custom domains gratis

**Pasos:**
```bash
# 1. Instalar Azure CLI
# https://aka.ms/installazurecli

# 2. Login
az login

# 3. Crear Static Web App
az staticwebapp create \
  --name mi-portfolio \
  --resource-group mi-grupo \
  --source out/ \
  --location "East US 2"
```

### Opción 4: AWS S3 + CloudFront

**Pros:**
- ✅ Súper escalable
- ✅ CDN global
- ✅ Muy barato (céntimos/mes)

**Pasos:**
```bash
# 1. Instalar AWS CLI
# https://aws.amazon.com/cli/

# 2. Configurar credenciales
aws configure

# 3. Crear bucket
aws s3 mb s3://mi-portfolio

# 4. Subir archivos
aws s3 sync out/ s3://mi-portfolio --acl public-read

# 5. Configurar como sitio web
aws s3 website s3://mi-portfolio \
  --index-document index.html \
  --error-document 404.html
```

### Opción 5: Cualquier Hosting Web (cPanel, FTP, etc.)

**Si tienes hosting tradicional:**

1. Genera el build: `npm run build`
2. Sube TODO el contenido de `out/` vía FTP/cPanel
3. Apunta el dominio a esa carpeta
4. ¡Listo!

**Herramientas FTP:**
- FileZilla (gratis)
- WinSCP (Windows)
- Cyberduck (Mac)

---

## ⚙️ Configuración Avanzada

### Si vas a hostear en una subcarpeta

Ejemplo: `https://midominio.com/portfolio/`

Edita `next.config.ts`:
```typescript
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  assetPrefix: '/portfolio',
  images: {
    unoptimized: true,
  },
};
```

Y en `app/layout.tsx`:
```typescript
metadataBase: new URL('https://midominio.com/portfolio'),
```

### Configurar .htaccess (Apache)

Si tu servidor usa Apache, crea `.htaccess` en la carpeta raíz:

```apache
# Redirigir a HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Comprimir archivos
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Redirigir 404 personalizado
ErrorDocument 404 /404.html

# Forzar trailing slash (opcional)
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_URI} !(.*)/$
RewriteRule ^(.*)$ https://%{HTTP_HOST}/$1/ [L,R=301]
```

### Configurar nginx

Si usas nginx, configura así:

```nginx
server {
    listen 80;
    server_name tudominio.com;
    
    root /ruta/a/out;
    index index.html;
    
    # Comprimir
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Cache
    location ~* \.(jpg|jpeg|png|gif|ico|svg|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing
    location / {
        try_files $uri $uri/ $uri.html =404;
    }
    
    # 404 personalizado
    error_page 404 /404.html;
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

---

## 🔍 SEO para Sitio Estático

### ✅ Ya está configurado:
- Meta tags
- Open Graph
- robots.txt
- sitemap.xml
- Schema.org JSON-LD

### 📝 Después de subir:

1. **Google Search Console:**
   - Agregar propiedad con tu dominio
   - Verificar con código en layout.tsx
   - Submit sitemap: `https://tudominio.com/sitemap.xml`

2. **Bing Webmaster:**
   - Importar desde Google Search Console
   - O agregar manualmente

3. **Testing:**
   - Rich Results: https://search.google.com/test/rich-results
   - PageSpeed: https://pagespeed.web.dev/
   - Mobile Friendly: https://search.google.com/test/mobile-friendly

---

## 📊 Checklist de Deploy

### Antes de Build:
- [ ] Crear `og-image.png` (1200×630)
- [ ] Crear favicons (favicon.ico, icon-192.png, icon-512.png)
- [ ] Reemplazar dominio en archivos
- [ ] Verificar datos en portfolio.json
- [ ] Ejecutar `npm run check:seo`
- [ ] Probar localmente con `npm run dev`

### Durante Build:
- [ ] `npm run build`
- [ ] Verificar que carpeta `out/` se creó
- [ ] Probar con `serve out`
- [ ] Verificar que todas las páginas funcionan
- [ ] Verificar que imágenes cargan
- [ ] Probar tema oscuro/claro
- [ ] Probar cambio de idioma

### Después de Subir:
- [ ] Verificar sitio en vivo
- [ ] Probar navegación (Home, Visual, 404)
- [ ] Verificar robots.txt: `https://tudominio.com/robots.txt`
- [ ] Verificar sitemap: `https://tudominio.com/sitemap.xml`
- [ ] Probar preview en redes sociales
- [ ] Configurar Google Search Console
- [ ] Submit sitemap a Google
- [ ] Probar en mobile

---

## 🚨 Troubleshooting

### Error: "Image optimization requires a server"
**Solución:** Ya configurado con `images: { unoptimized: true }`

### Las rutas no funcionan (404)
**Solución:** 
- Verificar que server esté configurado para servir HTML sin extensión
- Agregar `.html` a las rutas o configurar redirects

### CSS/JS no carga
**Solución:**
- Verificar `basePath` en next.config.ts
- Verificar que `_next/` está en el servidor
- Limpiar caché del navegador

### Imágenes no cargan
**Solución:**
- Verificar que carpeta `public/` se copió a `out/`
- Usar rutas relativas en vez de absolutas
- Verificar permisos de archivos en servidor

---

## 💡 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Generar build estático
npm run build

# Probar build localmente
serve out

# Limpiar caché de Next.js
rm -rf .next out

# Ver tamaño del build
du -sh out/

# Comprimir para subir
tar -czf portfolio.tar.gz out/
# o
zip -r portfolio.zip out/
```

---

## 📞 Ayuda Adicional

**Si algo no funciona:**
1. Revisa la consola del navegador (F12)
2. Verifica los logs del build
3. Prueba con `serve out` antes de subir
4. Verifica permisos en el servidor

**Recursos:**
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Deploy](https://create-react-app.dev/docs/deployment/#github-pages)
- [Netlify Deploy](https://docs.netlify.com/site-deploys/overview/)

---

**¡Tu portfolio está listo para generar build y subir! 🚀**

Simplemente:
1. Completa las imágenes
2. Configura el dominio
3. `npm run build`
4. Sube carpeta `out/` a tu hosting
