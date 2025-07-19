import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 py-12 lg:min-h-[70vh] md:max-h-[70vh]">
      <div className="flex flex-col md:flex-row items-center justify-between md:items-stretch gap-8 md:gap-16">
        {/* Left - Profile Image */}
        <div className="w-full md:w-2/5 flex justify-center md:justify-start">
          <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-3/4 md:h-auto rounded-3xl overflow-hidden shadow-lg border-4 border-base-200" data-aos="zoom-in-right" data-aos-duration="1200">
            <img src="https://i.ibb.co/mCnMS4RM/Sajjad-PFP2-Enhanced.png" alt="Sajjad Saju" className="w-full h-full object-cover transition-opacity duration-500 ease-in-out" style={{ aspectRatio: "1 / 1" }} />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full md:w-3/5 flex flex-col justify-center  md:text-left gap-4 ">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Hi, I'm</p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">MD Sajjad Hossain Saju</h1>

          <TypeAnimation sequence={["Junior MERN Stack Developer", 3000, "Open to Collaboration", 2000]} wrapper="h2" speed={30} repeat={Infinity} className="text-lg sm:text-2xl md:text-4xl font-semibold text-primary mb-6 min-h-[2.5rem]" />

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-6 text-3xl sm:text-4xl text-base-100 mb-6">
            <a href="https://github.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaGithub size={35} />
            </a>
            <a href="https://linkedin.com/in/sajjadsaju" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaLinkedin size={35} />
            </a>
            <a href="https://twitter.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">
              <FaSquareXTwitter size={35} />
            </a>
          </div>

          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            {/* View Resume */}
            <a href="https://drive.google.com/file/d/1i12Otf2_31d-8wypWisx1MRQFekLZJvw/preview" target="_blank" rel="noreferrer" className="btn btn-outline rounded-full text-white hover:bg-primary hover:text-black transition">
              View Resume
            </a>

            {/* Download Resume */}
            <a href="https://drive.google.com/uc?export=download&id=1i12Otf2_31d-8wypWisx1MRQFekLZJvw" className="btn btn-primary rounded-full text-black hover:bg-primary-focus transition">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
