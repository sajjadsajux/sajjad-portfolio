import React, { useEffect } from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section className="bg-[linear-gradient(to_right,_#000428,_#004e92)] py-12 lg:px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          <TypeAnimation sequence={["Need a Developer?", 1500, "Discuss Opportunities", 1500, "Start a Collaboration", 1500, "Your Project, My Code", 1500, "Let's Talk", 1500]} wrapper="span" speed={50} repeat={Infinity} />
        </h2>
        <p className="text-base md:text-lg text-base-100 mt-4 max-w-2xl mx-auto">Have a question or want to work together? Reach out via the form or my contact details below.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-stretch max-w-7xl mx-auto px-4 py-5  rounded-2xl">
        {/* Contact Info */}
        <div data-aos="fade-up" className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full max-w-2xl text-base-100 space-y-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-5 text-primary">Contact Info</h3>
            <ul className="space-y-4 text-lg">
              <li className="flex items-center gap-4">
                <FaPhone size={26} className="text-primary" />
                <a href="tel:+8801820646469" className="hover:text-primary-focus text-sm md:text-lg">
                  +880 1820 646469
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaWhatsapp size={26} className="text-primary" />
                <a href="https://wa.me/8801820646469" target="_blank" rel="noreferrer" className="hover:text-primary-focus text-sm md:text-lg">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaEnvelope size={26} className="text-primary" />
                <a href="mailto:sajjadhossainsajux@gmail.com" className="hover:text-primary-focus text-sm md:text-lg">
                  sajjadhossainsajux@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt size={26} className="text-primary " />
                <span className="text-sm md:text-lg">Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>

          <hr className="border-white/20" />

          {/* Social Icons */}
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-primary">Connect with Me</h3>
            <div className="flex gap-6 text-3xl">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary transition">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary transition">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary transition">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div data-aos="fade-up" className="w-full md:w-1/2">
          <div className="bg-white/10 p-6 rounded-lg shadow-md">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
