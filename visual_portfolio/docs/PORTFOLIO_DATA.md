# Portfolio Data Configuration

Este portfolio está configurado para cargar todos los datos desde un único archivo JSON, lo que permite actualizarlo fácilmente.

## Configuración de la URL de Datos

Edita la constante `PORTFOLIO_DATA_URL` en `/app/page.tsx`:

```typescript
// Archivo local (por defecto)
const PORTFOLIO_DATA_URL = '/data/portfolio.json';

// O usa un GitHub Gist
const PORTFOLIO_DATA_URL = 'https://gist.githubusercontent.com/NicolasDelValle/abc123/raw/portfolio.json';
```

## Cómo usar GitHub Gist

1. **Crear un Gist:**
   - Ve a https://gist.github.com
   - Crea un nuevo Gist público con el nombre `portfolio.json`
   - Copia el contenido de `/public/data/portfolio.json`
   - Guarda el Gist

2. **Obtener la URL Raw:**
   - Haz clic en el botón "Raw" en tu Gist
   - Copia la URL (será algo como: `https://gist.githubusercontent.com/usuario/id-del-gist/raw/portfolio.json`)

3. **Actualizar la constante:**
   - Abre `/app/page.tsx`
   - Cambia `PORTFOLIO_DATA_URL` por tu URL del Gist
   - Haz build y deploy

## Estructura del JSON

```json
{
  "basics": {
    "name": "Tu Nombre",
    "label": "Tu Título",
    "email": "tu@email.com",
    ...
  },
  "projects": [...],
  "services": [...]
}
```

## Ventajas de usar GitHub Gist

✅ Editar el portfolio sin tocar el código
✅ Actualizaciones en tiempo real (el fetch se hace en el cliente)
✅ Versionamiento automático con historial de cambios
✅ Fácil de compartir y colaborar
✅ No requiere rebuild para actualizar contenido (SSG + client-side fetch)

## Cómo Actualizar

### Con Gist (Recomendado):
1. Edita tu Gist en GitHub
2. Guarda los cambios
3. Los cambios aparecerán la próxima vez que se recargue la página

### Con archivo local:
1. Edita `/public/data/portfolio.json`
2. Haz build y deploy

## Nota sobre SSG
Aunque el sitio se genera estáticamente (SSG), los datos se cargan en el cliente mediante `fetch()`, por lo que puedes actualizar el contenido del Gist sin necesidad de hacer rebuild del sitio.

