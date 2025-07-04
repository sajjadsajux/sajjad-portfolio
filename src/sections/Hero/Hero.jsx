import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className=" md:max-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6  container mx-auto">
      {/* Left - Profile Image */}
      <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0 md:p-10">
        <div className="w-full h-full md:w-full md:h-full rounded-3xl overflow-hidden shadow-lg border-4 border-base-200 " data-aos="zoom-in-right" data-aos-duration="1200">
          <img src="https://i.ibb.co/mCnMS4RM/Sajjad-PFP2-Enhanced.png" alt="Sajjad Saju" className="w-full h-full object-cover transition-opacity duration-500 ease-in-out " />
        </div>
      </div>

      {/* Right - Text Content */}
      <div className="w-full md:w-3/5 text-center md:text-center  flex flex-col gap-5">
        <p className="text-2xl text-primary mb-1 font-bold">Hi, I'm</p>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">MD Sajjad Hossain Saju</h1>
        <TypeAnimation sequence={["Junior MERN Stack Developer", 3000, "Open to Collaboration", 2000]} wrapper="h2" speed={30} repeat={Infinity} className="text-2xl md:text-4xl font-semibold text-primary mb-4" />

        {/* Social Links */}
        <div className="flex justify-center md:justify-center gap-5 text-2xl mb-6 ">
          <a href="https://github.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary text-base-100">
            <FaGithub size={35} />
          </a>
          <a href="https://linkedin.com/in/sajjadsaju" target="_blank" rel="noreferrer" className="hover:text-primary text-base-100">
            <FaLinkedin size={35} />
          </a>
          <a href="https://twitter.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary text-base-100">
            <FaSquareXTwitter size={35} />
          </a>
        </div>

        {/* Resume Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-center">
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline rounded-full text-white hover:bg-primary hover:text-black">
            View Resume
          </a>
          <a href="/resume.pdf" download className="btn btn-primary  rounded-full text-black">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
