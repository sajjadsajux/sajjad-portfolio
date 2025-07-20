import React from "react";
import { FaGithub, FaLinkedin, FaEye, FaDownload, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:py-12 md:min-h-[82vh] lg:min-h-[80vh] overflow-hidden ">
      <div className="flex flex-col lg:flex-row-reverse items-center justify-between gap-10 pt-20">
        {/* Left - Profile Image with Animated Ring & Tilt */}
        {/* Left - Profile Image with Animated Ring & Tilt */}
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative w-full md:w-2/5 flex flex-col items-center gap-4">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} className="z-10">
            <motion.div whileHover={{ scale: 1.03 }} className="w-64 lg:w-96 h-64 lg:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-base-200 relative bg-base-100">
              <img src="https://i.ibb.co/mCnMS4RM/Sajjad-PFP2-Enhanced.png" alt="Sajjad Saju" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-md">Available for Hire</div>
            </motion.div>
          </Tilt>

          {/* Social Links Below Image */}
          <div className="md:flex gap-6 text-2xl text-base-100 mt-2  hidden ">
            <a href="https://github.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaGithub size={35} />
            </a>
            <a href="https://linkedin.com/in/sajjadsaju" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaLinkedin size={35} />
            </a>
            <a href="https://twitter.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaTwitter size={35} />
            </a>
          </div>
        </motion.div>

        {/* Right - Text Content */}
        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="w-full md:w-3/5 text-center lg:text-left space-y-6">
          <p className="text-xl sm:text-2xl font-bold text-primary">Hi, I'm</p>

          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">MD Sajjad Hossain Saju</h1>

          {/* Type Animation */}
          <TypeAnimation sequence={["Junior MERN Stack Developer", 2000, "", 500]} wrapper="h2" speed={40} repeat={Infinity} className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary mt-2" />

          {/* Tech Stack Badges */}
          {/* Tech Stack Logos */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            {/* React.js */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" title="React.js" className="w-9 h-9 p-1 bg-white/10 rounded-lg border border-white/20 hover:scale-110 transition" />

            {/* Node.js */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" title="Node.js" className="w-9 h-9 p-1 bg-white/10 rounded-lg border border-white/20 hover:scale-110 transition" />

            {/* Express */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" title="Express" className="w-9 h-9 p-1 bg-white rounded-lg border border-white/20 hover:scale-110 transition" />

            {/* MongoDB */}
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" title="MongoDB" className="w-9 h-9 p-1 bg-white/10 rounded-lg border border-white/20 hover:scale-110 transition" />
          </div>

          {/* Social Links */}
          <div className="flex gap-6 text-3xl text-base-100 mt-6 justify-center md:justify-start  md:hidden">
            <a href="https://github.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/sajjadsaju" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition">
              <FaTwitter />
            </a>
          </div>

          {/* Resume Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
            <a href="https://drive.google.com/file/d/1i12Otf2_31d-8wypWisx1MRQFekLZJvw/preview" target="_blank" rel="noreferrer" className="btn btn-outline rounded-full text-white hover:bg-primary hover:text-black flex items-center gap-2">
              <FaEye /> View Resume
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1i12Otf2_31d-8wypWisx1MRQFekLZJvw" className="btn btn-primary rounded-full text-black hover:bg-primary-focus flex items-center gap-2">
              <FaDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
