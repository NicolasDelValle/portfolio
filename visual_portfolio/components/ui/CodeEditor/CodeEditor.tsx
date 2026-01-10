'use client';

import { useState } from 'react';
import CodeEditor from '@uiw/react-textarea-code-editor';

interface CodeEditorComponentProps {
  code: string;
  language?: string;
  readOnly?: boolean;
  showLineNumbers?: boolean;
  minHeight?: number;
  onChange?: (code: string) => void;
}

export default function CodeEditorComponent({
  code,
  language = 'typescript',
  readOnly = true,
  showLineNumbers = true,
  minHeight = 200,
  onChange,
}: CodeEditorComponentProps) {
  const [value, setValue] = useState(code);

  const handleChange = (evn: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = evn.target.value;
    setValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className="w-full rounded-lg overflow-hidden border border-border bg-[#0d1117]">
      <CodeEditor
        value={value}
        language={language}
        placeholder={`Please enter ${language} code.`}
        onChange={handleChange}
        padding={15}
        readOnly={readOnly}
        data-color-mode="dark"
        style={{
          fontSize: 13,
          backgroundColor: '#0d1117',
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          minHeight: `${minHeight}px`,
        }}
        className="code-editor-custom"
      />
    </div>
  );
}
