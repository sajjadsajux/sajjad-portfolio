import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">About Me</h2>

      <div className=" space-y-6 mb-10">
        {/* Main intro */}
        <p className="text-lg leading-relaxed text-base-content">
          Hi! I'm <span className="font-semibold text-primary">Sajjad Saju</span>, learning to build full-stack websites using the <strong>MERN stack</strong>. I’ve already worked with <strong>HTML, CSS, JavaScript, React, React Router, and MongoDB</strong>. I enjoy turning ideas into real web
          applications and love clean, responsive UI.
        </p>

        {/* Journey */}
        <p className="text-lg leading-relaxed text-base-content">
          I started from a non-tech background as a Virtual Assistant and Team Lead for 6+ years. That experience built my communication, management, and self-learning skills. Now I’m diving into full-stack development by building projects and learning tools like Firebase, Tailwind, and more.
        </p>

        {/* Goals */}
        <p className="text-lg leading-relaxed text-base-content">My goal is to become a confident full-stack developer and work on meaningful projects that help people and solve real-world problems.</p>
      </div>

      {/* Interests & Fun Facts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Interests & Passions */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">Your Interests & Passions</h3>
          <ul className="list-disc list-inside text-base-content space-y-1">
            <li>Exploring modern UI/UX trends</li>
            <li>Learning from design breakdowns on YouTube</li>
            <li>Planning and organizing using Notion</li>
            <li>Creating clean, minimal, mobile-first layouts</li>
          </ul>
        </div>

        {/* Fun Facts */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-2">Fun Facts</h3>
          <ul className="list-disc list-inside text-base-content space-y-1">
            <li>I sketch UI ideas before coding.</li>
            <li>I work best late at night with lo-fi beats.</li>
            <li>I track my daily goals using Notion.</li>
            <li>I love clean workspaces and focused routines.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
