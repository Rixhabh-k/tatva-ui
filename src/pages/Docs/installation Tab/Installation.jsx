import React, { useState } from "react";
import "./installation.css";

const Installation = () => {
  const [copied, setCopied] = useState(false);

  const installCommand = "npm install tatva";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(installCommand);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section className="docs-installation">
      <h2>Installation</h2>

      <div className="installation-block">

        {/* Header */}
        <div className="installation-tabs">

          <div className="installation-tab active">
            <span className="npm-icon">■</span>
            npm
          </div>

          {/* Copy Button */}
          <button
            className="installation-copy"
            onClick={handleCopy}
            aria-label="Copy installation command"
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
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
            )}
          </button>

        </div>

        {/* Code */}
        <div className="installation-code">
          <code>
            <span className="command-npm">npm</span>{" "}
            <span className="command-install">install</span>{" "}
            <span className="command-package">tatva</span>
          </code>
        </div>

      </div>
    </section>
  );
};

export default Installation;