import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center md:text-left ">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">About Me</h2>

      <div className="space-y-6 mb-10 text-base-100 md:max-w-6xl mx-auto">
        {/* Main intro */}
        <p className="text-lg leading-relaxed ">
          Hi! I'm <span className="font-semibold ">Md Sajjad Hossain Saju</span>, learning to build full-stack websites using the <strong>MERN stack</strong>. I’ve already worked with <strong>HTML, CSS, JavaScript, React, React Router, and MongoDB</strong>. I enjoy turning ideas into real web
          applications and love clean, responsive UI.
        </p>

        {/* Journey */}
        <p className="text-lg leading-relaxed ">
          I started from a non-tech background as a Virtual Assistant and Team Lead for 6+ years. That experience built my communication, management, and self-learning skills. Now I’m diving into full-stack development by building projects and learning tools like Firebase, Tailwind, and more.
        </p>

        {/* Goals */}
        <p className="text-lg leading-relaxed ">My goal is to become a confident full-stack developer and work on meaningful projects that help people and solve real-world problems.</p>
      </div>

      {/* Interests & Fun Facts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-6xl mx-auto ">
        {/* Interests & Passions */}
        <div className="rounded-xl p-6 shadow-md bg-gradient-to-tr from-green-700 via-teal-800 to-cyan-600 text-base-100 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-base-100 mb-4 border-b border-white/20 pb-2">Your Interests & Passions</h3>
          <ul className="space-y-3 list-disc list-inside leading-relaxed  ">
            <li>Exploring modern UI/UX trends</li>
            <li>Learning from design breakdowns on YouTube</li>
            <li>Planning and organizing using Notion</li>
            <li>Creating clean, minimal, mobile-first layouts</li>
          </ul>
        </div>

        {/* Fun Facts */}
        <div className="rounded-xl p-6 shadow-md bg-gradient-to-tr from-green-700 via-teal-800 to-cyan-600 text-base-100 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-base-100 mb-4 border-b border-white/20 pb-2">Fun Facts</h3>
          <ul className="space-y-3 list-disc list-inside leading-relaxed  ">
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
