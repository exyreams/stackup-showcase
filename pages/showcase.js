import Image from "next/image";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";

import { Button, Comments, Countdown } from "../components";
import { showcaseCover, user } from "../assets";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Showcase = () => {
  const [comments, setComments] = useState([]);
  const [currentComment, setCurrentComment] = useState("");
  const [editingCommentIndex, setEditingCommentIndex] = useState(null);
  const [editedComment, setEditedComment] = useState("");

  const username = "exyreams";

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="w-full max-w-3xl rounded-lg p-12 dark:bg-stackup-gray/10">
        <h1 className="text-4xl font-bold text-black dark:text-white sm:text-5xl">
          Showcase: Your Developer Portfolio and Community Hub
        </h1>
        <div className="mt-8 space-y-4">
          <Countdown />
        </div>
        <div className="mt-8 space-y-4">
          <div className="relative h-64 w-full overflow-hidden rounded-lg">
            <Image
              src={showcaseCover}
              alt="Project Cover"
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div>
            <h3 className="text-md font-semibold text-black dark:text-white">
              Repository Link
            </h3>
            <p>
              <a
                href="https://github.com/exyreams/stackup-showcase"
                target="_blank"
                rel="noopener noreferrer"
                className="break-words text-sm text-blue-600 underline underline-offset-2 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
              >
                https://github.com/exyreams/stackup-showcase
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white">
              Tech Stacks
            </h3>
            <ul className="mr-4 flex list-disc flex-row flex-wrap pl-10 text-sm text-black dark:text-white">
              <ul class="grid list-disc grid-cols-5 gap-4 pl-0 pr-0 font-semibold">
                <li>Git</li>
                <li>HTML</li>
                <li>JavaScript</li>
                <li>Material UI</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>React</li>
                <li>TailwindCSS</li>
              </ul>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Overview
            </h2>
            <p className="mt-4 text-black dark:text-white">
              Showcase is a dynamic platform designed to empower developers to
              showcase their projects, seek feedback, and collaborate with other
              users. It serves as a comprehensive hub for expanding your
              developer portfolio and enhancing your skills.
            </p>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Features
            </h2>
            <ul className="ml-5 mt-4 list-inside list-disc text-black dark:text-white">
              <li>
                <span className="font-semibold">Project Showcase:</span> Upload
                and display your projects with detailed descriptions,
                screenshots, and live demos.
              </li>
              <li>
                <span className="font-semibold">Feedback and Insights:</span>{" "}
                Receive constructive feedback from the community and gain
                insights to improve your projects.
              </li>
              <li>
                <span className="font-semibold">Collaboration:</span> Connect
                with other developers, collaborate on projects, and learn from
                each other.
              </li>
              <li>
                <span className="font-semibold">Skills Improvement:</span>{" "}
                Engage in discussions, participate in workshops, and stay
                updated on the latest trends and technologies.
              </li>
              <li>
                <span className="font-semibold">Portfolio Building:</span>{" "}
                Present your skills, achievements, and projects in a
                professional and visually appealing manner.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              How It Works
            </h2>
            <ol className="ml-5 mt-4 list-inside list-decimal text-black dark:text-white">
              <li>
                <span className="font-semibold">Sign Up:</span> Create an
                account on Showcase using your email or social media accounts.
              </li>
              <li>
                <span className="font-semibold">Profile Setup:</span> Customize
                your profile with your skills, experience, and a brief
                introduction.
              </li>
              <li>
                <span className="font-semibold">Project Upload:</span> Upload
                your projects, add descriptions, screenshots, and live demos.
              </li>
              <li>
                <span className="font-semibold">Feedback and Insights:</span>{" "}
                Receive feedback from the community and engage in discussions to
                improve your projects.
              </li>
              <li>
                <span className="font-semibold">Collaboration:</span> Connect
                with other developers, collaborate on projects, and learn from
                each other.
              </li>
              <li>
                <span className="font-semibold">Skills Improvement:</span>{" "}
                Participate in workshops, attend webinars, and stay updated on
                the latest trends and technologies.
              </li>
              <li>
                <span className="font-semibold">Portfolio Building:</span>{" "}
                Present your skills, achievements, and projects in a
                professional and visually appealing manner.
              </li>
            </ol>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Benefits
            </h2>
            <ul className="ml-5 mt-4 list-inside list-disc text-black dark:text-white">
              <li>
                <span className="font-semibold">Expand Your Network:</span>{" "}
                Connect with other developers, learn from them, and collaborate
                on projects.
              </li>
              <li>
                <span className="font-semibold">Improve Your Skills:</span>{" "}
                Receive feedback, participate in workshops, and stay updated on
                the latest trends and technologies.
              </li>
              <li>
                <span className="font-semibold">Build Your Portfolio:</span>{" "}
                Present your skills, achievements, and projects in a
                professional and visually appealing manner.
              </li>
              <li>
                <span className="font-semibold">Learn and Grow:</span> Engage in
                discussions, participate in workshops, and stay updated on the
                latest trends and technologies.
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Join the Community
            </h2>
            <p className="mt-4 text-black dark:text-white">
              Showcase is more than just a platform; It&#39;s a community of
              developers who are passionate about learning, growing, and
              collaborating. Join us today and start showcasing your projects,
              seeking feedback, and improving your skills.
            </p>
          </div>
          <p className="rounded-md bg-stackup-gray-text/80 p-2 italic dark:text-black">
            <span className="font-semibold text-red-600">Note:</span> Text used
            in the articles are generated by AI.
          </p>

          <div className="mt-8">
            <h3 className="text-2xl font-bold text-black dark:text-white">
              Comments
            </h3>
            <div className="mt-5 flex items-start space-x-4">
              <Image
                src={user}
                alt={username}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="grow">
                <p className="font-semibold text-black dark:text-white">
                  {username}
                </p>
                <div className="mt-2 rounded-lg border border-gray-300 dark:border-gray-700">
                  <ReactQuill
                    value={currentComment}
                    onChange={setCurrentComment}
                    theme="bubble"
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ["bold", "italic", "underline"],
                        [{ list: "ordered" }, { list: "bullet" }],
                        ["link", "image"],
                        ["code-block"],
                        ["clean"],
                      ],
                    }}
                    formats={[
                      "header",
                      "bold",
                      "italic",
                      "underline",
                      "list",
                      "link",
                      "image",
                      "code-block",
                    ]}
                    placeholder="Add your comment here..."
                    className="rounded"
                  />
                </div>
                <Button
                  btnName="Add Comment"
                  handleClick={() => {
                    if (currentComment.trim() !== "") {
                      setComments([
                        ...comments,
                        {
                          username,
                          comment: currentComment,
                        },
                      ]);
                      setCurrentComment("");
                    }
                  }}
                  classStyles="mt-4 mb-4"
                />
              </div>
            </div>
            <div className="mb-5 flex items-start space-x-4">
              <Image
                src={user}
                alt={username}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="grow">
                <div className="flex justify-between">
                  <p className="font-semibold text-black dark:text-white">
                    exyness
                  </p>
                </div>
                <div className="mt-2 rounded-lg border border-gray-300 bg-stackup-gray-text/80 p-4 dark:border-gray-700">
                  <p className="text">Join Stackup Showcase today</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              {comments
                .slice()
                .reverse()
                .map((comment, index) => (
                  <div key={index}>
                    {editingCommentIndex === comments.length - 1 - index ? (
                      <div className="mb-4 flex items-start space-x-4">
                        <Image
                          src={user}
                          alt={username}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="grow">
                          <div className="flex justify-between">
                            <p className="font-semibold text-black dark:text-white">
                              {username}
                            </p>
                          </div>
                          <div className="mt-2 rounded-lg bg-stackup-gray-text/80 p-4">
                            <ReactQuill
                              value={editedComment}
                              onChange={setEditedComment}
                              modules={{
                                toolbar: [
                                  [{ header: [1, 2, false] }],
                                  ["bold", "italic", "underline"],
                                  [{ list: "ordered" }, { list: "bullet" }],
                                  ["link", "image"],
                                  ["code-block"],
                                  ["clean"],
                                ],
                              }}
                              formats={[
                                "header",
                                "bold",
                                "italic",
                                "underline",
                                "list",
                                "link",
                                "image",
                                "code-block",
                              ]}
                              className="rounded"
                            />
                          </div>
                          <Button
                            btnName="Update"
                            handleClick={() => {
                              if (editedComment.trim() !== "") {
                                const updatedComments = [...comments];
                                updatedComments[
                                  comments.length - 1 - editingCommentIndex
                                ] = {
                                  username,
                                  comment: editedComment,
                                };
                                setComments(updatedComments);
                                setEditingCommentIndex(null);
                                setEditedComment("");
                              }
                            }}
                            classStyles="mt-4"
                          />
                        </div>
                      </div>
                    ) : (
                      <Comments
                        userIcon={user}
                        username={comment.username}
                        comment={comment.comment}
                        index={comments.length - 1 - index}
                        onEdit={(editIndex) => {
                          setEditingCommentIndex(editIndex);
                          setEditedComment(
                            comments[comments.length - 1 - editIndex].comment
                          );
                        }}
                        onDelete={(deleteIndex) => {
                          const updatedComments = [...comments];
                          updatedComments.splice(deleteIndex, 1);
                          setComments(updatedComments);
                        }}
                        currentUser={username}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
