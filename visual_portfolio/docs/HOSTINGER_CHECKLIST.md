# ✅ Checklist Rápido - Deploy a Hostinger

## 📋 Antes de Empezar

- [x] Cuenta Hostinger activa
- [x] Dominio configurado (o usando temporal)
- [x] Acceso a hPanel

---

## 🎯 PASO A PASO (30 minutos)

### 1️⃣ Preparar Imágenes (15 min)

- [ ] Crear `og-image.png` (1200×630) en `public/`
  - Herramienta: https://og-playground.vercel.app/
  - Ver: `OG_IMAGE_GUIDE.md`

- [ ] Crear favicons en `public/`:
  - [ ] `favicon.ico` (32×32)
  - [ ] `icon-192.png` (192×192)  
  - [ ] `icon-512.png` (512×512)
  - Herramienta: https://favicon.io/

### 2️⃣ Configurar Dominio (2 min)

- [ ] Decidir dominio a usar:
  - [ ] Principal: `tudominio.com`
  - [ ] Subdominio: `portfolio.tudominio.com`
  - [ ] Temporal Hostinger: `xxxxx.hostingersite.com`

- [ ] Reemplazar en 5 archivos:
  ```powershell
  # PowerShell (ajusta el dominio):
  $OLD = "nicolasdelvalle.dev"
  $NEW = "TUDOMINIO.com"
  
  Get-ChildItem -Path . -Include "*.tsx","*.ts","*.txt" -Recurse | 
    ForEach-Object { 
      (Get-Content $_.FullName) -replace $OLD, $NEW | 
      Set-Content $_.FullName 
    }
  ```

- [ ] Archivos actualizados:
  - [ ] `app/layout.tsx`
  - [ ] `app/sitemap.ts`
  - [ ] `app/robots.ts`
  - [ ] `app/page.tsx`
  - [ ] `public/robots.txt`

### 3️⃣ Generar Build (2 min)

```bash
# Generar build estático
npm run build
```

- [ ] Carpeta `out/` creada exitosamente
- [ ] Probar localmente (opcional):
  ```bash
  npx serve out
  # Abrir http://localhost:3000
  ```

### 4️⃣ Subir a Hostinger (10 min)

#### Opción A: File Manager (Más Fácil)

- [ ] Login a hPanel: https://hpanel.hostinger.com
- [ ] Ir a **Archivos** → **File Manager**
- [ ] Navegar a `/public_html/`
- [ ] **IMPORTANTE:** Eliminar archivos por defecto de Hostinger
- [ ] Subir TODO el contenido de carpeta `out/`:
  - [ ] Opción 1: Arrastrar archivos directamente
  - [ ] Opción 2: Comprimir `out/` en ZIP, subir y extraer

#### Opción B: FTP (Más Rápido)

- [ ] Obtener credenciales FTP (hPanel → FTP Accounts)
- [ ] Descargar FileZilla
- [ ] Conectar a FTP
- [ ] Subir contenido de `out/` a `/public_html/`

### 5️⃣ Verificar Estructura (1 min)

En `/public_html/` debes ver:

- [ ] `index.html`
- [ ] `visual.html`
- [ ] `404.html`
- [ ] `sitemap.xml`
- [ ] `robots.txt`
- [ ] `.htaccess` (se copia automático desde `public/`)
- [ ] Carpeta `_next/`
- [ ] Carpeta `data/`
- [ ] Carpeta `icons/`
- [ ] Carpeta `locales/`

### 6️⃣ Configurar SSL (Ya debería estar activo)

- [ ] hPanel → **SSL**
- [ ] Verificar que SSL está instalado (Let's Encrypt)
- [ ] Si no: Click **Install SSL** y esperar 15-30 min

### 7️⃣ Optimizaciones Hostinger (Opcional)

- [ ] **Cloudflare** (Gratis):
  - hPanel → Advanced → Cloudflare → Enable
  - Mejora velocidad + seguridad

- [ ] **LiteSpeed Cache** (si tu plan lo tiene):
  - hPanel → Advanced → LiteSpeed Cache → Enable
  - CSS/JS Minify → ON
  - Image Optimization → ON

### 8️⃣ Probar Sitio (5 min)

- [ ] Abrir `https://tudominio.com`
- [ ] Verificar que carga con HTTPS (candado verde)
- [ ] Probar páginas:
  - [ ] Home: `/`
  - [ ] Visual: `/visual`
  - [ ] 404: `/pagina-inexistente`
- [ ] Verificar archivos SEO:
  - [ ] Sitemap: `/sitemap.xml`
  - [ ] Robots: `/robots.txt`
  - [ ] Manifest: `/manifest.webmanifest`

- [ ] Probar en mobile (celular)
- [ ] Probar tema claro/oscuro
- [ ] Probar cambio de idioma (en/es)

### 9️⃣ Google Search Console (10 min)

- [ ] Ir a https://search.google.com/search-console
- [ ] Add Property → `https://tudominio.com`
- [ ] Método de verificación: HTML tag
- [ ] Copiar código de verificación
- [ ] Agregar en `app/layout.tsx` (línea ~69):
  ```typescript
  verification: {
    google: 'tu-codigo-aqui',
  },
  ```
- [ ] Regenerar build: `npm run build`
- [ ] Resubir archivos a Hostinger
- [ ] Volver a Google → Click "Verify"
- [ ] Submit sitemap: `https://tudominio.com/sitemap.xml`

### 🔟 Testing SEO (5 min)

- [ ] **Rich Results Test:**
  https://search.google.com/test/rich-results
  - Pegar tu URL
  - Verificar que pase sin errores

- [ ] **PageSpeed Insights:**
  https://pagespeed.web.dev/
  - Verificar score 90+ (debería ser 95+)

- [ ] **Open Graph Preview:**
  https://www.opengraph.xyz/
  - Verificar que imagen OG se ve bien

- [ ] **Mobile Friendly:**
  https://search.google.com/test/mobile-friendly

---

## ✅ LISTO!

Si completaste todos los pasos, tu portfolio está:

- ✅ Deployado en Hostinger
- ✅ Con HTTPS activo
- ✅ SEO optimizado
- ✅ Rich Snippets funcionando
- ✅ Optimizado para velocidad
- ✅ Indexado en Google

---

## 🔄 Para Futuras Actualizaciones

Cuando hagas cambios:

1. Modificar código local
2. Probar: `npm run dev`
3. Build: `npm run build`
4. Subir solo archivos cambiados vía FTP
   - O reemplazar todo en File Manager

**Tip:** Guarda credenciales FTP en FileZilla para updates rápidos.

---

## 📞 ¿Problemas?

### Sitio no carga:
- Verificar que SSL está activo
- Limpiar cache navegador (Ctrl + Shift + R)
- Revisar `.htaccess`

### Error 500:
- Comentar líneas de `.htaccess` una por una
- Verificar permisos (644 archivos, 755 carpetas)

### CSS/JS no carga:
- Verificar carpeta `_next/` completa
- hPanel → Advanced → Clear Cache

### Ayuda:
- Chat Hostinger 24/7 (muy bueno)
- `DEPLOY_HOSTINGER.md` (guía completa)
- Google: "hostinger [tu problema]"

---

**¡Tu portfolio profesional está live! 🎉**

Compártelo en:
- LinkedIn (se verá con tu imagen OG)
- WhatsApp (preview con tu info)
- Twitter/X
- Email de reclutadores
