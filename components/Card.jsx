/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

import { user } from "../assets/";

export function Card({ description, projectname, techstack, username }) {
  return (
    <div className="group/card w-350">
      <div className=" card backgroundImage relative mx-auto flex h-96 cursor-pointer flex-col justify-between overflow-hidden rounded-md p-4 shadow-xl">
        <div className="absolute left-0 top-0 h-full w-full opacity-60 transition duration-300 group-hover/card:bg-black"></div>
        <div className="z-10 flex flex-row items-center space-x-4">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={user}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="relative z-10 text-base font-normal text-white">
              {username}
            </p>
            <p className="rounded-sm bg-white/20 px-1 text-sm text-white/90 dark:text-white/90">
              {techstack}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="relative z-10 text-xl font-normal text-gray-50 md:text-2xl">
            {projectname}
          </h1>
          <p className="relative z-10 my-4 text-sm font-light text-gray-50">
            {description}
          </p>
          <div className="mt-auto">
            <Link href="/showcase">
              <button className="relative z-10 ml-auto flex flex-row items-center text-gray-50 transition-colors duration-200 hover:text-white">
                View
                <IoIosArrowForward className="ml-1" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  username: PropTypes.string.isRequired,
  techstack: PropTypes.string.isRequired,
  projectname: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
