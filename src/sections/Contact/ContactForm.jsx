import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, Slide, toast } from "react-toastify";

const ContactForm = () => {
  const form = useRef();
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Thanks for reaching out! Your message is received and I’ll respond as soon as possible.", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Slide,
          });
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full ">
      <form ref={form} onSubmit={sendEmail} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-white">
            Name
          </label>
          <input type="text" name="user_name" id="name" placeholder="Your Name" className="input text-black input-bordered w-full" required />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-white">
            Email
          </label>
          <input type="email" name="user_email" id="email" placeholder="you@example.com" className="input text-black input-bordered w-full" required />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-white">
            Message
          </label>
          <textarea name="message" id="message" rows={5} placeholder="Your message..." className="textarea text-black textarea-bordered w-full resize-none" required />
        </div>

        <input type="submit" value="Send Message" className="btn btn-primary w-full text-black" />
      </form>
    </div>
  );
};

export default ContactForm;
