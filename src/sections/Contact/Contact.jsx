import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container mx-auto px-4 bg-base-100">
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">Contact Me</h2>

      <div className="flex flex-col md:flex-row gap-12">
        {/* Left: Contact Info */}
        <div className="md:w-1/2 space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-base-content text-lg">
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <span>+880 1234 567890</span>
              </li>
              <li className="flex items-center gap-3">
                <FaWhatsapp className="text-primary" />
                <span>+880 1987 654321</span>
              </li>
              <li className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <span>your.email@example.com</span>
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
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input type="text" id="name" name="name" placeholder="Your Name" required className="input input-bordered w-full" />
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input type="email" id="email" name="email" placeholder="you@example.com" required className="input input-bordered w-full" />
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 font-medium">
                Message
              </label>
              <textarea id="message" name="message" placeholder="Your message..." required rows={5} className="textarea textarea-bordered w-full resize-none" />
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
