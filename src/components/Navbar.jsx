import React, { useState, useEffect, useRef } from 'react';
import './Navbar.css';  // Assurez-vous que le CSS est importé

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);  // État pour gérer l'ouverture du menu
    const menuRef = useRef(null);  // Référence pour la navbar
    const toggleButtonRef = useRef(null);  // Référence pour le bouton hamburger
    const navbarRef = useRef(null); // Référence pour la barre de navigation

    // Ferme le menu si l'utilisateur clique à l'extérieur de la navbar
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && !toggleButtonRef.current.contains(event.target)) {
                setIsMenuOpen(false); // Ferme le menu si on clique à l'extérieur
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Ferme le menu sur les écrans supérieurs à 768px
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                setIsMenuOpen(false); // Ferme le menu
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMenuOpen]);

    // Ajouter un écouteur de défilement pour ajouter la classe sticky à la navbar
    useEffect(() => {
        const handleScroll = () => {
            if (navbarRef.current) {
                if (window.scrollY > 50) { // Dès que la page est défilée de 50px, ajoute la classe sticky
                    navbarRef.current.classList.add('sticky');
                    console.log('Sticky added'); // Vérification dans la console
                } else {
                    navbarRef.current.classList.remove('sticky');
                    console.log('Sticky removed'); // Vérification dans la console
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Nettoyage de l'écouteur d'événements au démontage
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);  // Change l'état de l'ouverture/fermeture du menu
    };

    return (
        <nav ref={navbarRef} className="navbar">
            <div className="navbar_logo">
                <img src="/Portfolio/images/VLogo2.webp" alt="Logo" />
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
                <li><a href="#competences">Compétences</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#cv">Mon CV</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;