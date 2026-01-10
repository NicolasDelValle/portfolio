# Code Editor Components

Componentes de editor de código con syntax highlighting usando `@uiw/react-textarea-code-editor`.

## Instalación

```bash
npm install @uiw/react-textarea-code-editor
```

## Componentes

### 1. CodeEditor (Simple)

Editor de código básico y limpio.

```tsx
import CodeEditor from '@/components/ui/CodeEditor';

<CodeEditor
  code="const hello = 'world';"
  language="typescript"
  readOnly={true}
  minHeight={300}
/>
```

**Props:**
- `code` (string): Código a mostrar
- `language` (string): Lenguaje de programación
- `readOnly` (boolean): Si es solo lectura
- `showLineNumbers` (boolean): Mostrar números de línea
- `minHeight` (number): Altura mínima en pixels
- `onChange` (function): Callback cuando cambia el código

### 2. AdvancedCodeEditor (Minimalista)

Editor simplificado con solo código, números de línea y syntax highlighting.

```tsx
import { AdvancedCodeEditor } from '@/components/ui/CodeEditor';

<AdvancedCodeEditor
  initialCode={codeString}
  language="typescript"
  readOnly={true}
  onCodeChange={(newCode) => console.log(newCode)}
/>
```

**Props:**
- `initialCode` (string): Código inicial
- `language` (string): Lenguaje de programación
- `readOnly` (boolean): Solo lectura (default: true)
- `onCodeChange` (function): Callback cuando cambia el código

## Características

### AdvancedCodeEditor incluye:

✅ **Minimalista y limpio**
- Sin header ni footer
- Solo código con syntax highlighting
- Números de línea automáticos
- Borde redondeado con estilo del tema

✅ **Syntax Highlighting**
- Colores automáticos según el lenguaje
- Usa las variables CSS de tu tema
- Modo oscuro

✅ **Integración perfecta**
- Usa `var(--background-secondary)` para el fondo
- Usa `var(--foreground)` para el texto
- Usa `var(--border)` para los bordes
- Se adapta al tema actual

## Lenguajes Soportados

La librería soporta 30+ lenguajes incluyendo:
- TypeScript, JavaScript, Python, Java, C#, C++
- Go, Rust, PHP, Ruby, Swift, Kotlin
- SQL, HTML, CSS, JSON, Markdown, YAML
- Bash y más...

## Ejemplo de Uso en CodeSnippetScreen

```tsx
<AdvancedCodeEditor
  initialCode={snippet.code}
  language={snippet.language}
  readOnly={true}
/>
```

## Estilos

El componente hereda estilos del tema actual mediante variables CSS:
- `--background-secondary`: Color de fondo del editor
- `--border`: Color de bordes
- `--foreground`: Color de texto

## Notas

- El componente usa `dynamic import` para evitar problemas de SSR
- Compatible con dark mode
- Totalmente tipado con TypeScript
- Los números de línea se muestran automáticamente
