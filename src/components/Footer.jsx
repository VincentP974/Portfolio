import React from 'react';
import './Footer.css'; // Assure-toi de lier ton fichier CSS
import githubLogo from '/images/logo/github.svg';
import linkedinLogo from '/images/logo/linkedin.svg';

function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:vincentp9@outlook.fr'; // Remplace par ton email
  };

  return (
    <section id="contact" className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/Portfolio/images/VLogo2.webp" alt="Logo"
            width="100"
            height="50" />
        </div>

        {/* Section de Contact */}
        <div className="contact-section">
          <button className="email-button" onClick={handleEmailClick}>
            Contacter par Email
          </button>

          <div className="social-links">
            <a href="https://github.com/VincentP974" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={githubLogo} alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/vincent-payet-66882b340/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;