# Sistema de Internacionalización (i18n)

## Cómo usar

### 1. Hook principal
```tsx
import { useI18n } from '@/hooks/useI18n';

const { t, language, changeToEnglish, changeToSpanish } = useI18n();
```

### 2. Traducir textos
```tsx
// Uso básico
{t('common.welcome')} // "Welcome" o "Bienvenido"

// Textos anidados
{t('portfolio.title')} // "My Portfolio" o "Mi Portafolio"
```

### 3. Cambiar idioma programáticamente
```tsx
// Cambiar a inglés
changeToEnglish();

// Cambiar a español
changeToSpanish();

// O usar setLanguage directamente
setLanguage('en'); // o 'es'
```

### 4. Verificar idioma actual
```tsx
if (language === 'en') {
  // Hacer algo específico para inglés
}
```

## Archivos de idiomas

Los archivos están en `public/locales/`:
- `en.json` - Inglés
- `es.json` - Español

### Estructura de ejemplo:
```json
{
  "common": {
    "welcome": "Welcome",
    "home": "Home"
  },
  "portfolio": {
    "title": "My Portfolio"
  }
}
```

## Características

- ✅ Detecta idioma del navegador automáticamente
- ✅ Guarda preferencia en localStorage
- ✅ Fallback a inglés si el idioma no es soportado
- ✅ Hook personalizado con métodos específicos
- ✅ TypeScript completo
- ✅ Sin redirecciones, todo en cliente

## Agregar nuevas traducciones

1. Edita `public/locales/en.json` y `public/locales/es.json`
2. Usa `t('nueva.clave')` en tus componentes
3. ¡Listo!