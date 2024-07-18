import React from "react";
import Image from "next/image";

import { useTheme } from "next-themes";
import { LuSun, LuMoonStar } from "react-icons/lu";
import { showcase, menu } from "../assets";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 text-black dark:text-white bg-white dark:bg-stackup-dark p-2 border-b border-gray-20 dark:border-stackup-gray/30">
      <div className="flex justify-start items-center">
        <div className="flex cursor-pointer">
          <div className="pl-4 cursor-pointer">
            <Image src={showcase} height={48} width={48} />
          </div>
          <div className="font-medium text-stackup-gray-text ml-2">
            <p className="font-bold  text-black dark:text-white text-md -mb-1">
              Showcase
            </p>
            By StackUp
          </div>
        </div>
        <div className="flex justify-between items-center flex-grow pl-3">
          <ul className="flex space-x-2">
            <li className="cursor-pointer hover:bg-stackup-gray dark:hover:bg-stackup-gray/10  px-6 py-3 rounded-full">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer hover:bg-stackup-gray dark:hover:bg-stackup-gray/10  px-6 py-3 rounded-full">
              <a href="#">Explore</a>
            </li>
          </ul>
          <div className="flex justify-start pr-15 px-6 py-3">
            <label className="inline-flex items-center relative mr-4">
              <input className="peer hidden" id="toggle" type="checkbox" />
              <div
                className="relative w-[64px] h-[30px] bg-stackup-gray-text peer-checked:bg-stackup-gray-text rounded-full after:absolute after:content-[''] after:w-[24px] after:h-[24px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[3px] after:left-[3px] active:after:w-[30px] peer-checked:after:left-[60px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md"
                onClick={() => {
                  setTheme(resolvedTheme === "light" ? "dark" : "light");
                }}
              />

              <LuSun className="text-white fill-white opacity-100 peer-checked:opacity-60 peer-checked:fill-black peer-checked:text-black absolute w-4 h-4 left-[7px]" />
              <LuMoonStar className="text-black fill-black opacity-60 peer-checked:opacity-100 peer-checked:fill-white peer-checked:text-white absolute w-4 h-4 right-[7px]" />
            </label>
            <Image
              src={menu}
              className="cursor-pointer"
              height={32}
              width={32}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
