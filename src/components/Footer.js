import "./FooterStyles.css";
import React from "react";

import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="left">
          <div className="location">
            <FaHome size={20} />
            <div>
              <p>20404 Housing Society</p>
              <p>Nairobi, Kenya</p>
            </div>
          </div>

          <div className="phone">
            <a href="tel:+254743027257">
              <FaPhone size={20} />
              <span>+254 743 027 257</span>
            </a>
          </div>

          <div className="email">
            <a href="mailto:edsonbrian2004@gmail.com">
              <FaMailBulk size={20} />
              <span>brayokiplangat2004@gmail.com</span>
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h4>About Me</h4>
          <p>
            I am Edson Brian, a Cyber Security Analyst & Data Analyst.
            I build secure systems and enjoy solving real-world problems.
          </p>

          <div className="social">
    
            <a href="https:// https://github.com/Edsonbrian/Edson-.git" target="_blank" rel="noopener noreferrer" data-tooltip="GitHub">
              <FaGithub size={28} />
            </a>

            <a href="https://www.linkedin.com/in/edson-brian-59476a369

              " target="_blank" rel="noopener noreferrer" data-tooltip="LinkedIn">
              <FaLinkedin size={28} />
            </a>

            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" data-tooltip="Twitter">
              <FaTwitter size={28} />
            </a>

            <a href="https://www.facebook.com/profile.php?id=61586200040412" target="_blank" rel="noopener noreferrer" data-tooltip="Facebook">
              <FaFacebook size={28} />
            </a>

             <a href="https://Whatsapp.com/edsonbrian" target="_blank" rel="noopener noreferrer" data-tooltip="Whatsapp">
              <FaWhatsapp size={28} />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Edson Brian. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;