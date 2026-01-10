'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Importar dinámicamente para evitar problemas de SSR
const CodeEditor = dynamic(
  () => import('@uiw/react-textarea-code-editor'),
  { ssr: false }
);

interface AdvancedCodeEditorProps {
  initialCode: string;
  language?: string;
  readOnly?: boolean;
  onCodeChange?: (code: string) => void;
}

export default function AdvancedCodeEditor({
  initialCode,
  language = 'typescript',
  readOnly = true,
  onCodeChange,
}: AdvancedCodeEditorProps) {
  const [code, setCode] = useState(initialCode);

  const handleChange = (evn: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newCode = evn.target.value;
    setCode(newCode);
    onCodeChange?.(newCode);
  };

  return (
    <CodeEditor
      value={code}
      language={language}
      onChange={handleChange}
      padding={16}
      readOnly={readOnly}
      data-color-mode="dark"
      style={{
        fontSize: 14,
        backgroundColor: 'var(--background-secondary)',
        color: 'var(--foreground)',
        fontFamily:
          'ui-monospace, SFMono-Regular, SF Mono, Menlo, Consolas, Liberation Mono, monospace',
        minHeight: '300px',
        lineHeight: '1.6',
      }}
    />
  );
}
