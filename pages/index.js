import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";

import { Card, ScrollToTop } from "../components";

const Index = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="flex flex-col">
      {/* Welcome Message */}
      <div className="bg-stackup-gray dark:bg-stackup-gray/10">
        <div className="mx-5 flex flex-col gap-y-4 py-10 lg:mx-28 sm:mx-20">
          <h1 className="text-2xl font-semibold text-black dark:text-white md:text-2xl">
            🚀 Welcome back,&nbsp;
            <span className="text-stackup-showcase">exyreams!</span>
          </h1>
        </div>
      </div>

      <div className="xl:mx-auto mx-5 mt-10 flex flex-col items-center gap-y-9 pb-14 pt-5 lg:px-0 md:mx-9 sm:mx-8 sm:px-20">
        <div className="mb-10 flex flex-col justify-start px-32 text-black dark:text-white">
          {/* Announcements */}
          <div className="cursor-pointer rounded-2xl bg-stackup-gray p-5 dark:bg-stackup-gray/10">
            <div
              className="flex justify-between"
              onClick={() => setShow(!show)}
            >
              <h2 className="text-lg font-medium">
                📢 New: Monthly Happenings Calendar
              </h2>
              <FaChevronDown
                className={`text-xl transition-all duration-500 ${
                  show ? "rotate-180" : ""
                }`}
              />
            </div>
            <div className="my-2">
              <p className="p-2 font-light">
                Want to find out what is upcoming at a glance? You now have a
                home to visit! Visit our{" "}
                <a
                  href="https://go.stackup.dev/monthly-happenings-july"
                  target="_blank"
                  rel="noreferrer"
                  className="text-stackup-pink hover:cursor-pointer hover:underline"
                >
                  Monthly Happenings Calendar
                </a>
                &nbsp; to view all upcoming quests, bounties, events and
                challenges.
              </p>
            </div>
            <div>
              <p className="text-xs font-normal text-black/40 dark:text-stackup-gray/40">
                <time dateTime="2024-07-04T23:15:35+05:45">Jul 04, 2024</time>
              </p>
            </div>
          </div>
        </div>
        {/* Featured Text */}
        <div className="flex flex-col items-center space-y-1 text-black dark:text-white">
          <h2 className="text-4xl font-semibold">Featured Projects</h2>
          <p className="text-sm">
            All times are shown in&nbsp;
            <b>your timezone (GMT +05:45)</b>
          </p>
        </div>
        {/* Feature projects */}
        <ul className="flex flex-row flex-wrap items-center gap-8 p-5">
          <li>
            <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/l8/wallhaven-l8vp7y.jpg)] bg-cover bg-center">
              <Card
                username="exyreams"
                techstack="React, Tailwind"
                projectname="Stackup-Showcase"
                description="A collaborative platform where users can showcase their projects, receive feedback, and seek help from the community to enhance their work."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/ex/wallhaven-exrqrr.jpg)] bg-cover bg-center">
              <Card
                username="exyness"
                techstack="React, Truffle, IPFS"
                projectname="Decentralized Marketplace"
                description="A peer-to-peer marketplace leveraging blockchain for transparent and trustless transactions."
              />
            </div>
          </li>
          <li>
            <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/85/wallhaven-8586my.png)] bg-cover ">
              <Card
                username="kronos"
                techstack="Solidity, Web3.js, Ethereum"
                projectname="CryptoWallet"
                description="A secure and user-friendly cryptocurrency wallet for managing and transacting digital assets."
              />
            </div>
          </li>
          <hr className="border-1 mt-3 border-stackup-gray-text/10 dark:border-stackup-gray/10" />
        </ul>
        <hr className="border-1 w-3/4 border-stackup-gray-text/30 p-3 dark:border-stackup-gray/10" />
        <div className="mb-4 w-full px-32 text-black dark:text-white">
          <div className="flex flex-row justify-between p-1">
            <p className="text-2xl font-medium">Check out more Projects</p>
            <button className="mr-8 flex flex-row gap-2 rounded-lg border border-black p-2 font-medium hover:bg-stackup-gray-text/70  dark:border-stackup-gray dark:hover:bg-stackup-gray/40">
              All Projects
              <IoMdArrowRoundForward className="text-2xl" />
            </button>
          </div>
        </div>
        {/* More Projects */}
        <div className="mt-4">
          <ul className="flex flex-row flex-wrap items-center gap-8">
            <li>
              <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/7p/wallhaven-7p1qo9.png)] bg-cover bg-center">
                <Card
                  username="flynk"
                  techstack="Next.js, GraphQL, PostgreSQL"
                  projectname="ShopEase"
                  description="An e-commerce website with advanced search and recommendation features for a seamless shopping experience."
                />
              </div>
            </li>
            <li>
              <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/o5/wallhaven-o5vx37.jpg)] bg-cover bg-center">
                <Card
                  username="zorvi"
                  techstack="Vue.js, Firebase, Tailwind CSS"
                  projectname="EduPro"
                  description="An e-learning platform offering interactive courses, quizzes, and community support for learners."
                />
              </div>
            </li>
            <li>
              <div className="rounded-md bg-[url(https://w.wallhaven.cc/full/xl/wallhaven-xl952z.jpg)] bg-cover bg-center">
                <Card
                  username="bilph"
                  techstack="React, Node.js, MongoDB"
                  projectname="Project Aurora"
                  description="A web application for tracking and visualizing personal fitness goals with detailed analytics."
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
      <ScrollToTop />
    </div>
  );
};

export default Index;
