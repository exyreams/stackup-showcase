import React from "react";
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

import Tooltips from "./Tootips";
import { earn, learn, setting, showcase } from "../assets/";

const Sidebar = () => {
  return (
    <div className="sticky top-0 flex h-screen flex-col items-center gap-y-4 border-r border-stackup-gray p-2 dark:border-stackup-gray/10">
      <div>
        <div className="cursor-pointer rounded-md p-2 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
          <FaUserCircle className="text-4xl text-gray-400" />
        </div>
        <hr className="border-1 mt-3 dark:border-stackup-gray/10" />
      </div>
      <Tooltips title="Earn" placement="left">
        <div className="cursor-not-allowed rounded-md  p-2 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
          <Image alt="earn" src={earn} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Learn" placement="left">
        <div className="cursor-not-allowed rounded-md p-2 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
          <Image alt="learn" src={learn} height={32} width={32} />
        </div>
      </Tooltips>
      <Tooltips title="Showcase" placement="left">
        <div className="cursor-pointer rounded-md  p-2 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
          <Image alt="logo" src={showcase} height={32} width={32} />
        </div>
      </Tooltips>
      <div className="mb-2 mt-auto">
        <hr className="border-1 mb-2 dark:border-stackup-gray/10" />
        <div className="dark:fill-red cursor-pointer rounded-md p-2 hover:bg-stackup-gray dark:hover:bg-stackup-gray/10">
          <Image
            src={setting}
            alt="setting"
            height={32}
            width={32}
            className="dark:brightness-150"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
