# Portfolio - Documentación

## 🎨 Componentes Creados

### Estructura de Componentes en `/components/VisualComponents/`:

1. **Navbar.tsx** - Barra de navegación con:
   - Switch animado de tema (claro/oscuro)
   - Selector de idioma (EN/ES)
   - Navegación suave por scroll
   - Versión responsiva con menú móvil

2. **Hero.tsx** - Sección de presentación con:
   - Foto de perfil
   - Nombre y título profesional
   - Resumen personalizado
   - Botones de acción

3. **Skills.tsx** - Sección de habilidades con:
   - Cards organizadas por categoría
   - Tags de tecnologías
   - Diseño en grid responsivo

4. **Projects.tsx** - Sección de proyectos con:
   - Cards de proyectos destacados
   - Descripción multiidioma
   - Enlaces a GitHub
   - Tags de tecnologías

5. **Contact.tsx** - Sección de contacto con:
   - Información de contacto
   - Enlaces a redes sociales
   - Diseño con iconos

## 📁 Archivos de Datos

### `/public/data/basics.json`
Contiene información personal:
- Nombre, título, foto
- Email, teléfono, ubicación
- Links a redes sociales
- Habilidades organizadas

### `/public/data/projects.json`
Lista de proyectos con:
- Nombre y descripción en EN/ES
- Tecnologías utilizadas
- URLs de GitHub
- Flag de "featured"

## 🌐 Internacionalización (i18n)

El portfolio soporta:
- **Inglés (EN)** y **Español (ES)**
- Cambio dinámico de idioma
- Todas las keys están en `/public/locales/`

## 🎨 Temas

- **Modo Claro** y **Modo Oscuro**
- Variables CSS personalizadas en `globals.css`
- Switch animado en el navbar
- Persistencia del tema en localStorage

## 🚀 Características

✅ Diseño minimalista y moderno
✅ Totalmente responsivo
✅ Navegación suave por scroll
✅ Animaciones y transiciones
✅ Soporte para múltiples idiomas
✅ Tema claro y oscuro
✅ Optimizado para SEO
✅ Código limpio y mantenible

## 📝 Personalización

Para personalizar tu portfolio:

1. **Edita `/public/data/basics.json`** con tu información
2. **Edita `/public/data/projects.json`** con tus proyectos
3. **Agrega tu foto** en `/public/`
4. **Personaliza colores** en `globals.css` si es necesario

## 🎯 Buenas Prácticas Implementadas

- Componentes separados y reutilizables
- TypeScript para type safety
- Hooks personalizados (useI18n, useTheme)
- CSS con Tailwind y variables CSS
- Estructura de datos clara y escalable
- Accesibilidad con aria-labels
- Performance optimizada con Next.js
