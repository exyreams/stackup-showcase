import React from "react";
import Image from "next/image";

import { showcase, menu } from "../assets";

const Navbar = () => {
  return (
    <nav className="text-black p-2 border-b border-gray-300">
      <div className="flex justify-start items-center">
        <div className="flex cursor-pointer">
          <div className="pl-4 cursor-pointer">
            <Image src={showcase} height={48} width={48} />
          </div>
          <div className="font-medium text-stack-gray-text ml-2">
            <p className="font-bold  text-black text-md -mb-1">Showcase</p>
            By StackUp
          </div>
        </div>
        <div className="flex justify-between items-center flex-grow pl-3">
          <ul className="flex space-x-2">
            <li className="cursor-pointer hover:bg-stack-gray px-6 py-3 rounded-full">
              <a href="#">Home</a>
            </li>
            <li className="cursor-pointer hover:bg-stack-gray px-6 py-3 rounded-full">
              <a href="#">Explore</a>
            </li>
          </ul>
          <div className="pr-15 px-6 py-3">
            <Image src={menu} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
