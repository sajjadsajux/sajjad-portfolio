import React from "react";
const education = [
  {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "National University",
    department: "Department of Management",
    duration: "Completed",
  },
];

const Education = () => {
  return (
    <div className="container mx-auto px-4 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Education</h2>

      <div className="bg-base-100 p-6 rounded-lg shadow max-w-2xl mx-auto">
        {education.map((edu, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-base-content mb-1">{edu.degree}</h3>
            <p className="text-base text-base-content">
              {edu.department} – <span className="font-medium">{edu.institution}</span>
            </p>
            <p className="text-sm text-base-content/70 mt-1">{edu.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
