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
    <div className="space-y-10 md:max-w-6xl mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10 text-center">Projects</h2>

      {project.map((project, idx) => (
        <div key={idx} className="bg-gradient-to-r from-[#000046] via-[#093744] to-[#000046] rounded-xl shadow-md p-6 flex flex-col lg:flex-row gap-6 hover:shadow-xl transition " data-aos="zoom-in-down" data-aos-duration="5000" data-aos-mirror="true" data-aos-once="false">
          {/* Left: Image Section */}
          <div className="lg:w-1/2 w-full">
            {showDetails === idx ? (
              <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-3 ">
                {project.images.map((img, i) => (
                  <div key={i} className="w-full h-96 overflow-hidden rounded-lg">
                    <img src={img} alt={`Project image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                  </div>
                ))}
              </div>
            ) : (
              <Slider {...settings} className="">
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt={`Project screenshot ${i + 1}`} className="rounded-lg object-cover w-full h-80" />
                ))}
              </Slider>
            )}
          </div>

          {/* Right: Info Section */}
          <div className="lg:w-1/2 w-full space-y-6">
            <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
            <p className="text-base-100 text-xl">{project.shortDesc}</p>

            <div className="flex gap-2 mt-2 overflow-x-auto whitespace-nowrap mr-2">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-outline badge-primary text-xs text-orange-500">
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons Section */}
            <div className="mt-4 space-y-3">
              {/* Live Site Button - Centered */}
              <div className="flex justify-center">
                <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary text-black text-base">
                  Live Site <FaExternalLinkAlt size={20} className="ml-1" />
                </a>
              </div>

              {/* GitHub Repos - Side by side */}
              <div className="flex justify-center gap-4">
                <a href={project.clientRepo} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline text-base text-base-100">
                  Client Repo <FaGithub size={20} className="ml-1" />
                </a>
              </div>

              {/* View Details Button - Centered */}
              <div className="flex justify-center">
                <button onClick={() => setShowDetails(showDetails === idx ? null : idx)} className="btn btn-sm btn-primary text-black text-base">
                  {showDetails === idx ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>

            {/* Expandable Detailed Info */}
            {showDetails === idx && (
              <div className="mt-6 border-t border-base-300 pt-4 space-y-4">
                <div>
                  <h4 className="font-semibold text-lg text-primary">Full Description:</h4>
                  <p className="text-base-100">{project.fullDesc}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary">Main Features:</h4>
                  <ul className="list-disc list-inside text-base-100">
                    {project.features.map((f, i) => (
                      <li key={i}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary">Challenges:</h4>
                  <p className="text-base-100">{project.challenges}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg text-primary">Future Plans:</h4>
                  <p className="text-base-100">{project.futurePlans}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
