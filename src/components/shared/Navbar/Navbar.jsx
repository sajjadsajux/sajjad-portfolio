import { FaBriefcase, FaEnvelope, FaGraduationCap, FaHome, FaProjectDiagram, FaTools, FaUser } from "react-icons/fa";
import SajjadLogo from "../SajjadLogo/SajjadLogo";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <a href="#home" className="flex items-center gap-2 hover:text-primary">
          <FaHome /> Home
        </a>
      </li>
      <li>
        <a href="#about" className="flex items-center gap-2 hover:text-primary">
          <FaUser /> About Me
        </a>
      </li>
      <li>
        <a href="#skills" className="flex items-center gap-2 hover:text-primary">
          <FaTools /> Skills
        </a>
      </li>
      <li>
        <a href="#experience" className="flex items-center gap-2 hover:text-primary">
          <FaBriefcase /> Experience
        </a>
      </li>
      <li>
        <a href="#education" className="flex items-center gap-2 hover:text-primary">
          <FaGraduationCap /> Education
        </a>
      </li>
      <li>
        <a href="#projects" className="flex items-center gap-2 hover:text-primary">
          <FaProjectDiagram /> Projects
        </a>
      </li>
      <li>
        <a href="#contact" className="flex items-center gap-2 hover:text-primary">
          <FaEnvelope /> Contact
        </a>
      </li>
    </>
  );

  return (
    <div className="navbar   text-white max-w-7xl mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {" "}
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />{" "}
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-primary rounded-box z-1 mt-3 w-24 p-2 shadow text-black">
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <SajjadLogo></SajjadLogo>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 glass rounded-2xl  font-semibold text-white text-base ">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2 ">
        <a href="#contact" className=" btn btn-sm   btn-primary text-black dark:text-white rounded-2xl">
          Contact
        </a>
        {/* <ThemeToggle></ThemeToggle> */}
      </div>
    </div>
  );
};

export default Navbar;
