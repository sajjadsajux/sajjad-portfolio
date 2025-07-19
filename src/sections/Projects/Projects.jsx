import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import project from "../Projects/projects.json";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [showDetails, setShowDetails] = useState(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <section className="bg-[linear-gradient(to_right,_#000428,_#004e92)] py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:max-w-7xl mx-auto bg-black/30 p-6 rounded-lg">
        {project.map((project, idx) => (
          <div key={idx} className="bg-white/10 rounded-xl shadow-md p-4  flex flex-col justify-between hover:shadow-xl transition transform hover:scale-[1.02]" data-aos="zoom-in-up">
            {/* Image Section */}
            <div className="w-full mb-4">
              {showDetails === idx ? (
                <div className="grid grid-cols-1 gap-2">
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`Project image ${i + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  ))}
                </div>
              ) : (
                <Slider {...settings}>
                  {project.images.map((img, i) => (
                    <img key={i} src={img} alt={`Project screenshot ${i + 1}`} className="w-full h-64 object-cover rounded-lg" />
                  ))}
                </Slider>
              )}
            </div>

            {/* Title & Description */}
            <div className="mb-3">
              <h3 className="text-lg font-bold text-primary mb-1">{project.title}</h3>
              <div className="text-sm text-base-100 max-h-[3.2rem] overflow-auto pr-2 scrollbar-thin whitespace-normal leading-snug">{project.shortDesc}</div>
            </div>

            {/* Tech Badges */}
            <div className="flex gap-2 mb-3 overflow-x-auto overflow-y-hidden flex-nowrap whitespace-nowrap scrollbar-thin py-1 pr-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-outline badge-primary text-xs text-orange-500">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-4">
              <a href={project.live} className="btn btn-xs btn-primary flex items-center" target="_blank" rel="noreferrer">
                Live <FaExternalLinkAlt className="ml-1" />
              </a>
              <a href={project.clientRepo} className="btn btn-xs btn-outline flex items-center text-base-100" target="_blank" rel="noreferrer">
                Client <FaGithub className="ml-1" />
              </a>
              <button onClick={() => setShowDetails(showDetails === idx ? null : idx)} className="btn btn-xs btn-primary">
                {showDetails === idx ? "Hide Details" : "View Details"}
              </button>
            </div>

            {/* Expandable Section */}
            {showDetails === idx && (
              <div className="mt-3 border-t border-base-300 pt-3 text-sm text-base-100 overflow-y-auto max-h-[240px] pr-2 space-y-3">
                <div>
                  <h4 className="font-semibold text-primary mb-1">Full Description:</h4>
                  <p>{project.fullDesc}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-1">Main Features:</h4>
                  <ul className="list-disc ml-5">
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-1">Challenges:</h4>
                  <p>{project.challenges}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-primary mb-1">Future Plans:</h4>
                  <p>{project.futurePlans}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
