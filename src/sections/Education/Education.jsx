import React from "react";
import { FaGraduationCap } from "react-icons/fa";
const education = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "National University Bangladesh",
    department: "Department of Management",
    link: "https://www.nu.ac.bd/",
    duration: "Completed on 2024",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/5/58/National_University%2C_Bangladesh_crest.svg/1200px-National_University%2C_Bangladesh_crest.svg.png",
  },
];

const Education = () => {
  return (
    <div className="px-4  text-base-content">
      <h2 className="text-4xl font-extrabold text-primary mb-12 text-center tracking-wide">Education</h2>

      <div className="max-w-6xl mx-auto relative space-y-12 before:absolute before:top-0 before:left-7 before:h-full before:w-1 before:bg-gradient-to-b from-green-400/40 to-green-700/40">
        {education.map((edu, index) => (
          <div
            key={index}
            data-aos="zoom-in-up"
            data-aos-duration="1200"
            className="relative pl-12 md:pl-16 py-6 px-4 sm:px-6 bg-gradient-to-tr from-green-700 via-teal-800 to-cyan-600 text-white rounded-2xl border border-green-600/30 shadow-lg shadow-green-900/50 backdrop-blur-sm hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Icon */}
            <span className="absolute left-4 top-6 text-white text-2xl sm:text-3xl drop-shadow-lg">
              <FaGraduationCap />
            </span>

            {/* Degree */}
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 tracking-tight drop-shadow-md">{edu.degree}</h3>

            {/* Department & Institution */}
            <p className="text-base sm:text-lg flex flex-wrap gap-x-2 items-center mb-2 font-semibold drop-shadow-sm">
              {edu.department} –
              <a href={edu.link} target="_blank" rel="noreferrer" className="text-lime-300 hover:text-lime-400 hover:underline inline-flex items-center gap-2 transition-colors">
                {edu.logo && <img src={edu.logo} alt={`${edu.institution} logo`} className="w-6 h-6 sm:w-8 sm:h-8 object-contain rounded-md" />}
                {edu.institution}
              </a>
            </p>

            {/* Duration */}
            <p className="text-sm text-white/70 italic tracking-wide">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
