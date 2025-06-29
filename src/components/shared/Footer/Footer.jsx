import React from "react";
import SajjadLogo from "../SajjadLogo/SajjadLogo";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="py-4 bg-glass">
      <div className="px-4 max-w-5xl mx-auto text-center text-sm text-base-100 space-y-2">
        {/* Logo (optional inline) */}
        <div className="flex justify-center mb-2">
          <SajjadLogo />
        </div>

        {/* Centered copyright + Made with line */}
        <div>
          <p>© {new Date().getFullYear()} Sajjad Saju. All rights reserved.</p>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4 text-lg mt-2">
          <a href="https://github.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/sajjadsaju" target="_blank" rel="noreferrer" className="hover:text-primary transition">
            <FaLinkedin />
          </a>
          <a href="https://twitter.com/sajjadsajux" target="_blank" rel="noreferrer" className="hover:text-primary transition">
            <FaSquareXTwitter />
          </a>
        </div>
        <p className="text-xs text-base-100/80 mt-1">Made with ❤️ using React & Tailwind CSS</p>
      </div>
    </footer>
  );
};

export default Footer;
