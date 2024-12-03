import React from 'react'
import './Compétences.css';

function Compétences() {
    return (
        <section id='competences' className="technologies">
            <div className='front-end'>
                <h2>Front-end</h2>
                <div className="front-img">
                    <img src='/Portfolio/images/html-5.webp' alt='' />
                    <img src='/Portfolio/images/css.webp' alt='' />
                    <img src='/Portfolio/images/js.webp' alt='' />
                    <img src='/Portfolio/images/React.webp' alt='' />
                    <img src='/Portfolio/images/sass.webp' alt='' />
                </div>

            </div>
            <div className='back-end'>
                <h2>Back-end</h2>
                <div className="back-img">
                    <img src='/Portfolio/images/nodejs.webp' alt='' />
                    <img src='/Portfolio/images/MongoDB.webp' alt='' />
                </div>

            </div>
        </section>
    )
}

export default Compétences