/* eslint-disable no-template-curly-in-string */
import dynamic from "next/dynamic.js";
import Image from "next/image";
import React, { useState, useCallback } from "react";
import { BsInfoCircle } from "react-icons/bs";
import CreatableSelect from "react-select/creatable";
import "react-quill/dist/quill.snow.css";

import { Button, Preview } from "../components";
import { showcaseCover } from "../assets";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const techStacksOptions = [
  { value: "Ansible", label: "Ansible" },
  { value: "Angular", label: "Angular" },
  { value: "AngularJS", label: "AngularJS" },
  { value: "Assembly", label: "Assembly" },
  { value: "ASP.NET Core", label: "ASP.NET Core" },
  { value: "AWS", label: "AWS" },
  { value: "Backbone.js", label: "Backbone.js" },
  { value: "Bootstrap", label: "Bootstrap" },
  { value: "C", label: "C" },
  { value: "C#", label: "C#" },
  { value: "C++", label: "C++" },
  { value: "CSS", label: "CSS" },
  { value: "D", label: "D" },
  { value: "Dart", label: "Dart" },
  { value: "Django", label: "Django" },
  { value: "Django REST Framework", label: "Django REST Framework" },
  { value: "Docker", label: "Docker" },
  { value: "Elixir", label: "Elixir" },
  { value: "Elm", label: "Elm" },
  { value: "Ember.js", label: "Ember.js" },
  { value: "Erlang", label: "Erlang" },
  { value: "Ethereum", label: "Ethereum" },
  { value: "Ether.js", label: "Ether.js" },
  { value: "Express", label: "Express" },
  { value: "Factor", label: "Factor" },
  { value: "F#", label: "F#" },
  { value: "Forth", label: "Forth" },
  { value: "Foundry", label: "Foundry" },
  { value: "Fuel", label: "Fuel" },
  { value: "Flask", label: "Flask" },
  { value: "Gatsby", label: "Gatsby" },
  { value: "Go", label: "Go" },
  { value: "Git", label: "Git" },
  { value: "Hardhat", label: "Hardhat" },
  { value: "Haskell", label: "Haskell" },
  { value: "HTML", label: "HTML" },
  { value: "IPFS", label: "IPFS" },
  { value: "Java", label: "Java" },
  { value: "JavaScript", label: "JavaScript" },
  { value: "Jest", label: "Jest" },
  { value: "Julia", label: "Julia" },
  { value: "Kotlin", label: "Kotlin" },
  { value: "Kubernetes", label: "Kubernetes" },
  { value: "Lisp", label: "Lisp" },
  { value: "Lua", label: "Lua" },
  { value: "Material UI", label: "Material UI" },
  { value: "Meteor", label: "Meteor" },
  { value: "MongoDB", label: "MongoDB" },
  { value: "Mocha", label: "Mocha" },
  { value: "Move", label: "Move" },
  { value: "MySQL", label: "MySQL" },
  { value: "NestJS", label: "NestJS" },
  { value: "Next.js", label: "Next.js" },
  { value: "Node.js", label: "Node.js" },
  { value: "Objective-C", label: "Objective-C" },
  { value: "OCaml", label: "OCaml" },
  { value: "Pascal", label: "Pascal" },
  { value: "Perl", label: "Perl" },
  { value: "PHP", label: "PHP" },
  { value: "Polymer", label: "Polymer" },
  { value: "Postman", label: "Postman" },
  { value: "Python", label: "Python" },
  { value: "R", label: "R" },
  { value: "Racket", label: "Racket" },
  { value: "React", label: "React" },
  { value: "React Native", label: "React Native" },
  { value: "Remix", label: "Remix" },
  { value: "Ruby", label: "Ruby" },
  { value: "Rust", label: "Rust" },
  { value: "Scala", label: "Scala" },
  { value: "Solana", label: "Solana" },
  { value: "Solidity", label: "Solidity" },
  { value: "Swift", label: "Swift" },
  { value: "Svelte", label: "Svelte" },
  { value: "Tailwind CSS", label: "Tailwind CSS" },
  { value: "Terraform", label: "Terraform" },
  { value: "Three.js", label: "Three.js" },
  { value: "Truffle", label: "Truffle" },
  { value: "TypeScript", label: "TypeScript" },
  { value: "Unity", label: "Unity" },
  { value: "Unreal Engine", label: "Unreal Engine" },
  { value: "Vue.js", label: "Vue.js" },
  { value: "Vyper", label: "Vyper" },
  { value: "Waffle", label: "Waffle" },
  { value: "Web3.js", label: "Web3.js" },
  { value: "Webpack", label: "Webpack" },
  { value: "ZoKrates", label: "ZoKrates" },
].sort((a, b) => a.label.localeCompare(b.label));

