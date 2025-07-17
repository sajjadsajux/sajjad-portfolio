import React from "react";
import { FaHandPeace, FaBookOpen, FaLightbulb, FaBullseye, FaPaintBrush, FaRocket, FaGlobe, FaMobileAlt, FaCamera, FaFutbol, FaHeadphones } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
      {/* Section Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">About Me</h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Timeline - Left Side (col-span-2) */}
        <div className="md:col-span-2 border-l-2 border-primary pl-6 space-y-10">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
              <FaHandPeace className="text-lg" />
              <TypeAnimation sequence={["Introduction", 2000, "", 1000]} wrapper="span" speed={50} repeat={Infinity} />
            </h3>
            <p className="text-base leading-relaxed text-base-100">
              Hi! I'm <strong>Md Sajjad Hossain Saju</strong>, a <strong>Junior MERN Stack Developer</strong> who loves building full-stack websites using the MERN stack. I’ve already worked with technologies like <strong>HTML, CSS, JavaScript, React, React Router, MongoDB</strong>, and I'm
              continuously learning and experimenting with new tools. I enjoy turning creative ideas into real, functional web applications, especially with a clean and responsive UI.
            </p>
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
              <FaBookOpen className="text-lg" /> My Journey
            </h3>
            <p className="text-base leading-relaxed text-base-100">
              My journey started with making blogs on Google Sites and trying out free website builders. Later, I found WordPress. Even though it was easy to use, I always wanted to learn real coding. WordPress felt limited, so I decided to learn how websites actually work. I started with HTML from
              W3Schools, and since then, I’ve been learning from many online resources step by step.
            </p>
          </div>

          {/* Step 3 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
              <FaLightbulb className="text-lg" /> What I Enjoy
            </h3>
            <p className="text-base leading-relaxed text-base-100">
              I enjoy working on practical, real-world projects—especially those that can help others or improve everyday experiences. Whether it's a dashboard, a booking system, or a simple UI component, I love finding clean, user-friendly solutions with both frontend and backend logic.
            </p>
          </div>

          {/* Step 4 */}
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2 flex items-center gap-2">
              <FaBullseye className="text-lg" /> My Goal
            </h3>
            <p className="text-base leading-relaxed text-base-100">My goal is to become a confident full-stack developer, contribute to open-source or freelance projects, and eventually work with a passionate development team solving meaningful problems around the world.</p>
          </div>
        </div>

        {/* Right Side - Interests and Fun Facts */}
        <div className="space-y-12">
          {/* Interests */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaLightbulb className="text-lg" /> Interests Outside of Programming
            </h3>
            <ul className="space-y-3 list-none text-white leading-relaxed">
              <li className="flex items-start gap-3">
                <FaPaintBrush className="mt-1 text-lg" />
                <span>Exploring UI/UX design and details that shape better user experiences</span>
              </li>
              <li className="flex items-start gap-3">
                <FaRocket className="mt-1 text-lg" />
                <span>Brainstorming tech startup ideas and studying digital businesses</span>
              </li>
              <li className="flex items-start gap-3">
                <FaGlobe className="mt-1 text-lg" />
                <span>Learning about world cultures and traditions</span>
              </li>
            </ul>
          </div>

          {/* Fun Facts */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <FaHeadphones className="text-lg" /> Fun Facts About Me
            </h3>
            <ul className="space-y-3 list-none text-white leading-relaxed">
              <li className="flex items-start gap-3">
                <FaMobileAlt className="mt-1 text-lg" />
                <span>I love watching tech reviews and understanding how gadgets work</span>
              </li>
              <li className="flex items-start gap-3">
                <FaCamera className="mt-1 text-lg" />
                <span>Passionate about photography — especially candid moments</span>
              </li>
              <li className="flex items-start gap-3">
                <FaFutbol className="mt-1 text-lg" />
                <span>Big football fan — even enjoy checking live match stats</span>
              </li>
              <li className="flex items-start gap-3">
                <FaHeadphones className="mt-1 text-lg" />
                <span>Coding feels better with curated music playlists</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
