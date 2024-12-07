import React from 'react';
import './Footer.css'; // Assure-toi de lier ton fichier CSS
import githubLogo from '/Portfolio/images/logo/github.svg';
import linkedinLogo from '/Portfolio/images/logo/linkedin.svg';

function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ton.email@example.com'; // Remplace par ton email
  };

  return (
    <section id="contact" className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="/Portfolio/images/VLogo2.webp" alt="Logo" />
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
            <a href="https://www.linkedin.com/in/tonutilisateur" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src={linkedinLogo} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;