import React, { useEffect } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Particles from "../../components/animations/Particles/Particles";

const experience = [
  {
    company: "UrBackoffices",
    position: "Virtual Assistant & Team Lead",
    duration: "Mar 2018 – Nov 2024",
    summary: "I had the privilege of working at UrBackoffices for almost seven years, where I grew, learned, and worked with an amazing team. As a Virtual Assistant and Team Lead, I consistently gave my best effort to handle every task and responsibility that came my way.",
    responsibilities: [
      {
        title: "Team Lead 👥",
        description: "Led the team of Virtual Assistants, offering support and guidance to ensure projects were completed successfully. Managed tasks, tracked progress, and helped solve challenges.",
      },
      {
        title: "Data Entry & VA Tasks 📝",
        description: "Performed data entry and virtual assistant tasks accurately and efficiently for international clients, using various global databases and software.",
      },
      {
        title: "Team Collaboration 🤝",
        description: "Worked with team members on most of the projects requested by clients and the office, ensuring everything was completed on time and to a high standard.",
      },
      {
        title: "Office Management 🏢",
        description: "Managed daily office tasks and communication, stepping in to handle office manager duties whenever needed, ensuring everything ran smoothly.",
      },
      {
        title: "Training & Mentorship 📚",
        description: "Helped train new team members on data entry tasks and office processes, creating a supportive and collaborative environment.",
      },
      {
        title: "Process Improvement 🔧",
        description: "Worked with management to suggest ways to improve office processes, making everything run more efficiently.",
      },
    ],
    closing: "UrBackoffices was more than just a job, it was a place where I grew, learned, and made great memories. I’m truly thankful for all the opportunities and experiences I gained along the way.",
  },
];

const ExperienceCard = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);
  return (
    <div className="md:max-w-6xl mx-auto  px-6 py-10  bg-gradient-to-r from-[#000046] via-[#093744] to-[#000046] rounded-lg">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Experience</h2>

      <div className="relative  ">
        {experience.map((exp, idx) => (
          <React.Fragment key={idx}>
            {/* Card */}
            <div className="flex flex-col glass bg-opacity-60 rounded-lg border border-cyan-700 p-6 shadow-md hover:shadow-lg transition duration-300 " data-aos="zoom-in-down" data-aos-duration="5000" data-aos-mirror="true" data-aos-once="false">
              <div className="flex justify-between items-center mb-1 ">
                <h3 className="text-xl font-semibold text-base-100">{exp.position}</h3>
                <span className="text-sm text-primary">{exp.duration}</span>
              </div>
              <h4 className="text-primary font-medium mb-2">{exp.company}</h4>
              <p className="text-gray-200 mb-4 leading-relaxed text-sm md:text-base">{exp.summary}</p>
              <ul className="list-disc list-inside space-y-1 text-base-100 text-sm md:text-base max-h-36 overflow-y-auto pr-2">
                {exp.responsibilities.map(({ title, description }, i) => (
                  <li key={i}>
                    <strong className="text-primary">{title}:</strong> {description}
                  </li>
                ))}
              </ul>
              <p className="mt-4 italic text-gray-400 text-sm">{exp.closing}</p>
            </div>

            {/* Arrow except last */}
            {idx < experience.length - 1 && (
              <div className="flex justify-center mt-4 mb-6">
                <FaArrowUp className="text-cyan-300 animate-bounce" size={24} />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      {/* <div style={{ width: "100%", height: "100%", position: "absolute" }}>
        <Particles particleColors={["#ffffff", "#ffffff"]} particleCount={200} particleSpread={10} speed={0.1} particleBaseSize={100} moveParticlesOnHover={true} alphaParticles={false} disableRotation={false} />
      </div> */}
    </div>
  );
};

export default ExperienceCard;
