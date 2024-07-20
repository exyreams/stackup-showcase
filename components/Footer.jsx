import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-row justify-between  border-t border-stackup-gray p-6 text-black dark:border-stackup-gray/10 dark:text-white">
      <div className="flex items-center justify-start">
        <p className="font-regular mr-4 text-sm">© 2024 Earn by StackUp</p>
        <ul className="flex space-x-6">
          <li className="font-semibold hover:underline">
            <a
              href="https://stackuphelpcentre.zendesk.com/hc/en-us"
              target="_blank"
              rel="noreferrer"
            >
              Help Centre
            </a>
          </li>
          <li
            className="font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            <a href="https://stackup.dev/earn/terms/">Terms Of Service</a>
          </li>
          <li
            className="font-semibold hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            <a href="https://stackup.dev/privacy/">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="flex space-x-4">
        <a href="https://x.com/StackUpHQ/" target="_blank" rel="noreferrer">
          <FaXTwitter className="text-2xl text-stackup-gray-text hover:text-stackup-scroll-top" />
        </a>
        <a
          href="https://discord.com/invite/3x3h2z6A63/"
          target="_blank"
          rel="noreferrer"
        >
          <FaDiscord className="text-2xl text-stackup-gray-text hover:text-stackup-scroll-top" />
        </a>
        <a
          href="https://www.linkedin.com/company/stackupofficial/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="text-2xl text-stackup-gray-text hover:text-stackup-scroll-top" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
