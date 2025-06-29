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
    <div className="container mx-auto px-4 py-16 ">
      <h2 className="text-4xl font-extrabold text-primary mb-12 text-center tracking-wide">Education</h2>

      <div className="max-w-3xl mx-auto space-y-10 relative before:absolute before:top-0 before:left-7 before:h-full before:w-1 before:bg-primary/30">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-16 py-6 bg-base-200 rounded-xl border border-base-300 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-transform duration-300">
            {/* Graduation Cap Icon */}
            <span className="absolute left-2 top-7 text-primary text-2xl">
              <FaGraduationCap />
            </span>

            <h3 className="text-2xl font-bold text-primary mb-2">{edu.degree}</h3>

            <p className="text-base-content text-lg mb-1 flex items-center gap-3">
              {edu.department} –{" "}
              <a href={edu.link} target="_blank" rel="noreferrer" className="font-semibold text-secondary hover:underline flex items-center gap-2">
                {edu.logo && <img src={edu.logo} alt={edu.institution + " logo"} className="w-8 h-8 object-contain rounded-sm" />}
                {edu.institution}
              </a>
            </p>

            <p className="text-sm text-base-content/70">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
