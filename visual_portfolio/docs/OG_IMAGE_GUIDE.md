# 🎨 Guía para Crear Imagen Open Graph (OG Image)

## ¿Qué es la imagen OG?

Es la imagen que aparece cuando compartes tu portfolio en:
- WhatsApp
- LinkedIn
- Twitter/X
- Facebook
- Slack
- Discord
- Cualquier red social o chat

## 📏 Especificaciones Técnicas

- **Tamaño:** 1200px × 630px (obligatorio)
- **Formato:** PNG o JPG
- **Peso máximo:** 8 MB (recomendado: menos de 300 KB)
- **Ubicación:** `public/og-image.png`

## 🎨 Diseño Sugerido

### Opción 1: Minimalista Profesional
```
┌────────────────────────────────────────────────┐
│                                                 │
│                                                 │
│           NICOLÁS DEL VALLE                     │
│           Full Stack Developer                  │
│                                                 │
│    React · Next.js · TypeScript · Node.js      │
│                                                 │
│    📧 contact@nicolasdelvalle.dev              │
│    📍 Montevideo, Uruguay                       │
│                                                 │
│                                                 │
└────────────────────────────────────────────────┘
```

**Colores sugeridos:**
- Fondo: #1e1e1e (oscuro) o #ffffff (claro)
- Texto principal: #ffffff o #1e1e1e
- Acento: #3b82f6 (azul) - tu color primario

### Opción 2: Con foto/logo
```
┌────────────────────────────────────────────────┐
│                                                 │
│   [Logo/Foto]     NICOLÁS DEL VALLE            │
│      círculo       Full Stack Developer        │
│                                                 │
│                    Especializado en:           │
│                    React · Next.js · TypeScript│
│                                                 │
│                    contact@nicolasdelvalle.dev │
│                                                 │
└────────────────────────────────────────────────┘
```

### Opción 3: Tech Style (VS Code theme)
```
┌────────────────────────────────────────────────┐
│  // Nicolás Del Valle                          │
│  const developer = {                           │
│    role: "Full Stack Developer",               │
│    skills: ["React", "Next.js", "TypeScript"], │
│    location: "Montevideo, Uruguay",            │
│    contact: "contact@nicolasdelvalle.dev"      │
│  }                                             │
│                                                 │
│  export default developer;                     │
└────────────────────────────────────────────────┘
```

## 🛠️ Herramientas Recomendadas

### 1. Canva (Más Fácil) ⭐ RECOMENDADO
**URL:** https://canva.com

**Pasos:**
1. Crear cuenta gratuita
2. Buscar "Open Graph" en plantillas
3. Ajustar a 1200×630px
4. Personalizar con tu info:
   - Tu nombre
   - "Full Stack Developer"
   - Tecnologías (React, Next.js, TypeScript)
   - Email
   - Ubicación
5. Descargar como PNG
6. Guardar en `public/og-image.png`

**Templates sugeridos en Canva:**
- "Professional LinkedIn Banner"
- "Tech Developer Card"
- "Minimalist Business Card"

### 2. Figma (Más Control)
**URL:** https://figma.com

**Pasos:**
1. Crear archivo nuevo
2. Frame de 1200×630px
3. Diseñar tu imagen
4. Exportar como PNG @ 2x

**Plugin útil:** "Unsplash" para fondos

### 3. OG Image Playground (Automático)
**URL:** https://og-playground.vercel.app/

**Pasos:**
1. Abrir la web
2. Escribir tu contenido
3. Personalizar colores
4. Copiar código o descargar imagen

### 4. Generadores Online

#### A. Social Image Generator
**URL:** https://www.bannerbear.com/demos/social-media-image-generator/

#### B. Meta Tags
**URL:** https://metatags.io/

**Incluye preview en tiempo real!**

## 📝 Contenido Sugerido

### Texto principal:
```
Nicolás Del Valle
Full Stack Developer

React · Next.js · TypeScript · Node.js
Cloud Solutions · Azure · AWS

contact@nicolasdelvalle.dev
Montevideo, Uruguay
```

### Elementos visuales:
- Logo de tecnologías (React, Next.js, TypeScript)
- Tu logo personal (nico-logo.svg)
- Patrón de fondo sutil
- Gradiente azul (#3b82f6)

## ✅ Checklist de Calidad

Antes de exportar, verifica:
- [ ] Tamaño exacto: 1200×630px
- [ ] Texto legible (min 18px)
- [ ] Alto contraste (texto vs fondo)
- [ ] Email visible y correcto
- [ ] No hay elementos cortados
- [ ] Peso menor a 300 KB
- [ ] Formato PNG o JPG

## 🎯 Tips Pro

1. **Usa tipografía system:**
   - Sans-serif para profesionalismo
   - Inter, Roboto, o SF Pro

2. **Espaciado generoso:**
   - Mínimo 60px de margen
   - Respira el diseño

3. **Jerarquía visual:**
   - Nombre: más grande y bold
   - Título: mediano
   - Detalles: pequeño

4. **Colores consistentes:**
   - Usa tu color primario (#3b82f6)
   - Máximo 3 colores

5. **Mobile preview:**
   - El texto debe ser legible en thumbnails pequeños

## 🧪 Cómo Probar

Después de crear la imagen:

1. **Preview local:**
   - Guarda en `public/og-image.png`
   - Abre https://www.opengraph.xyz/
   - Pega tu URL (después de deploy)

2. **Preview en desarrollo:**
   - Usa https://metatags.io/
   - Upload tu imagen
   - Ve cómo se verá en cada red

3. **Validar:**
   - Facebook Debugger: https://developers.facebook.com/tools/debug/
   - LinkedIn Inspector: https://www.linkedin.com/post-inspector/
   - Twitter Validator: https://cards-dev.twitter.com/validator

## 📦 Entregables Finales

Después de crear, deberías tener:

```
public/
  ├── og-image.png          (1200×630) ✅
  ├── og-image-square.png   (1200×1200) [opcional]
  ├── favicon.ico           (32×32 o 64×64) ✅
  ├── icon-192.png          (192×192) ✅
  ├── icon-512.png          (512×512) ✅
  └── apple-touch-icon.png  (180×180) [opcional]
```

## 🎨 Paleta de Colores Recomendada

Basado en tu tema actual:

```css
/* Oscuro profesional */
background: #1e1e1e
text: #ffffff
accent: #3b82f6

/* Claro profesional */
background: #ffffff
text: #1e1e1e
accent: #3b82f6

/* Gradiente moderno */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
text: #ffffff
```

## 💡 Inspiración

Busca en Google:
- "developer portfolio og image"
- "tech professional social card"
- "minimalist developer card"

Sitios para inspirarte:
- dribbble.com/tags/social-card
- behance.net/search/projects?search=og+image
- og-image.vercel.app (ejemplos de Vercel)

## ⚡ Quick Start (5 minutos)

**Si tienes prisa:**

1. Ve a https://og-playground.vercel.app/
2. Pega este contenido:
   ```
   Nicolás Del Valle
   Full Stack Developer
   React · Next.js · TypeScript
   ```
3. Ajusta colores: Fondo #1e1e1e, Texto #ffffff
4. Download image
5. Renombra a `og-image.png`
6. Mueve a carpeta `public/`
7. ✅ Done!

## 📞 ¿Necesitas ayuda?

Si no sabes diseñar:
1. Usa Canva con plantilla prediseñada
2. O mándame tu info y te doy un ejemplo exacto
3. O usa OG Playground (automático)

**No te preocupes, es más fácil de lo que parece! 💪**
