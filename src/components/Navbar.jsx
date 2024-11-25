import React, { useState, useEffect, useRef } from 'react';
import '../App.css';  // Assurez-vous que le CSS est importé

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // État pour gérer l'ouverture du menu
    const menuRef = useRef(null);  // Référence pour la navbar
    const toggleButtonRef = useRef(null);  // Référence pour le bouton hamburger

    // Ferme le menu si l'utilisateur clique à l'extérieur de la navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !toggleButtonRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Ferme le menu si on clique à l'extérieur
            }
        };

        // Ajoute l'écouteur d'événements au document
        document.addEventListener('mousedown', handleClickOutside);

        // Nettoyage de l'écouteur d'événements lorsque le composant est démonté
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  // Change l'état de l'ouverture/fermeture du menu
    };

    return (
        <nav className="navbar">
            <div className="navbar_logo">
                <img src="src/assets/images/VLogo2.webp" alt="Logo" />
            </div>

            {/* Bouton hamburger pour mobiles */}
            <button ref={toggleButtonRef} className="menu-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            {/* Liste des éléments du menu */}
            <ul ref={menuRef} className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                <li><a href="#presentation">Présentation</a></li>
                <li><a href="#realisation">Réalisation</a></li>
                <li><a href="#activites">Activités</a></li>
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#cv">Mon CV</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;