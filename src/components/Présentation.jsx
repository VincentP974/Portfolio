import React, { } from 'react';
import './Présentation.css'

function Présentation() {

    return (
        <section id="presentation" className="description">
            <div className='img-v'>
                <h1>Qui suis-je?</h1>
                <img src="/Portfolio/images/photoV.webp" alt="Portrait de Payet Vincent" />
            </div>

            <div className="description-contenu">
                <p>
                    Je suis un développeur web full-stack passionné et curieux, j'ai obtenu mon diplôme en suivant la formation de openclassrooms ce qui m'a permis d'apprendre de maniére autodidacte.
                </p>
                <p>
                    Je suis également un geek dans l’âme. J’aime me plonger dans des univers variés à travers des jeux vidéos, films et séries, ou me tenir informé des dernières tendances sur YouTube et d'autres plateformes. Cette passion pour le multimédia m’a appris l’importance de l’interface et de l’expérience utilisateur.
                </p>
                <p>
                    J'ai également travailler dans des secteurs comme la vente et la restauration, où j’ai développé mes capacités à communiquer, à comprendre les besoins des autres, à offrir un service de qualité, et à travailler en équipe.
                </p>
            </div>


        </section>
    )
}

export default Présentation