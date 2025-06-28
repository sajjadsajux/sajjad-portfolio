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
    <div>
      <section id="hero" className="py-20 bg">
        <Hero />
      </section>
      <section id="about" className="py-20 bg">
        <About />
      </section>
      <section id="skills" className="py-20 bg">
        <Skills />
      </section>
      <section id="experience" className="py-20 bg">
        <Experience />
      </section>
      <section id="education" className="py-20 bg">
        <Education />
      </section>
      {/* <section id="projects" className="py-20 bg">
        <Projects />
      </section> */}
      <section id="contact" className="py-20 bg">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
