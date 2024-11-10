import React from "react";

import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <Image 
          src="/images/7358653-removebg-preview.png"  // Path to the image in the public folder
          alt="Your Name"
          width={500}          // Width of the image
          height={500}         // Height of the image
          className="profile-image" // Optional class for additional styling
  />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                As a beginner Frontend Developer, I am passionate about learning and building my skills to create user-friendly and visually appealing web applications. I’m gaining hands-on experience with HTML, CSS, and JavaScript, and I’m exploring modern frameworks like React to expand my knowledge. My goal is to craft responsive and accessible websites that provide a seamless user experience. I’m always excited to take on new challenges and continuously improve my coding skills while staying up to date with the latest industry trends and best practices.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;