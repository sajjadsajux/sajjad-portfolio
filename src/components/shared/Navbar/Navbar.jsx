import React from "react";
import ThemeToggle from "../../Theme/ThemeToggle";
import SajjadLogo from "../SajjadLogo/SajjadLogo";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a href="#home" className="hover:text-primary">
          Home
        </a>
      </li>
      <li>
        <a href="#about" className="hover:text-primary">
          About Me
        </a>
      </li>
      <li>
        <a href="#skills" className="hover:text-primary">
          Skills
        </a>
      </li>
      {/* <li>
        <a href="#experience" className="hover:text-primary">
          Experience
        </a>
      </li> */}
      <li>
        <a href="#education" className="hover:text-primary">
          Education
        </a>
      </li>
      <li>
        <a href="#projects" className="hover:text-primary">
          Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="hover:text-primary">
          Contact
        </a>
      </li>
    </>
  );
  return (
    <div className="navbar   text-white container mx-auto">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-24 p-2 shadow text-black">
            {navLinks}
          </ul>
        </div>
        <div>
          <SajjadLogo></SajjadLogo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 glass rounded-2xl  font-semibold text-primary text-base ">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        <a href="#contact" className=" btn btn-sm  btn-primary text-black dark:text-white ">
          Contact
        </a>
        {/* <ThemeToggle></ThemeToggle> */}
      </div>
    </div>
  );
};

export default Navbar;
