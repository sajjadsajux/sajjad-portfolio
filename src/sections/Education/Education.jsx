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
    <section id="education" className="bg-[linear-gradient(to_right,_#000428,_#004e92)] py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Education</h2>

      <div className="max-w-7xl mx-auto relative bg-black/30 p-6 rounded-lg">
        <div className="border-l-4 border-primary pl-6">
          {education.map((edu, index) => (
            <div key={index} data-aos="fade-up" className=" relative group my-2">
              {/* Icon */}
              <div className="absolute -left-7 top-1 bg-primary text-white p-2 rounded-full shadow-lg text-lg">
                <FaGraduationCap />
              </div>

              {/* Card */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-6 text-white group-hover:scale-[1.02] transition duration-300">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-base font-medium">
                  {edu.department}
                  {" – "}
                  <a href={edu.link} target="_blank" rel="noreferrer" className="text-lime-300 hover:underline inline-flex items-center gap-2">
                    {edu.logo && <img src={edu.logo} alt={`${edu.institution} logo`} className="w-6 h-6 object-contain rounded-sm" />}
                    {edu.institution}
                  </a>
                </p>
                <p className="text-sm text-white/70 italic mt-1">{edu.duration}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
