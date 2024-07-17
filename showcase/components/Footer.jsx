import React from "react";

const Footer = () => {
  return (
    <div className=" text-black p-4">
      <div className="flex justify-start items-center">
        <p className="text-sm font-regular mr-4">© 2024 Earn by StackUp</p>
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
    </div>
  );
};

export default Footer;
