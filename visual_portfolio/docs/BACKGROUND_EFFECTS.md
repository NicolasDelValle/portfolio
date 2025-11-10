# Guía de Uso de Efectos de Fondo

## Componentes Disponibles

### 1. `BackgroundEffects` - Fondo Global (Pantalla Completa)
Efecto de fondo que cubre toda la pantalla (fixed positioning).

**Uso en layout.tsx:**
```tsx
import BackgroundEffects from "@/components/BackgroundEffects";

<BackgroundEffects variant="particles" />
// o
<BackgroundEffects variant="code-rain" />
// o
<BackgroundEffects variant="both" />
```

---

### 2. `ContainedBackground` - Fondo Contenido (Sección Específica)
Efecto de fondo que solo aparece dentro de un contenedor específico.

**Uso en cualquier componente:**
```tsx
import ContainedBackground from "@/components/ContainedBackground";

// Ejemplo en Hero.tsx
<section className="min-h-screen relative">
  <ContainedBackground variant="particles" />
  
  <div className="relative z-10">
    {/* Tu contenido aquí */}
  </div>
</section>
```

**⚠️ Importante:** 
- El contenedor padre debe tener `position: relative`
- El contenido debe tener `position: relative` y `z-index` mayor para estar encima

---

## Ejemplos de Uso

### Ejemplo 1: Solo en Hero
```tsx
// Hero.tsx
export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative">
      <ContainedBackground variant="particles" />
      
      <div className="relative z-10">
        <h1>Mi Título</h1>
        {/* Resto del contenido */}
      </div>
    </section>
  );
}
```

### Ejemplo 2: En múltiples secciones
```tsx
// Projects.tsx
export default function Projects() {
  return (
    <section id="projects" className="min-h-screen relative bg-gray-50 dark:bg-gray-900">
      <ContainedBackground variant="particles" />
      
      <div className="relative z-10 py-20">
        {/* Proyectos */}
      </div>
    </section>
  );
}
```

### Ejemplo 3: En un card específico
```tsx
// Card.tsx
export default function Card() {
  return (
    <div className="w-96 h-64 relative rounded-lg overflow-hidden">
      <ContainedBackground variant="particles" />
      
      <div className="relative z-10 p-6">
        <h3>Card Title</h3>
        <p>Card content...</p>
      </div>
    </div>
  );
}
```

---

## Variantes Disponibles

| Variante | Descripción |
|----------|-------------|
| `particles` | Partículas conectadas con efecto de red |
| `code-rain` | Lluvia de código estilo Matrix |
| `both` | Ambos efectos combinados |

---

## Configuración Actual

### Hero.tsx
✅ Actualmente usa `ContainedBackground` solo en la sección Hero

### Layout.tsx
✅ Sin efectos globales (más rendimiento)

---

## Tips

1. **Performance**: Usa efectos contenidos en lugar de globales cuando sea posible
2. **Z-index**: Siempre asegura que el contenido tenga `z-10` o superior
3. **Position**: El contenedor padre debe tener `relative` para que funcione
4. **Overflow**: Si usas `rounded-lg` u otras formas, agrega `overflow-hidden`
