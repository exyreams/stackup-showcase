import React, { useState, useRef, useEffect } from "react";
import { FaCopy } from "react-icons/fa";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";

const Codeblock = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  const [language, setLanguage] = useState("");
  const codeRef = useRef(null);

  useEffect(() => {
    const result = hljs.highlightAuto(code);
    setLanguage(result.language);
  }, [code]);

  useEffect(() => {
    if (language) {
      codeRef.current.innerHTML = hljs.highlight(code, { language }).value;
    }
  }, [code, language]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (error) {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 1500);
    }
  };

  return (
    <div className="relative  rounded-md bg-stackup-gray-text/80 p-4">
      <pre className="font-mono whitespace-pre-wrap text-xs text-black">
        <code ref={codeRef} className={`language-${language}`} />
      </pre>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 z-10 rounded-md p-1 hover:bg-gray-700 dark:hover:bg-white"
        aria-label="Copy code to clipboard"
      >
        {copied ? (
          <span className="text-stackup-showcase">Copied!</span>
        ) : copyError ? (
          <span className="text-red-500">Error!</span>
        ) : (
          <FaCopy className="h-4 w-4 text-gray-400 dark:text-black" />
        )}
      </button>
    </div>
  );
};

export default Codeblock;
