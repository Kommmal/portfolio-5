import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <footer id="Footer" className="flex flex-col bg-slate-900 text-white p-6 md:p-12 items-center">
    <div>
      <h1 className="text-2xl md:text-3xl font-bold mb-4">Komal Ayub</h1>
    </div>
    <ul className="flex justify-center gap-6 items-center my-6 md:my-10 flex-wrap">
      <li className="hover:text-primary-light cursor-pointer">Home</li>
      <li className="hover:text-primary-light cursor-pointer">About</li>
      <li className="hover:text-primary-light cursor-pointer">Skills</li>
      <li className="hover:text-primary-light cursor-pointer">Projects</li>
      <li className="hover:text-primary-light cursor-pointer">Contact</li>
    </ul>
    <ul className="flex justify-center gap-6 text-sm md:text-xl mb-6 md:mb-10">
      <li className="flex gap-1 items-center">
        <MdOutlineEmail size={24} className="hover:text-primary-light" />
        <a href="" className="hover:text-primary-light">Email</a>
      </li>
      <li className="flex gap-1 items-center">
        <CiLinkedin size={24} className="hover:text-primary-light" />
        <a href="" className="hover:text-primary-light">LinkedIn</a>
      </li>
      <li className="flex gap-1 items-center">
        <FaGithub size={24} className="hover:text-primary-light" />
        <a href="https://github.com/Kommmal" target="_blank" className="hover:text-primary-light">GitHub</a>
      </li>
    </ul>
    <p className="mt-6 text-sm md:text-base text-white text-center">
      &copy; 2023 Komal Ayub. All rights reserved.
    </p>
  </footer>
  
  );
};
export default Footer;