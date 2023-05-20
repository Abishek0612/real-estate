import React from "react";
import "./contact.scss";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();
  const notify = () => toast("We will contact you shortly!");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_26ddlef",
      "template_8sr36jh",
      form.current,
      "3TMIj2BmlQ_qzjn91"
    );

    notify();
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h4>abishek6@gmail.com</h4>
            <a
              href="mailto:uabishek6@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineWhatsApp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h4>+91 7550259062</h4>
            <a
              href="https://api.whatsapp.com/send?phone=+917200084715"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className="contact__option-icon" />
            <h4>Instagram</h4>
            <h4>Homes4Families.com</h4>
            <a
              href="https://www.instagram.com/mernstackdeveloperabi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email " required />
          <input
            type="number"
            name="number"
            placeholder="Your Phone Number "
            className=" spin-button-none"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" id="send" className="btn btn-primary">
            Send Message
          </button>
        </form>
        <ToastContainer position="top-center" autoClose={3000} theme="light" />
      </div>
    </section>
  );
};

export default ContactForm;
