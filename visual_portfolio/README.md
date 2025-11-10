# 🚀 Portfolio - Nicolás Del Valle

Modern, responsive portfolio built with Next.js 15, TypeScript, and Tailwind CSS. Fully optimized for SEO and social media sharing.

## ✨ Features

- 🎨 **VS Code-inspired design** - Professional developer aesthetic
- 🌍 **Internationalization** - English & Spanish support
- 🌓 **Dark/Light mode** - Theme toggle with persistence
- 📱 **Fully Responsive** - Mobile-first design
- ⚡ **SEO Optimized** - Rich snippets, Open Graph, Twitter Cards
- 🔍 **Schema.org** - Structured data for better search results
- 📊 **PWA Ready** - Progressive Web App capabilities
- 🎯 **Type-safe** - Full TypeScript support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Validate SEO configuration
npm run check:seo
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

## 📂 Project Structure

```
visual_portfolio/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Home page with portfolio sections
│   ├── visual/             # Visual portfolio section (under construction)
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── VisualComponents/   # Main portfolio sections
│   │   ├── Hero.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Navbar.tsx
│   ├── StructuredData.tsx  # Schema.org JSON-LD
│   └── ui/                 # Reusable UI components
├── public/
│   ├── data/
│   │   └── portfolio.json  # Portfolio data (editable via Gist)
│   ├── locales/            # i18n translations (en, es)
│   └── robots.txt          # Static robots file
├── types/
│   └── portfolioTypes.ts   # TypeScript definitions
└── hooks/
    └── useI18n.ts          # Internationalization hook
```

## 🎯 SEO Configuration

This portfolio is fully optimized for search engines and social media. **See detailed guides:**

- **[docs/SEO_SETUP_GUIDE.md](./docs/SEO_SETUP_GUIDE.md)** - Complete setup instructions
- **[docs/SEO_SUMMARY.md](./docs/SEO_SUMMARY.md)** - Quick reference
- **[docs/OG_IMAGE_GUIDE.md](./docs/OG_IMAGE_GUIDE.md)** - Create social media images

### What's Configured:

✅ Meta tags (title, description, keywords)  
✅ Open Graph (Facebook, WhatsApp, LinkedIn)  
✅ Twitter Cards  
✅ Schema.org JSON-LD (Rich Snippets)  
✅ robots.txt & sitemap.xml  
✅ PWA manifest  
✅ Internationalization (es-UY, en-US)

### Before Deploying:

1. **Create OG Image** (`public/og-image.png` - 1200×630px)
2. **Create Favicons** (favicon.ico, icon-192.png, icon-512.png)
3. **Update Domain** - Replace `nicolasdelvalle.dev` in:
   - `app/layout.tsx`
   - `app/sitemap.ts`
   - `app/robots.ts`
   - `app/page.tsx`
4. **Verify Contact Info** in `public/data/portfolio.json`

Run `npm run check:seo` to validate your configuration.

## 🎨 Customization

### Update Portfolio Data

Edit `public/data/portfolio.json` or use the [GitHub Gist](https://gist.github.com/NicolasDelValle/00ff1302aeebbe61c304a8d9253aa6b1):

```json
{
  "basics": {
    "name": "Your Name",
    "label": "Your Title",
    "email": "your@email.com",
    "phone": "+123 456 789",
    "summary": {
      "en": "Your bio in English",
      "es": "Tu bio en español"
    }
  }
}
```

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```js
colors: {
  primary: '#3b82f6',    // Blue
  background: '#ffffff', // Light mode
  foreground: '#1e1e1e', // Dark mode
}
```

### Add Translations

Edit `public/locales/en.json` and `es.json`:

```json
{
  "portfolio": {
    "newKey": "New translation"
  }
}
```

Use in components:
```tsx
const { t } = useI18n();
<h1>{t('portfolio.newKey')}</h1>
```

**Ver guía completa:** [docs/I18N_GUIDE.md](./docs/I18N_GUIDE.md)

## 🌐 Deployment

Este portfolio está configurado para **generar un sitio completamente estático** y deployarse en **Hostinger**.

### Generar Build Estático

```bash
# Generar archivos estáticos en carpeta 'out/'
npm run build

# Probar el build localmente
npx serve out
```

### Deploy a Hostinger

1. **File Manager (Recomendado):**
   - Login a hPanel
   - File Manager → `/public_html/`
   - Subir contenido de carpeta `out/`

2. **FTP (Más rápido para updates):**
   - Usar FileZilla o similar
   - Conectar a tu cuenta Hostinger
   - Subir archivos a `/public_html/`

**Ver guía completa:** [docs/DEPLOY_HOSTINGER.md](./docs/DEPLOY_HOSTINGER.md)

### Otras Opciones de Hosting

También compatible con:
- GitHub Pages, Netlify, Vercel
- AWS S3, Azure Static Web Apps
- Cualquier hosting con Apache/Nginx

**Ver:** [docs/DEPLOY_STATIC.md](./docs/DEPLOY_STATIC.md)

### Después del Deploy:

1. **Verify in Google Search Console**
   - Add your site
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`
   
2. **Test SEO:**
   - [Rich Results Test](https://search.google.com/test/rich-results)
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [OpenGraph Preview](https://www.opengraph.xyz/)

3. **Optional:**
   - Setup Google Analytics
   - Configure custom domain
   - Enable Vercel Analytics

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 3
- **UI Components:** Custom + Lucide Icons
- **Data Fetching:** Static + Dynamic (Gist)
- **Deployment:** Vercel
- **SEO:** Next.js Metadata API

## 📊 Performance

- ✅ **Lighthouse Score:** 95+ (all categories)
- ⚡ **First Contentful Paint:** < 1.5s
- 📱 **Mobile Friendly:** 100%
- ♿ **Accessibility:** WCAG AA compliant
- 🔍 **SEO:** 100/100

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs
- Suggest features
- Use as template (with attribution)

## 📝 License

MIT License - feel free to use this as a template for your own portfolio!

## 📞 Contact

- **Email:** contact@nicolasdelvalle.dev
- **LinkedIn:** [nico-del-valle-dev](https://www.linkedin.com/in/nico-del-valle-dev/)
- **GitHub:** [@NicolasDelValle](https://github.com/NicolasDelValle)

---

**Built with ❤️ using Next.js and TypeScript**

