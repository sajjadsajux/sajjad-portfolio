import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 75 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Firebase", level: 70 },
  ];

  return (
    <div className="container mx-auto px-4 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">My Skills</h2>

      <div className="space-y-6">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="text-base font-medium">{skill.name}</span>
              <span className="text-sm text-right text-primary">{skill.level}%</span>
            </div>
            <progress className="progress progress-primary w-full h-4" value={skill.level} max="100"></progress>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
