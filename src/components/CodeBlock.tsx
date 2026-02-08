import { useState } from "react";
import { Copy, Check, FileCode2 } from "lucide-react";

interface CodeBlockProps {
  code: string;
  programNumber: number;
  language?: string;
}

const CodeBlock = ({ code, programNumber, language = "C" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <div className="code-wrapper">
      {/* Header with dots and copy button */}
      <div className="code-header">
        <div className="flex items-center gap-3">
        <div className="code-dots">
          <div className="code-dot" style={{ background: 'hsl(0 72% 51% / 0.8)' }} />
          <div className="code-dot" style={{ background: 'hsl(45 93% 47% / 0.8)' }} />
          <div className="code-dot" style={{ background: 'hsl(142 71% 45% / 0.8)' }} />
        </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <FileCode2 size={14} />
            <span>program{programNumber}.{language.toLowerCase()}</span>
          </div>
        </div>
        
        <button
          onClick={handleCopy}
          className={`copy-btn flex items-center gap-1.5 ${copied ? "copied" : ""}`}
          aria-label={`Copy code for program ${programNumber}`}
        >
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;