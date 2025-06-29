import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="md:max-w-6xl mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Contact Me</h2>
      <p className="text-base md:text-lg text-base-100 text-center max-w-2xl mx-auto mb-12">
        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out. You can connect with me through the form or directly via email or social platforms.
      </p>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center px-4 md:px-0 max-w-6xl mx-auto">
        {/* Left: Contact Info */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left ">
          <div className="">
            <h3 className="text-2xl font-semibold mb-4 text-base-100">Contact Information</h3>
            <ul className="space-y-3 text-base-100 text-lg">
              <li className="flex items-center gap-3">
                <FaPhone size={30} className="text-primary" />
                <a href="tel:+8801629202095" className="hover:text-primary-focus">
                  +880 1629 202095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp size={30} className="text-primary" />
                <a href="https://wa.me/8801629202095" target="_blank" rel="noreferrer" className="hover:text-primary-focus">
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope size={30} className="text-primary" />
                <a href="mailto:sajjadhossainsajux@gmail.com" className="hover:text-primary-focus">
                  sajjadhossainsajux@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt size={30} className="text-primary" />
                <span>Sreemangal, Bangladesh</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-base-100">Follow Me</h3>
            <div className="flex gap-6 text-4xl text-primary animate-bounce">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary">
                <FaSquareXTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="w-full md:w-1/2 px-0 md:px-4">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
