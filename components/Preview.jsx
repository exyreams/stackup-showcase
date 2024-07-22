import dynamic from "next/dynamic";
import Image from "next/image";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";

import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Preview = ({
  projectName,
  coverImage,
  repositoryLink,
  selectedTechStacks,
  description,
}) => {
  const renderDescription = () => {
    if (!description) return null;

    const codeBlockRegex =
      /<pre class="ql-syntax" spellcheck="false">([\s\S]*?)<\/pre>/g;
    const parts = description.split(codeBlockRegex);

    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const code = part.replace(/&nbsp;/g, " ");
        return (
          <div key={index} className="my-4 overflow-x-auto">
            <SyntaxHighlighter
              language="python"
              style={dracula}
              customStyle={{
                margin: "0",
                padding: "1em",
                borderRadius: "4px",
              }}
              wrapLines={true}
              wrapLongLines={true}
            >
              {code}
            </SyntaxHighlighter>
          </div>
        );
      } else {
        return (
          <div key={index}>
            <ReactQuill
              value={part}
              readOnly={true}
              theme="snow"
              modules={{ toolbar: false }}
            />
          </div>
        );
      }
    });
  };

  return (
    <div className="rounded-lg bg-stackup-gray p-12 dark:bg-stackup-gray/10">
      <h2 className="mb-4 text-xl font-bold text-black dark:text-white">
        Preview
      </h2>
      <div className="space-y-4">
        <div>
          <h3 className="text-md font-semibold text-black dark:text-white">
            {projectName}
          </h3>
        </div>
        {coverImage && (
          <div className="relative mt-2 h-64 w-full">
            <Image
              src={coverImage}
              alt="Project Cover"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        )}
        <div>
          <h3 className="text-md font-semibold text-black dark:text-white">
            Repository Link
          </h3>
          <p>
            <a
              href={repositoryLink}
              target="_blank"
              rel="noopener noreferrer"
              className="break-words text-sm text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
            >
              {repositoryLink}
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-md font-semibold text-black dark:text-white">
            Tech Stacks
          </h3>
          <ul
            className="mr-4 flex  list-disc flex-row flex-wrap pl-10
           text-sm text-black dark:text-white"
          >
            {selectedTechStacks.map((techStack) => (
              <li className="w-1/4" key={techStack.value}>
                {techStack.label}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold text-black dark:text-white">
            Description
          </h3>
          <div className="mt-2 overflow-hidden break-words rounded bg-stackup-gray-text/80 p-3 dark:text-black">
            {renderDescription()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
