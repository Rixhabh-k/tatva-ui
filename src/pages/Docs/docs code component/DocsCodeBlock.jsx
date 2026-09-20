import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DocsCodeBlock = ({ code, language = "jsx" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="docs-code-block">

      {/* Header */}
      <div className="docs-code-header">

        <div className="docs-code-title">
          <span className="docs-code-dot"></span>
          <span>{language}</span>
        </div>

        <button
          className="docs-code-copy"
          onClick={handleCopy}
          type="button"
          aria-label="Copy code"
        >
          {copied ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m5 12 4 4L19 6" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <rect x="9" y="9" width="11" height="11" rx="2" />
              <path d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3" />
            </svg>
          )}
        </button>

      </div>

      {/* Code */}
      <div className="docs-code-content">

        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            padding: "20px 0",
            background: "#050505",
            fontSize: "13px",
            lineHeight: "1.7",
          }}
          lineNumberStyle={{
            color: "#383838",
            minWidth: "45px",
            paddingRight: "15px",
            textAlign: "right",
            userSelect: "none",
          }}
          codeTagProps={{
            style: {
              fontFamily:
                '"JetBrains Mono", "Fira Code", "SFMono-Regular", Consolas, monospace',
            },
          }}
        >
          {code}
        </SyntaxHighlighter>

      </div>
    </div>
  );
};

export default DocsCodeBlock;