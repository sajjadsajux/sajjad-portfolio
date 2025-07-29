import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { frontendSkills, backendSkills, tools } from "../../sections/Skills/skillsData";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section className="bg-[linear-gradient(to_right,_#000428,_#004e92)] min-h-screen py-16 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Skills & Technologies</h2>

      <div className="max-w-7xl mx-auto px-4 space-y-4  backdrop-blur-md p-6 rounded-lg">
        {/* Frontend Section */}
        <section data-aos="fade-up">
          <h3 className="text-2xl font-semibold text-base-200 mb-6 text-center">Frontend</h3>
          <Marquee pauseOnHover gradient={false} speed={50} className="md:max-w-7xl mx-auto">
            {frontendSkills.map(({ name, logo, type }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl shadow-md p-5 mx-3 flex-shrink-0 hover:bg-primary hover:text-black transition-transform duration-300"
                style={{ width: "180px", height: "140px" }}
              >
                <img src={logo} alt={name} className="w-12 h-12 mb-3 object-contain" />
                <span className="font-semibold text-lg text-center">{name}</span>
                <small className="text-sm opacity-70 text-center">{type}</small>
              </div>
            ))}
          </Marquee>
        </section>

        {/* Backend Section */}
        <section data-aos="fade-left">
          <h3 className="text-2xl font-semibold text-base-200 mb-6 text-center">Backend</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {backendSkills.map(({ name, logo, type }, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border-l-4 border-primary px-5 py-4 rounded-lg hover:scale-[1.03] transition-transform duration-300">
                <img src={logo} alt={name} className="w-12 h-12 object-contain" />
                <div>
                  <h4 className="text-lg font-semibold">{name}</h4>
                  <p className="text-sm text-gray-200/70">{type}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section data-aos="zoom-in-up" className="mt-10">
          <h3 className="text-2xl font-semibold text-base-200 mb-6 text-center">Tools & Packages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map(({ name, logo, type }, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-white/10 text-white px-4 py-2 rounded-full border border-white/20 backdrop-blur-md hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-default">
                <img src={logo} alt={name} className="w-5 h-5 object-contain" />
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs opacity-50">({type})</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Skills;
