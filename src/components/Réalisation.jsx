import React, { useState, useEffect } from 'react';
import './Réalisation.css';

function Réalisation() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        // Charger le fichier JSON depuis le dossier public
        fetch('/Portfolio/Projets.json')
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
        <section id='realisation' className='réalisation-grid' aria-label="Mes travaux">
            <h1>Mes Travaux</h1>
            <div className="projets-container">
                {projects.map((project, index) => (
                    <article
                        key={index}
                        className="projet"
                        onClick={() => openModal(project)}
                        aria-label={`Projet : ${project.title}`}
                    >
                        <img
                            src={project.image}
                            alt={`Aperçu du projet ${project.title}`}
                            width={project.width}
                            height={project.height}
                        />
                        <div className='subtitle'>
                            <h2>{project.title}</h2>
                        </div>
                    </article>
                ))}
            </div>

            {selectedProject && (
                <div className="modal" role="dialog" aria-labelledby="modal-title">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal} aria-label="Fermer la modal">&times;</span>
                        <h2 id="modal-title">{selectedProject.title}</h2>
                        <img
                            src={selectedProject.image}
                            alt={`Détails du projet ${selectedProject.title}`}
                            width={selectedProject.width}
                            height={selectedProject.height}
                        />
                        <p>{selectedProject.description}</p>
                        <p><strong>Date:</strong> {selectedProject.date}</p>
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            title={`Voir le projet ${selectedProject.title}`}
                        >
                            Voir le projet
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Réalisation;