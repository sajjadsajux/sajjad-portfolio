import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { frontendSkills, backendSkills, tools } from "../../sections/Skills/skillsData";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="container mx-auto px-4   space-y-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Skills & Technologies</h2>

      {/* Frontend Section */}
      <section data-aos="fade-up">
        <h3 className="text-2xl font-semibold text-base-200 mb-2 text-center">Frontend</h3>
        {/* <p className="text-center max-w-3xl mx-auto mb-6 text-base-100">{frontendSkillsIntro}</p> */}

        <Marquee pauseOnHover gradient={false} speed={50} className="md:max-w-7xl mx-auto">
          {frontendSkills.map(({ name, logo, type }, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 text-white rounded-2xl shadow-md p-4 mx-4 flex-shrink-0" style={{ userSelect: "none", width: "160px", height: "180px" }}>
              <img src={logo} alt={name} className="w-16 h-16 mb-3 object-contain" />
              <span className="font-semibold text-lg text-center">{name}</span>
              <small className="text-sm opacity-80 text-center">{type}</small>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Backend Section */}
      <section data-aos="fade-right">
        <h3 className="text-2xl font-semibold text-base-200 mb-2 text-center">Backend</h3>
        {/* <p className="text-center max-w-3xl mx-auto mb-6 text-base-100">{backendSkillsIntro}</p> */}

        <Marquee pauseOnHover gradient={false} speed={50} direction="right" className="md:max-w-7xl mx-auto">
          {backendSkills.map(({ name, logo, type }, idx) => (
            <div key={idx} className="flex flex-col items-center bg-gradient-to-tr from-green-600 via-teal-700 to-cyan-700 text-white rounded-xl shadow-lg p-4 mx-4 flex-shrink-0 cursor-default select-none" style={{ userSelect: "none", width: "160px", height: "180px" }}>
              <img src={logo} alt={name} className="w-16 h-16 mb-3 object-contain" />
              <span className="font-semibold text-lg text-center">{name}</span>
              <small className="text-sm opacity-80 text-center">{type}</small>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Tools Section */}
      <section data-aos="zoom-in" className="md:p-0">
        <h3 className="text-2xl font-semibold text-base-200 mb-6 text-center">Tools & Packages</h3>
        <div className="grid grid-cols-3  md:grid-cols-5 lg:grid-cols-10  md:max-w-7xl mx-auto  md:justify-between items-center gap-3 md:gap-0 md:space-y-3">
          {tools.map(({ name, logo, type }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-gradient-to-tr from-purple-900 via-indigo-900 to-blue-900 text-white rounded-xl border border-transparent shadow-md hover:shadow-xl transition p-3 cursor-pointer select-none"
              title={`${name} — ${type}`}
              style={{ width: "100px", height: "140px" }}
            >
              <img src={logo} alt={name} className="w-10 h-10 mb-1 object-contain" />
              <span className="font-semibold text-sm text-center">{name}</span>
              <small className="text-xs text-white/80 text-center mt-0.5">{type}</small>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
