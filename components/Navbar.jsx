/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import Image from "next/image";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Link from "next/link";
import { LuSun, LuMoonStar } from "react-icons/lu";
import React, { useEffect, useState } from "react";

import { showcase, menu } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
  }, [resolvedTheme]);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
    setIsDark(!isDark);
  };

  return (
    <nav className="border-gray-20 sticky top-0 z-20 border-b bg-white p-2 text-black dark:border-stackup-gray/30 dark:bg-stackup-dark dark:text-white">
      <div className="flex items-center justify-start">
        <div className="cursor-pointer">
          <Link href="/" className="flex">
            <div className="cursor-pointer pl-4">
              <Image src={showcase} height={40} width={40} alt="logo" />
            </div>
            <div className="ml-2 cursor-pointer font-medium text-stackup-gray-text">
              <p className="text-md -mb-1 font-bold text-stackup-showcase">
                Showcase
              </p>
              <h1 className="text-sm">By StackUp</h1>
            </div>
          </Link>
        </div>
        <div className="flex grow items-center justify-between pl-3">
          <ul className="flex space-x-2">
            <li
              className={`cursor-pointer rounded-full px-6 py-3 ${router.pathname !== "/" ? "border-2 border-transparent hover:border-stackup-gray dark:hover:border-stackup-gray/50" : ""} ${router.pathname === "/" ? "bg-stackup-gray dark:bg-stackup-gray/10" : ""}`}
              key="home"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`cursor-pointer rounded-full px-6 py-3 ${router.pathname !== "/explore" ? "border-2 border-transparent hover:border-stackup-gray dark:hover:border-stackup-gray/50" : ""} ${router.pathname === "/explore" ? "bg-stackup-gray dark:bg-stackup-gray/10" : ""}`}
              key="explore"
            >
              <Link href="/explore">Explore</Link>
            </li>
          </ul>
          <div className="pr-15 flex justify-start px-6 py-3">
            <label className="relative mr-4 inline-flex items-center">
              <input
                className="peer hidden"
                id="toggle"
                type="checkbox"
                checked={isDark}
                onChange={toggleTheme}
              />
              <div
                className={`relative h-[30px] w-[64px] ${
                  isDark ? "bg-stackup-gray-text" : "bg-stackup-gray-text"
                } rounded-full after:absolute after:h-[24px] after:w-[24px] after:bg-gradient-to-r after:content-[''] ${
                  isDark
                    ? " after:from-zinc-900 after:to-zinc-900"
                    : "after:from-orange-500 after:to-yellow-400"
                } after:left-[3px] after:top-[3px] after:rounded-full active:after:w-[30px] ${
                  isDark ? "after:left-[60px] after:translate-x-[-100%]" : ""
                } shadow-sm duration-300 after:shadow-md after:duration-300`}
              />
              <LuSun
                className={`fill-black text-black ${
                  !isDark ? "fill-white text-white opacity-100" : "opacity-50"
                } absolute left-[7px] h-4 w-4`}
              />
              <LuMoonStar
                className={`fill-white text-black ${
                  isDark ? "fill-black  text-white opacity-100" : "opacity-50"
                } absolute right-[7px] h-4 w-4`}
              />
            </label>
            <Link href="/submit">
              <Button btnName="Submit Project" />
            </Link>
            <Image
              src={menu}
              className="ml-3 cursor-not-allowed dark:brightness-150"
              height={32}
              width={32}
              alt="menu"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