const Submit = () => {
  const preloadedData = {
    projectName: "Stackup Showcase",
    repositoryLink: "https://github.com/exyreams/stackup-showcase",
    selectedTechStacks: [
      { value: "Git", label: "Git" },
      { value: "HTML", label: "HTML" },
      { value: "JavaScript", label: "JavaScript" },
      { value: "Material UI", label: "Material UI" },
      { value: "Next.js", label: "Next.js" },
      { value: "Node.js", label: "Node.js" },
      { value: "React", label: "React" },
      { value: "Tailwind CSS", label: "Tailwind CSS" },
    ],
    description: `
      <h2><strong>Introduction</strong></h2>
      <p>Stackup Showcase is a dynamic platform designed for developers to showcase their projects and share their coding achievements with a vibrant community. This innovative application provides a space for programmers to connect, collaborate, and grow in their careers.</p>

      <h2><strong>Features</strong></h2>
      <ul>
        <li><strong>Project Showcase:</strong> Display your coding projects and achievements to a community of fellow developers.</li>
        <li><strong>Feedback System:</strong> Receive valuable insights and assistance from experienced programmers to refine your skills.</li>
        <li><strong>Portfolio Building:</strong> Create a comprehensive portfolio that highlights your growth and expertise over time.</li>
        <li><strong>Networking:</strong> Connect with like-minded individuals and collaborate on exciting projects.</li>
        <li><strong>Industry Trends:</strong> Stay updated on the latest trends and advancements in the tech world.</li>
        <li><strong>Inclusive Community:</strong> Whether you're a beginner or an experienced developer, find a supportive environment to foster your growth.</li>
        <li><strong>Career Advancement:</strong> Leverage the platform to advance your career in the ever-evolving world of technology.</li>
      </ul>
  
      <h2><strong>Button Component Implementation</strong></h2>
      <p>Here's the code for our reusable Button component:</p>
      <pre><code>
      const Button = ({ btnName, classStyles, handleClick }) => (
        &lt;button
          type="button"
          className={\`rounded-md bg-black px-5 py-2.5 text-sm font-semibold text-white hover:bg-black/70 dark:bg-stackup-gray-text/30  dark:hover:bg-stackup-gray/40 minlg:px-8 minlg:text-lg ${"${classStyles}"}\`}
          onClick={'{handleClick}'}
        &gt;
          {'{btnName}'}
        &lt;/button&gt;
      );
      export default Button;
        </code></pre>
        <p>This Button component is designed to be flexible and reusable across our application. It supports custom styling through the classStyles prop and can handle click events via the handleClick prop.</p>
        <br/>
        <p>Join Stackup Showcase today and take your development journey to the next level!</p>
    `,
    coverImage: showcaseCover,
  };

  const [projectName, setProjectName] = useState(preloadedData.projectName);
  const [coverImage, setCoverImage] = useState(preloadedData.coverImage);
  const [repositoryLink, setRepositoryLink] = useState(
    preloadedData.repositoryLink
  );
  const [description, setDescription] = useState(preloadedData.description);
  const [selectedTechStacks, setSelectedTechStacks] = useState(
    preloadedData.selectedTechStacks
  );

  const clearAll = () => {
    setProjectName("");
    setRepositoryLink("");
    setSelectedTechStacks([]);
    setDescription("");
    setCoverImage("");
  };

  const handleChange = (newValue) => {
    setSelectedTechStacks(newValue || []);
  };

  const handleImageChange = useCallback((file) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleRemoveImage = () => {
    setCoverImage(null);
  };

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      const file = e.dataTransfer.files[0];
      handleImageChange(file);
    },
    [handleImageChange]
  );

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "color", "image"],
      [{ "code-block": true }],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "indent",
    "image",
    "code-block",
    "color",
  ];

  return (
    <div className="mx-20 flex flex-col py-8 sm:mx-10">
      <div className="flex flex-row space-x-4">
        <div className="flex-1 pr-4">
          <div className="rounded-lg bg-stackup-gray p-12 dark:bg-stackup-gray/10">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-black dark:text-white">
                Submit Project
              </h1>
              <p className="text-sm text-black dark:text-white">
                Share your project to get feedback from our community members.
                Once you submit it, other members can review, offer suggestions,
                and help you refine your project, and grow as a developer.
              </p>
            </div>
            <div className="mt-4">
              <p className="flex text-xs  text-black dark:text-white">
                <BsInfoCircle className="mr-2 cursor-pointer text-xl" />
                Projects are active for 7 days to get community feedback, and
                you can submit a new one after the current project expires.
              </p>
            </div>
            <div className="mt-5 space-y-5">
              <div>
                <div className="flex justify-between">
                  <label
                    htmlFor="projectName"
                    className="text-md block font-semibold text-black dark:text-white"
                  >
                    Project Name
                  </label>
                  <button
                    onClick={clearAll}
                    className="text-md font-semibold text-black underline dark:text-white"
                  >
                    Clear
                  </button>
                </div>
                <div className="mt-2">
                  <input
                    placeholder="Stackup Showcase"
                    type="text"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="block w-full rounded-md bg-stackup-gray-text/80 px-2 py-2.5 text-sm text-black ring-2 ring-inset ring-gray-400 placeholder:text-stackup-placeholder dark:text-black"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="coverImage"
                  className="text-md block font-semibold text-black dark:text-white"
                >
                  Cover Image
                </label>
                <div className="mt-2">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="dropzone-file"
                      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-400 bg-stackup-gray-text/80 hover:bg-stackup-gray-text dark:border-stackup-gray dark:hover:bg-stackup-gray-text/90 "
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                    >
                      {coverImage ? (
                        <div className="relative h-full w-full">
                          <Image
                            src={coverImage}
                            alt="Uploaded cover"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                      ) : (
                        <div className="flex flex-col items-center justify-center pb-6 pt-5">
                          <svg
                            className="mb-4 h-8 w-8 text-gray-600"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-600 ">
                            <span className="font-semibold">
                              Click to upload
                            </span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-600 ">
                            SVG, PNG, JPG or GIF (MAX.10MB, 800x400px)
                          </p>
                        </div>
                      )}
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleImageChange(e.target.files[0])}
                      />
                    </label>
                    {coverImage && (
                      <button
                        onClick={handleRemoveImage}
                        className="mt-2 text-sm font-semibold text-stackup-showcase/70 transition-colors hover:text-stackup-showcase"
                      >
                        Remove
                      </button>
                    )}
                  </div>
                </div>
              </div>
              <div>
                <label
                  htmlFor="repositoryLink"
                  className="text-md block font-semibold text-black dark:text-white"
                >
                  Repository Link
                </label>
                <div className="mt-2">
                  <input
                    placeholder="https://github.com/exyreams/stackup-showcase"
                    type="text"
                    name="repositoryLink"
                    value={repositoryLink}
                    onChange={(e) => setRepositoryLink(e.target.value)}
                    className="block w-full rounded-md bg-stackup-gray-text/80 px-2 py-2.5 text-sm text-black ring-2 ring-inset ring-gray-400 placeholder:text-stackup-placeholder  dark:text-black"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="techStacks"
                  className="text-md block font-semibold text-black dark:text-white"
                >
                  Tech Stacks
                </label>
                <div className="mt-2">
                  <CreatableSelect
                    isMulti
                    onChange={handleChange}
                    options={techStacksOptions}
                    value={selectedTechStacks}
                    className="basic-multi-select text-black"
                    classNamePrefix="select"
                    placeholder="Select..."
                    styles={{
                      placeholder: (provided) => ({
                        ...provided,
                        color: "#515457",
                      }),
                      control: (provided, state) => ({
                        ...provided,
                        backgroundColor: "rgba(192, 197, 204, 0.8)",
                        borderColor: state.isFocused ? "#1f2937" : "#9ca3af",
                        borderWidth: 2,
                        "&:focus-within": {
                          outline: "none",
                          borderColor: "#1f2937",
                          boxShadow: "0 0 0 1px rgba(31, 41, 55, 1)",
                        },
                        minHeight: "42px",
                      }),

                      option: (provided, state) => ({
                        ...provided,
                        color: state.isSelected
                          ? "red"
                          : state.isFocused
                            ? "white"
                            : "#333333",
                        backgroundColor: state.isSelected
                          ? "red"
                          : state.isFocused
                            ? "gray"
                            : "white",
                        "&:active": {
                          backgroundColor: "#525151",
                        },
                      }),
                    }}
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="projectDescription"
                  className="text-md block font-semibold text-black dark:text-white"
                >
                  Description
                </label>
                <div className="quill-editor mt-2 ">
                  <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    modules={modules}
                    formats={formats}
                    className="grow break-words bg-stackup-gray-text/80 text-black ring-2 ring-inset ring-gray-400"
                  />
                </div>
              </div>
              <div className="flex justify-start">
                <Button btnName="Submit" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 pl-4">
          <Preview
            projectName={projectName}
            coverImage={coverImage}
            repositoryLink={repositoryLink}
            selectedTechStacks={selectedTechStacks}
            description={description}
          />
        </div>
      </div>
    </div>
  );
};

export default Submit;
