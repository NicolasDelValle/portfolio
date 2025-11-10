# 📚 Documentación del Portfolio

Esta carpeta contiene toda la documentación del proyecto.

## 📖 Índice de Documentación

### 🚀 Deploy y Configuración

- **[HOSTINGER_CHECKLIST.md](./HOSTINGER_CHECKLIST.md)** ⭐ START HERE
  - Checklist paso a paso (30 min)
  - Deploy específico para Hostinger
  - Todo lo que necesitas para ir a producción

- **[DEPLOY_HOSTINGER.md](./DEPLOY_HOSTINGER.md)**
  - Guía completa de deploy a Hostinger
  - File Manager + FTP
  - Configuración SSL, Cloudflare, LiteSpeed
  - Troubleshooting

- **[DEPLOY_STATIC.md](./DEPLOY_STATIC.md)**
  - Deploy a otros hostings (GitHub Pages, Netlify, etc.)
  - Configuración de servidores (Apache, Nginx)
  - Alternativas de hosting

### 🔍 SEO y Optimización

- **[TODO_SEO.md](./TODO_SEO.md)** ⭐ CHECKLIST
  - Lista de tareas SEO pendientes
  - Pasos numerados
  - Tiempos estimados

- **[SEO_SETUP_GUIDE.md](./SEO_SETUP_GUIDE.md)**
  - Guía completa de configuración SEO
  - Metadata, Schema.org, Open Graph
  - Google Search Console
  - Testing y validación

- **[SEO_SUMMARY.md](./SEO_SUMMARY.md)**
  - Resumen de lo configurado
  - Qué falta por hacer
  - Resultados esperados

- **[SEO_VISUAL_EXAMPLES.md](./SEO_VISUAL_EXAMPLES.md)**
  - Cómo se verá en Google
  - Preview en redes sociales
  - Rich Snippets ejemplos

- **[OG_IMAGE_GUIDE.md](./OG_IMAGE_GUIDE.md)**
  - Cómo crear imagen Open Graph (1200×630)
  - Herramientas recomendadas
  - Ejemplos de diseño

### 🎨 Personalización

- **[I18N_GUIDE.md](./I18N_GUIDE.md)**
  - Sistema de internacionalización
  - Agregar nuevos idiomas
  - Traducciones

- **[THEME_GUIDE.md](./THEME_GUIDE.md)**
  - Sistema de temas (claro/oscuro)
  - Personalizar colores
  - Agregar nuevos temas

### 📊 Otros

- **[WARP.md](./WARP.md)**
  - Información del proyecto Warp
  - (Si aplica)

---

## 🎯 Por Dónde Empezar

### Si vas a deployar por primera vez:
1. Lee **HOSTINGER_CHECKLIST.md**
2. Sigue el checklist paso a paso
3. Consulta **DEPLOY_HOSTINGER.md** si necesitas más detalles

### Si quieres mejorar el SEO:
1. Lee **TODO_SEO.md** (checklist de tareas)
2. Consulta **SEO_SETUP_GUIDE.md** para instrucciones
3. Usa **OG_IMAGE_GUIDE.md** para crear imágenes

### Si quieres personalizar:
1. **I18N_GUIDE.md** para agregar idiomas
2. **THEME_GUIDE.md** para cambiar colores/temas

---

## 📝 Estructura del Proyecto

```
visual_portfolio/
├── docs/                    # ← Estás aquí
│   ├── HOSTINGER_CHECKLIST.md
│   ├── DEPLOY_HOSTINGER.md
│   ├── SEO_SETUP_GUIDE.md
│   └── ...
├── app/                     # Next.js App Router
├── components/              # Componentes React
├── public/                  # Archivos estáticos
│   ├── data/
│   │   └── portfolio.json   # Tus datos
│   ├── locales/            # Traducciones
│   └── .htaccess           # Config Apache/Hostinger
└── README.md               # Documentación principal
```

---

## 🆘 Ayuda Rápida

### ¿Cómo hacer el build?
```bash
npm run build
```

### ¿Dónde está mi build?
Carpeta `out/` - subes TODO ese contenido a Hostinger

### ¿Cómo validar SEO?
```bash
npm run check:seo
```

### ¿Qué falta antes de deployar?
Ver **TODO_SEO.md** o ejecutar `npm run check:seo`

---

## 📞 Soporte

- **Chat Hostinger:** 24/7 en hPanel
- **Documentación:** Revisa los archivos de esta carpeta
- **Issues:** Crea un issue en el repositorio

---

**Última actualización:** Noviembre 2025
