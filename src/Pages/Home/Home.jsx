import React from "react";
import Hero from "../../sections/Hero/Hero";
import About from "../../sections/About/About";
import Skills from "../../sections/Skills/Skills";
import Projects from "../../sections/Projects/Projects";
import Contact from "../../sections/Contact/Contact";
import Experience from "../../sections/Experience/Experience";
import Education from "../../sections/Education/Education";

const Home = () => {
  return (
    <div id="home">
      <section id="hero" className="py-10 ">
        <Hero />
      </section>
      <section id="about" className="py-10 ">
        <About />
      </section>
      <section id="skills" className="py-10 ">
        <Skills />
      </section>
      <section id="experience" className="py-10 ">
        <Experience />
      </section>
      <section id="education" className="py-10 ">
        <Education />
      </section>
      <section id="projects" className="py-10 ">
        <Projects />
      </section>
      <section id="contact" className="py-10 ">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
