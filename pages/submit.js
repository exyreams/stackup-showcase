import dynamic from "next/dynamic.js";
import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import "react-quill/dist/quill.snow.css";
import { Button, Preview } from "../components";

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
  const [projectName, setProjectName] = useState("");
  const [repositoryLink, setRepositoryLink] = useState("");
  const [selectedTechStacks, setSelectedTechStacks] = useState([]);
  const [description, setDescription] = useState("");

  const handleChange = (newValue) => {
    setSelectedTechStacks(newValue || []);
  };

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
            <div className="mt-10 space-y-5">
              <div>
                <label
                  htmlFor="projectName"
                  className="text-md block font-semibold text-black dark:text-white"
                >
                  Project Name
                </label>
                <div className="mt-2">
                  <input
                    placeholder="Stackup Showcase"
                    type="text"
                    name="projectName"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="block w-full rounded-md px-2 py-2.5 text-sm text-black ring-2 ring-inset ring-gray-400 dark:text-stackup-gray"
                  />
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
                    className="block w-full rounded-md px-2 py-2.5 text-sm text-black ring-2 ring-inset ring-gray-400 dark:text-stackup-gray"
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
                  Project Description
                </label>
                <div className="quill-editor overflow-wrap: break-word mt-2 ">
                  <ReactQuill
                    theme="snow"
                    value={description}
                    onChange={setDescription}
                    modules={modules}
                    formats={formats}
                    className="grow bg-stackup-gray-text/80 text-black ring-2 ring-inset ring-gray-400"
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
