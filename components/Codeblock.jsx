import React, { useState, useRef } from "react";
import { FaCopy } from "react-icons/fa";
const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeRef.current.textContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative rounded-md bg-stackup-gray-text/80 p-4">
      <pre
        ref={codeRef}
        className="font-mono whitespace-pre-wrap text-xs text-black"
      >
        <code className="language-jsx">{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 rounded-md p-1 hover:bg-gray-700 dark:hover:bg-white"
      >
        {copied ? (
          <span className="text-stackup-showcase">Copied!</span>
        ) : (
          <FaCopy className="h-4 w-4 text-gray-400 dark:text-black" />
        )}
      </button>
    </div>
  );
};

export default CodeBlock;
