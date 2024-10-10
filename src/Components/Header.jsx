import React, { useState } from "react";
import { primary } from "./common"; // Ensure primary color is defined in your common file
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  };

  return (
    <nav className={`bg-[#024CAA] border-gray-200`}>
      <div
        className={`max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4`}
      >
        <span
          className={`self-center text-2xl text-white font-semibold whitespace-nowrap text-[${primary}]`}
        >
          Saghul Ahmed
        </span>

        <button
          onClick={openMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center bg-white text-sm text-white-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 "
          aria-controls="navbar-default"
          aria-expanded={open} // Adjust for accessibility
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <FaTimes className="w-5 h-5 " />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
        <div
          className={`w-full md:block md:w-auto ${open ? "block" : "hidden"}`}
          id="navbar-default"
        >
          <ul
            className={`font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[${primary}] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-[${primary}] text-white`}
          >
            <li className="border-b-2 border-white md:border-0">
              <a
                href="#services"
                className="block py-2 px-3 text-white hover:border-b-2 hover:border-yellow  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
              >
                Services
              </a>
            </li>
            <li className="border-b-2 border-white md:border-0">
              <a
                href="#project"
                className="block py-2 px-3 text-white hover:border-b-2 hover:border-yellow  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
              >
                Projects
              </a>
            </li>
            <li className="border-b-2 border-white md:border-0 ">
              <a
                href="#about"
                className="block py-2 px-3 text-white rounded hover:bg-gray-100 hover:hover:border-b-2 hover:border-yellow md:hover:bg-transparent md:border-0  md:p-0"
              >
                About Me
              </a>
            </li>

            {/* <li>
              <a
                href="#contact"
                className="block py-2 px-3 text-white hover:border-b-2 hover:border-yellow  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0"
              >
                Contact Me
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
