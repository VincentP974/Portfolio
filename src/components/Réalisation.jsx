import React, { useState, useEffect } from 'react';
import './Réalisation.css';

function Réalisation() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Charger le fichier JSON depuis le dossier public
        fetch('/Portfolio/Projets.json')// Chemin relatif à la racine
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => setProjects(data.projects))
            .catch((error) =>
                console.error('Erreur lors du chargement du fichier JSON:', error)
            );
    }, []);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id='realisation' className='réalisation-grid'>
            <h1>Mes Travaux</h1>
            <div className="projets-container">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="projet"
                        onClick={() => openModal(project)}
                    >
                        <img src={project.image} alt={project.title} />
                        <div className='subtitle'><h2>{project.title}</h2></div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{selectedProject.title}</h2>
                        <img src={selectedProject.image} alt={selectedProject.title} />
                        <p>{selectedProject.description}</p>
                        <p><strong>Date:</strong> {selectedProject.date}</p>
                        <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                            Voir le projet
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Réalisation;