import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import Tooltips from "./Tootips";
import { earn, learn, setting, showcase } from "../assets/";

const Sidebar = () => {
  return (
    <div className="sticky top-0 p-2 h-screen flex flex-col items-center gap-y-4 border-r border-stackup-gray dark:border-stackup-gray/10">
      <div>
        <div className="cursor-pointer hover:bg-stackup-gray dark:hover:bg-stackup-gray/10 rounded-md p-2">
          <FaUserCircle className="text-4xl text-gray-400" />
        </div>
        <hr className="border-1 mt-3 dark:border-stackup-gray/10" />
      </div>
      <Tooltips title="Earn" placement="left">
        <div className="hover:bg-stackup-gray dark:hover:bg-stackup-gray/10  p-2 rounded-md cursor-not-allowed">
          <Image src={earn} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Learn" placement="left">
        <div className="hover:bg-stackup-gray dark:hover:bg-stackup-gray/10 p-2 rounded-md cursor-not-allowed">
          <Image src={learn} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Showcase" placement="left">
        <div className="hover:bg-stackup-gray dark:hover:bg-stackup-gray/10  p-2 rounded-md cursor-pointer">
          <Image src={showcase} height={32} width={32} />
        </div>
      </Tooltips>
      <div className="mt-auto mb-2">
        <hr className="border-1 mb-2 dark:border-stackup-gray/10" />
        <div className="hover:bg-stackup-gray dark:hover:bg-stackup-gray/10 p-2 rounded-md cursor-pointer dark:fill-red">
          <Image src={setting} height={32} width={32} className="svg-lighter" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
