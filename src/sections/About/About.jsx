import React, { useEffect, useState } from "react";
import { FaHandPeace, FaBookOpen, FaLightbulb, FaBullseye, FaPaintBrush, FaRocket, FaGlobe, FaMobileAlt, FaCamera, FaFutbol, FaHeadphones, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  // First accordion item open by default:
  const [openIndex, setOpenIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("interests");

  const toggleAccordion = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  const leftItems = [
    {
      icon: <FaHandPeace />,
      title: <TypeAnimation sequence={["Introduction", 2000, "", 1000]} speed={50} repeat={Infinity} />,
      text: `Hi! I'm Md Sajjad Hossain Saju, a Junior MERN Stack Developer who loves building full-stack websites using the MERN stack. I’ve already worked with technologies like HTML, CSS, JavaScript, React, React Router, MongoDB, and I'm continuously learning and experimenting with new tools. I enjoy turning creative ideas into real, functional web applications, especially with a clean and responsive UI.`,
    },
    {
      icon: <FaBookOpen />,
      title: "My Journey",
      text: `My journey started with making blogs on Google Sites and trying out free website builders. Later, I found WordPress. Even though it was easy to use, I always wanted to learn real coding. WordPress felt limited, so I decided to learn how websites actually work. I started with HTML from W3Schools, and since then, I’ve been learning from many online resources step by step.`,
    },
    {
      icon: <FaLightbulb />,
      title: "What I Enjoy",
      text: `I enjoy working on practical, real-world projects—especially those that can help others or improve everyday experiences. Whether it's a dashboard, a booking system, or a simple UI component, I love finding clean, user-friendly solutions with both frontend and backend logic.`,
    },
    {
      icon: <FaBullseye />,
      title: "My Goal",
      text: `My goal is to become a confident full-stack developer, contribute to open-source or freelance projects, and eventually work with a passionate development team solving meaningful problems around the world.`,
    },
  ];

  const interests = [
    {
      icon: <FaPaintBrush className="mt-1 text-lg" />,
      text: "Exploring UI/UX design and details that shape better user experiences",
    },
    {
      icon: <FaRocket className="mt-1 text-lg" />,
      text: "Brainstorming tech startup ideas and studying digital businesses",
    },
    {
      icon: <FaGlobe className="mt-1 text-lg" />,
      text: "Learning about world cultures and traditions",
    },
  ];

  const funFacts = [
    {
      icon: <FaMobileAlt className="mt-1 text-lg" />,
      text: "I love watching tech reviews and understanding how gadgets work",
    },
    {
      icon: <FaCamera className="mt-1 text-lg" />,
      text: "Passionate about photography — especially candid moments",
    },
    {
      icon: <FaFutbol className="mt-1 text-lg" />,
      text: "Big football fan — even enjoy checking live match stats",
    },
    {
      icon: <FaHeadphones className="mt-1 text-lg" />,
      text: "Coding feels better with curated music playlists",
    },
  ];

  return (
    <section className="bg-[linear-gradient(to_right,_#000428,_#004e92)] pt-12 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-0 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 bg-black/30 backdrop-blur-md p-6 rounded-lg">
          {/* LEFT SIDE - Accordion Timeline */}
          <div data-aos="fade-up" className="md:col-span-2 space-y-6 relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-primary/30 rounded-full hidden md:block"></div>

            {leftItems.map((item, index) => (
              <div key={index} className="bg-white/5 p-4 rounded-md border-l-4 border-primary pl-6 shadow-md relative">
                <div className="absolute -left-4 top-4 hidden md:block">
                  <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-sm">{index + 1}</div>
                </div>

                <button onClick={() => toggleAccordion(index)} className="w-full text-left flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-primary mb-1 flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </h3>
                  {openIndex === index ? <FaChevronUp className="text-primary" /> : <FaChevronDown className="text-primary" />}
                </button>

                {openIndex === index && <p className="text-sm md:text-base text-base-100 leading-relaxed mt-2 whitespace-pre-line">{item.text}</p>}
              </div>
            ))}
          </div>

          {/* RIGHT SIDE - Tabs */}
          <div className="space-y-6 " data-aos="fade-left">
            <div className="flex justify-center md:justify-start gap-4 mb-10">
              <button className={`px-4 py-2 rounded-full text-sm font-semibold ${activeTab === "interests" ? "bg-primary text-white animate-none" : "bg-white text-black animate-pulse"}`} onClick={() => setActiveTab("interests")}>
                Interests
              </button>
              <button className={`px-4 py-2 rounded-full text-sm font-semibold  ${activeTab === "fun" ? "bg-primary text-white animate-none" : "bg-white text-black animate-pulse"}`} onClick={() => setActiveTab("fun")}>
                Fun Facts
              </button>
            </div>

            <div className="bg-white/5 rounded-xl p-4 min-h-[360px] flex flex-col justify-center">
              {activeTab === "interests" && (
                <ul className="space-y-4 text-white text-sm leading-relaxed">
                  {interests.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}

              {activeTab === "fun" && (
                <ul className="space-y-4 text-white text-sm leading-relaxed">
                  {funFacts.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.icon}
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
