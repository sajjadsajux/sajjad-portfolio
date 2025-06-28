import React from "react";
const experiences = [
  {
    company: "UrBackoffices",
    position: "Virtual Assistant & Team Lead",
    duration: "Mar 2018 – Nov 2024",
    description: ["Led a team of virtual assistants for client support and data entry.", "Handled project coordination and web research tasks.", "Maintained communication between clients and internal teams."],
  },
  {
    company: "Freelance",
    position: "Frontend Developer",
    duration: "2024 – Present",
    description: ["Built responsive web apps with React, Tailwind, Firebase.", "Collaborated with clients to deliver portfolio and dashboard projects.", "Continuously learning and improving frontend development skills."],
  },
];

const Experience = () => {
  return (
    <div className="container mx-auto px-4 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Experience</h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-base-200 p-6 rounded-lg shadow hover:shadow-lg transition">
            <div className="flex flex-col md:flex-row md:justify-between mb-2">
              <h3 className="text-xl font-semibold">{exp.position}</h3>
              <span className="text-sm text-base-content/70">{exp.duration}</span>
            </div>
            <h4 className="text-primary font-medium mb-2">{exp.company}</h4>
            <ul className="list-disc list-inside space-y-1 text-base-content">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
