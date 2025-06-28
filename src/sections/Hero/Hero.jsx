import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="bg-base-100 min-h-[60vh] flex flex-col md:flex-row items-center justify-between px-6 py-20 container mx-auto">
      {/* Left - Profile Image (2/5) */}
      <div className="w-full md:w-2/5 flex justify-center mb-8 md:mb-0">
        <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg border-4 border-base-200">
          <img src="/profile.jpg" alt="Sajjad Saju" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right - Text Content (3/5) */}
      <div className="w-full md:w-3/5 text-center md:text-left max-w-xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">Sajjad Saju</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-4">Frontend Web Developer</h2>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start gap-5 text-2xl mb-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-primary">
            <FaTwitter />
          </a>
        </div>

        {/* Resume Button */}
        <a href="/resume.pdf" download className="btn btn-primary rounded-full">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
