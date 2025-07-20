import React, { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaEye, FaDownload, FaTwitter } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import ArrowDown from "../../components/ArrowDown/ArrowDown";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      const effect = CLOUDS({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        backgroundColor: 0xffffff,
        skyColor: 0x7fcce2, // Slightly brighter
        cloudColor: 0xc4d4e3, // Brighter cloud
        cloudShadowColor: 0x1b3c60,
        sunColor: 0xff9919,
        sunGlareColor: 0xff6633,
        sunlightColor: 0xff9933,
        speed: 0.7,
        scale: 1.0,
        scaleMobile: 0.5,
      });
      setVantaEffect(effect);
    }
    return () => {
      vantaEffect?.destroy?.();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative w-full md:min-h-[94vh] lg:min-h-[94vh] px-4 overflow-hidden text-white flex items-center ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-10 py-20 z-10">
        {/* Left - Profile Image */}
        <motion.div initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="relative w-full md:w-2/5 flex justify-center">
          <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2}>
            <motion.div whileHover={{ scale: 1.03 }} className="w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
              <img src="https://i.ibb.co/mCnMS4RM/Sajjad-PFP2-Enhanced.png" alt="Sajjad Saju" className="w-full h-full object-cover" />
              <div className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-3 py-1 rounded-full animate-pulse shadow-md">Available for Hire</div>
            </motion.div>
          </Tilt>
        </motion.div>

        {/* Right - Content */}
        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="w-full md:w-3/5 text-center md:text-left space-y-4 ">
          <p className="inline-block text-xl sm:text-2xl font-bold text-black bg-primary  px-2 rounded ">Hi, I'm</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight ">MD Sajjad Hossain Saju</h1>
          <TypeAnimation sequence={["Junior MERN Stack Developer", 2000, "", 500]} wrapper="h2" speed={40} repeat={Infinity} className="text-xl md:text-2xl lg:text-3xl font-semibold  mt-2 text-black bg-primary inline-block px-2 rounded" />
          {/* Tech Logos */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center md:justify-start">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React.js" className="w-9 h-9 p-1 bg-white/10 rounded-lg border border-white/20 hover:scale-110 transition" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="w-9 h-9 p-1 bg-white/10 rounded-lg border border-white/20 hover:scale-110 transition" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" alt="Express" className="w-9 h-9 p-1 bg-white rounded-lg border border-white/20 hover:scale-110 transition" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-9 h-9 p-1 bg-white/10 rounded-lg border border-white/20 hover:scale-110 transition" />
          </div>
          {/* Social Links */}
          <div className="flex gap-6 text-3xl text-white mt-6 justify-center md:justify-start">
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
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <a href="https://drive.google.com/file/d/1i12Otf2_31d-8wypWisx1MRQFekLZJvw/preview" target="_blank" rel="noreferrer" className="btn btn-outline rounded-full text-white hover:bg-primary hover:text-black flex items-center gap-2">
              <FaEye /> View Resume
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1i12Otf2_31d-8wypWisx1MRQFekLZJvw" className="btn btn-primary rounded-full text-black hover:bg-primary-focus flex items-center gap-2">
              <FaDownload /> Download Resume
            </a>
          </div>
        </motion.div>
      </div>

      {/* ArrowDown fixed to bottom center */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
        <ArrowDown targetId="about" />
      </div>
    </div>
  );
};

export default Hero;
