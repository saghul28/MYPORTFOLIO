import React from "react";
import { primary } from "./common";

const Header = () => {
  return (
    <nav
      className={`flex justify-between items-center bg-[${primary}] w-full px-8 py-4 text-white`}
    >
      <h1 className="text-xl font-bold">Saghul Ahmed</h1>
      <ol className="flex space-x-5 font-bold ">
        <li>
          <a
            href="#services"
            className="text-white hover:underline bg-transparent"
          >
            My Services
          </a>
        </li>
        <li>
          <a
            href="#project"
            className="text-white hover:underline bg-transparent"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="text-white hover:underline bg-transparent"
          >
            About Me
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="text-white hover:underline bg-transparent"
          >
            Contact Me
          </a>
        </li>
      </ol>
    </nav>
  );
};

export default Header;
