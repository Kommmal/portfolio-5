"use client";

import { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);  // useState should work here

  const toggleMenu = () => {
    setMenu((prev) => !prev); // Toggle the menu visibility
  };

  return (
    <nav className="flex flex-wrap justify-between md:items-center bg-[#171d32] text-white px-10 pt-6 md:px-20">
      <span className="text-xl font-bold tracking-wide">Portfolio</span>

      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mx-full md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <Link href="#About">
          <li className="text-md transition-all duration-300 p-1 md:p-0">About</li>
        </Link>
        <Link href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Skills</li>
        </Link>
        <Link href="#Experience">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Experience</li>
        </Link>
        <Link href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Projects</li>
        </Link>
        <Link href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0">Contact</li>
        </Link>
      </ul>

      {/* Hamburger or Close Icon */}
      <div
        className="md:hidden absolute right-10 top-6 transition-all duration-300"
        onClick={toggleMenu}
      >
        {menu ? (
          <RiCloseLine size={30} />
        ) : (
          <RiMenu2Line size={30} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
