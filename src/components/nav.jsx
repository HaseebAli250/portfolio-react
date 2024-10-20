import React from "react";
import { RiArrowRightWideLine } from "react-icons/ri";
import { RiArrowLeftWideLine } from "react-icons/ri";
import { RxSlash } from "react-icons/rx";

function Nav() {
  return (
    <nav className="w-full px-4 py-3 flex justify-between items-center  text-white">
      <div className="flex items-center space-x-2">
        <RiArrowLeftWideLine className="text-xl text-purple-700" />
        <h1 className="text-lg font-bold">Haseeb</h1>
        <RxSlash className="text-xl text-purple-700" />
        <h1 className="text-lg font-bold">ALI</h1>
        <RiArrowRightWideLine className="text-xl text-purple-700" />
      </div>
      <div className="hidden md:flex space-x-6 text-xl">
        <a href="#" className="hover:text-purple-400 transition">
          About
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          Skills
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          Projects
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          Experience
        </a>
        <a href="#" className="hover:text-purple-400 transition">
          Contact Us
        </a>
      </div>
      <div>
        <a
          href=""
          className="text-sm text-purple-700 border border-purple-700 md:text-base  px-4 py-2 rounded-full hover:bg-purple-600 transition"
        >
          GITHUB PROFILE
        </a>
      </div>
    </nav>
  );
}

export default Nav;
