import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import Tooltips from "./Tootips";
import { earn, learn, setting, showcase } from "../assets/";

const Sidebar = () => {
  return (
    <div className="bg-white p-2 h-screen flex flex-col items-center gap-y-4 border-r border-gray-300">
      <div>
        <div className="cursor-pointer">
          <FaUserCircle className="text-4xl text-gray-400" />
        </div>
        <hr className="border-1 mt-5" />
      </div>
      <Tooltips title="Earn" placement="left">
        <div className="hover:bg-stack-gray p-2 rounded-md cursor-pointer">
          <Image src={earn} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Learn" placement="left">
        <div className="hover:bg-stack-gray p-2 rounded-md cursor-pointer">
          <Image src={learn} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Showcase" placement="left">
        <div className="hover:bg-stack-gray p-2 rounded-md cursor-pointer">
          <Image src={showcase} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Settings" placement="top-start">
        <div className="mt-auto mb-2">
          <hr className="border-1 mb-2" />
          <div className="hover:bg-stack-gray p-2 rounded-md cursor-pointer">
            <Image src={setting} height={32} width={32} />
          </div>
        </div>
      </Tooltips>
    </div>
  );
};

export default Sidebar;
