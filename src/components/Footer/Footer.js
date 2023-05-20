import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <a href="#hero" className="footer__logo">
        Homes4Families
      </a>

      <ul className="permalinks">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#property">Properties</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="#testimonial">Testimonial</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="mailto:uabishek6@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineMail />
        </a>

        <a
          href="https://api.whatsapp.com/send?phone=+917200084715"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp />
        </a>
        <a
          href="https://www.instagram.com/mernstackdeveloperabi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Homes4Families. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
