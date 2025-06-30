import React from "react";

const About = () => {
  return (
    <div className="container mx-auto px-4 text-center md:text-left ">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">About Me</h2>

      <div className="space-y-6 mb-10 text-base-100 md:max-w-6xl mx-auto">
        {/* Main Intro */}
        <p className="text-lg leading-relaxed">
          Hi! I'm <span className="font-semibold">Md Sajjad Hossain Saju</span>, a <strong>Junior MERN Stack Developer</strong> who loves building full-stack websites using the MERN stack. I’ve already worked with technologies like <strong>HTML, CSS, JavaScript, React, React Router, MongoDB</strong>
          , and I'm continuously learning and experimenting with new tools. I enjoy turning creative ideas into real, functional web applications—especially with a clean and responsive UI.
        </p>

        {/* Journey */}
        <p className="text-lg leading-relaxed">
          My journey started in a completely different field. For over 6 years, I worked as a Virtual Assistant and Team Lead, where I gained valuable experience in communication, problem-solving, and project coordination. That experience helped shape my ability to self-learn, stay focused, and work
          effectively. Now, I'm diving into full-stack development—building projects using tools like <strong>Tailwind CSS, Firebase, Vite</strong>, and others.
        </p>

        {/* Work I Enjoy */}
        <p className="text-lg leading-relaxed">
          I enjoy working on practical, real-world projects—especially those that can help others or improve everyday experiences. Whether it's a dashboard, a booking system, or a simple UI component, I love finding clean, user-friendly solutions with both frontend and backend logic.
        </p>

        {/* Goals */}
        <p className="text-lg leading-relaxed">My goal is to become a confident full-stack developer, contribute to open-source or freelance projects, and eventually work with a passionate development team solving meaningful problems around the world.</p>

        {/* Hobbies */}
        <p className="text-lg leading-relaxed">
          When I'm not coding, you’ll often find me planning in Notion, watching design breakdowns on YouTube, or sketching layout ideas in my notebook. I enjoy late-night work sessions with lo-fi music, and I’m always looking for ways to simplify my workflow and improve focus.
        </p>
      </div>

      {/* Interests & Fun Facts side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-6xl mx-auto ">
        {/* Interests & Passions */}
        <div className="rounded-xl p-6 shadow-md bg-gradient-to-tr from-green-700 via-teal-800 to-cyan-600 text-base-100 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-base-100 mb-4 border-b border-white/20 pb-2">Interests & Passions</h3>
          <ul className="space-y-3 list-disc list-inside leading-relaxed">
            <li>Exploring modern UI/UX trends and animations</li>
            <li>Learning from design breakdowns on YouTube</li>
            <li>Planning and journaling daily goals using Notion</li>
            <li>Creating clean, minimal, mobile-first layouts</li>
          </ul>
        </div>

        {/* Fun Facts */}
        <div className="rounded-xl p-6 shadow-md bg-gradient-to-tr from-green-700 via-teal-800 to-cyan-600 text-base-100 hover:shadow-lg transition">
          <h3 className="text-xl font-semibold text-base-100 mb-4 border-b border-white/20 pb-2">Fun Facts</h3>
          <ul className="space-y-3 list-disc list-inside leading-relaxed">
            <li>I sketch UI ideas before starting to code.</li>
            <li>I'm most productive at night with lo-fi beats playing.</li>
            <li>I love clean desktops and organized workspaces.</li>
            <li>I'm a self-taught developer who learns best by building.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
