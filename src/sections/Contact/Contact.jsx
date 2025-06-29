import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div className="container mx-auto px-10 bg-base-100 py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">Contact Me</h2>
      <p className="text-base md:text-lg text-base-content text-center max-w-2xl mx-auto mb-12">
        I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi — feel free to reach out. You can connect with me through the form or directly via email or social platforms.
      </p>

      <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-base-content text-lg">
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <a href="tel:+8801629202095" className="hover:text-primary-focus">
                  +880 1629 202095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary" />
                <a href="https://wa.me/8801629202095" target="_blank" rel="noreferrer" className="hover:text-primary-focus">
                  +880 1629 202095
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>Sreemangal, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a href="mailto:sajjadhossainsajux@gmail.com" className="hover:text-primary-focus">
                  sajjadhossainsajux@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex gap-6 text-3xl text-primary">
              <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary">
                <FaLinkedin />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noreferrer" className="hover:text-secondary">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="md:w-1/2">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};

export default Contact;
