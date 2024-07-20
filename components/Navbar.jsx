/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */
import Image from "next/image";
import { useTheme } from "next-themes";
import { LuSun, LuMoonStar } from "react-icons/lu";
import React, { useEffect, useState } from "react";

import { showcase, menu } from "../assets";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);

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
        <div className="flex cursor-pointer">
          <div className="cursor-pointer pl-4">
            <Image src={showcase} height={48} width={48} alt="logo"/>
          </div>
          <div className="ml-2 font-medium text-stackup-gray-text">
            <p className="text-md  -mb-1 font-bold text-black dark:text-white">
              Showcase
            </p>
            By StackUp
          </div>
        </div>
        <div className="flex grow items-center justify-between pl-3">
          <ul className="flex space-x-2">
            <li className="cursor-pointer rounded-full px-6  py-3 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer rounded-full px-6  py-3 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
              <a href="#">Explore</a>
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
            <Image
              src={menu}
              className="cursor-not-allowed dark:brightness-150"
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
