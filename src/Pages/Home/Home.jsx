import ArrowDown from "../../components/ArrowDown/ArrowDown";
import About from "../../sections/About/About";
import Contact from "../../sections/Contact/Contact";
import Education from "../../sections/Education/Education";
import Experience from "../../sections/Experience/Experience";
import Hero from "../../sections/Hero/Hero";
import Projects from "../../sections/Projects/Projects";
import Skills from "../../sections/Skills/Skills";

const Home = () => {
  return (
    <div id="home" className="scroll-mt-24">
      <section id="" className=" scroll-mt-16 bg-[linear-gradient(to_right,_#000428,_#004e92)]">
        <Hero />
        <ArrowDown targetId="about" />
      </section>
      <section id="about" className=" scroll-mt-16 ">
        <About />
      </section>
      <section id="skills" className=" scroll-mt-16">
        <Skills />
      </section>
      <section id="experience" className=" ">
        <Experience />
      </section>
      <section id="education" className=" scroll-mt-16">
        <Education />
      </section>
      <section id="projects" className=" scroll-mt-16">
        <Projects />
      </section>
      <section id="contact" className=" scroll-mt-16">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
