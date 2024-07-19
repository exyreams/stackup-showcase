/* eslint-disable react/react-in-jsx-scope */
import Image from "next/image";
import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

import { user } from "../assets/";

export function Card({ description, projectname, techstack, username }) {
  return (
    <div className="w-350 group/card">
      <div className=" cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto backgroundImage flex flex-col justify-between p-4">
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <Image
            height="100"
            width="100"
            alt="Avatar"
            src={user}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal text-base text-white relative z-10">
              {username}
            </p>
            <p className="text-sm text-white/90 dark:text-white/90 bg-white/20 px-1 rounded-sm">
              {techstack}
            </p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-normal text-xl md:text-2xl text-gray-50 relative z-10">
            {projectname}
          </h1>
          <p className="font-light text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
          <div className="mt-auto">
            <button className="flex flex-row items-center text-gray-50 hover:text-white transition-colors duration-200 relative z-10 ml-auto">
              View
              <IoIosArrowForward className="ml-1" />
            </button>
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
