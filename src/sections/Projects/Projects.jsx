import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../Projects/projects.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="bg-[linear-gradient(to_right,_#000428,_#004e92)] py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">Projects</h2>

      {/* Flex layout for proper centering of last row */}
      <div className="flex flex-wrap justify-center lg:justify-start gap-6 max-w-7xl mx-auto ">
        {projects.map((project, idx) => (
          <motion.div key={idx} className="w-full md:w-[48%] lg:w-[32%] max-w-[400px] bg-white/10 rounded-xl shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition hover:scale-[1.02]" data-aos="zoom-in-up">
            {/* Slider */}
            <div className="w-full mb-4">
              <Slider {...settings}>
                {project.images.map((img, i) => (
                  <img key={i} src={img} alt={`Screenshot ${i + 1}`} className="w-full h-64 object-cover rounded-lg" />
                ))}
              </Slider>
            </div>

            {/* Title & Short Description */}
            <h3 className="text-lg font-bold text-primary mb-1">{project.title}</h3>
            <p className="text-sm text-base-100 mb-3 line-clamp-3">{project.shortDesc}</p>

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 mb-3 overflow-x-auto scrollbar-thin">
              {project.technologies.map((tech, i) => (
                <span key={i} className="badge badge-outline badge-primary text-xs text-orange-500">
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mt-auto">
              <a href={project.live} target="_blank" rel="noreferrer" className="btn btn-xs btn-primary flex items-center text-black">
                Live <FaExternalLinkAlt className="ml-1" />
              </a>
              <a href={project.clientRepo} target="_blank" rel="noreferrer" className="btn btn-xs btn-outline text-base-100 flex items-center">
                Client <FaGithub className="ml-1" />
              </a>
              <button onClick={() => setSelectedProject(project)} className="btn btn-xs btn-info ">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div className="fixed inset-0 z-50 bg-black/70 flex lg:justify-center  items-start lg:items-center px-2 sm:px-4 py-4 overflow-y-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="glass text-gray-200 rounded-lg shadow-xl w-full max-w-[95vw] sm:max-w-3xl max-h-[calc(100vh-2rem)] overflow-y-auto p-4 sm:p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button onClick={() => setSelectedProject(null)} className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg sm:text-xl">
                <FaTimes />
              </button>

              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3">{selectedProject.title}</h3>
              <p className="mb-4 text-sm sm:text-base">{selectedProject.fullDesc}</p>

              {/* Gallery */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                {selectedProject.images.map((img, i) => (
                  <img key={i} src={img} alt={`Detailed View ${i + 1}`} className="rounded-lg shadow w-full h-auto object-cover" />
                ))}
              </div>

              {/* Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-primary mb-1 text-base sm:text-lg">Main Features:</h4>
                <ul className="list-disc list-inside pl-2 text-sm space-y-1">
                  {selectedProject.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </div>

              {/* Challenges */}
              <div className="mb-4">
                <h4 className="font-semibold text-primary mb-1 text-base sm:text-lg">Challenges:</h4>
                <p className="text-sm">{selectedProject.challenges}</p>
              </div>

              {/* Future Plans */}
              <div>
                <h4 className="font-semibold text-primary mb-1 text-base sm:text-lg">Future Plans:</h4>
                <p className="text-sm">{selectedProject.futurePlans}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
