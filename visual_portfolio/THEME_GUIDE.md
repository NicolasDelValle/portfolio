# Sistema de Temas - Guía de Uso

## 🎨 Colores Disponibles (Basados en VS Code)

### Light Theme (VS Code Light)
- **background**: `#ffffff` (Blanco puro)
- **foreground**: `#383a42` (Gris oscuro texto)
- **primary**: `#0969da` (Azul VS Code)
- **secondary**: `#6f42c1` (Púrpura)
- **accent**: `#d73a49` (Rojo)
- **success**: `#28a745` (Verde)
- **warning**: `#ffc107` (Amarillo)
- **muted**: `#f6f8fa` (Gris muy claro)
- **sidebar**: `#f3f3f3` (Gris sidebar)
- **border**: `#e1e4e8` (Gris borde)
- **hover**: `#f0f0f0` (Gris hover)
- **selection**: `#c8e1ff` (Azul selección)

### Dark Theme (VS Code Dark)
- **background**: `#1e1e1e` (Negro VS Code)
- **foreground**: `#d4d4d4` (Gris claro texto)
- **primary**: `#007acc` (Azul claro)
- **secondary**: `#c586c0` (Rosa púrpura)
- **accent**: `#f44747` (Rojo claro)
- **success**: `#4ec9b0` (Verde agua)
- **warning**: `#ffcc02` (Amarillo brillante)
- **muted**: `#252526` (Gris oscuro)
- **sidebar**: `#2d2d30` (Gris sidebar oscuro)
- **border**: `#464647` (Gris borde oscuro)
- **hover**: `#2a2d2e` (Gris hover oscuro)
- **selection**: `#264f78` (Azul selección oscuro)

## 📝 Cómo Usar (Tailwind v3)

### 1. Usar el hook en componentes
```tsx
'use client';

import { useTheme } from '@/context/themeContext';

export default function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div>
      <p>Tema actual: {theme}</p>
      <button onClick={toggleTheme}>Cambiar tema</button>
    </div>
  );
}
```

### 2. Usar clases de Tailwind (Configurado en tailwind.config.js):
```tsx
<div className="bg-background dark:bg-background text-foreground">
  <h1 className="text-foreground">Título</h1>
  <p className="text-foreground/70">Párrafo con opacidad</p>
  <button className="bg-primary hover:bg-primary/80 text-white">
    Botón
  </button>
</div>
```

### 3. Usar variaciones de background:
```tsx
<div className="bg-background-secondary">Fondo secundario</div>
<div className="bg-background-card border border-border">Card</div>
<div className="bg-background-code p-4 rounded">Código</div>
<div className="bg-sidebar">Sidebar</div>
```

### 4. Ejemplos con los colores VS Code:
```tsx
{/* Botones con colores VS Code */}
<button className="bg-primary text-white hover:bg-primary/80">Primary</button>
<button className="bg-secondary text-white hover:bg-secondary/80">Secondary</button>
<button className="bg-accent text-white hover:bg-accent/80">Accent</button>
<button className="bg-success text-white hover:bg-success/80">Success</button>
<button className="bg-warning text-black hover:bg-warning/80">Warning</button>

{/* Cards con estilo VS Code */}
<div className="bg-background-card border border-border rounded-lg p-4 hover:bg-hover">
  <div className="bg-sidebar p-3 rounded">
    <h3 className="text-foreground">VS Code Style Card</h3>
  </div>
</div>

{/* Bordes y divisores */}
<div className="border-t border-border"></div>
<div className="divide-y divide-border"></div>
```

### 5. Usar con dark mode automático:
```tsx
{/* Cambios automáticos entre light/dark */}
<div className="bg-background text-foreground border border-border">
  <p className="text-foreground/60">Texto con opacidad</p>
  <button className="bg-muted hover:bg-hover">Hover effect</button>
</div>
```

## 🔄 El botón de cambio de tema

Ya está incluido en el layout y aparece en la esquina superior derecha.
Muestra un icono de luna en modo claro y un icono de sol en modo oscuro.

## 💾 Persistencia

El tema se guarda automáticamente en `localStorage` y se restaura al recargar la página.
Si es la primera visita, detecta la preferencia del sistema operativo del usuario.
