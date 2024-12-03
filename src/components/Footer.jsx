import React from 'react';
import './Footer.css'; // Assure-toi de lier ton fichier CSS

function Footer() {
  const handleEmailClick = () => {
    window.location.href = 'mailto:ton.email@example.com'; // Remplace par ton email
  };

  return (
    <section id="contact" className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src="src/assets/images/VLogo2.webp" alt="Logo" />
        </div>

        {/* Section de Contact */}
        <div className="contact-section">
          <button className="email-button" onClick={handleEmailClick}>
            Contacter par Email
          </button>

          <div className="social-links">
            <a href="https://github.com/tonutilisateur" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="src/assets/images/github-mark.webp" alt="GitHub" />
            </a>
            <a href="https://www.linkedin.com/in/tonutilisateur" target="_blank" rel="noopener noreferrer" className="social-icon">
              <img src="src/assets/images/LI-In-Bug.webp" alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;