import Image from "next/image";
import React from "react";
import TextChange from "./TextChange";

const Hero = () => {
    return (
        <div className="text-white flex w-full justify-between items-start p-10 md:p-20 ">
            <div className="md:w-2/4 md:pt-10 ">
            <h1 className="text-xl md:text-6xl font-bold py-4">Hi, I'm <br />Komal Ayub</h1>
                <h5 className="text-xl md:text-xl font-bold flex leading-normal tracking-tighter">I'm a <span className="text-[#465697] px-2" >
               <TextChange />
                </span>
                    
                </h5>
                <p className="text-sm md:text-xl tracking-tight py-4">
                      A passionate and creative Frontend Developer with a focus on building visually stunning and user-friendly websites. With a deep understanding of HTML, CSS, JavaScript, and modern frontend frameworks like React. </p>
                <button className="mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]" >
                Check Resume
                </button>
            </div>
            <div>
            <Image
                src="/images/7358602-removebg-preview.png"  // Path to the image in the public folder
                alt="Your Name"
                width={500}          // Width of the image
                height={500}         // Height of the image
                className="profile-image" // Optional class for additional styling
        />
            </div>
        </div>
   
    );
};
export default Hero;