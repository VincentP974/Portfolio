import React from 'react'
import './Compétences.css';

function Compétences() {
    return (
        <section id='competences' className="technologies">
            <div className='front-end'>
                <h2>Front-end</h2>
                <div className="front-img">
                    <img src='src\assets\images\html-5.webp' alt='' />
                    <img src='src\assets\images\css.webp' alt='' />
                    <img src='src\assets\images\js.webp' alt='' />
                    <img src='src\assets\images\React.webp' alt='' />
                    <img src='src\assets\images\sass.webp' alt='' />
                </div>

            </div>
            <div className='back-end'>
                <h2>Back-end</h2>
                <div className="back-img">
                    <img src='src\assets\images\nodejs.webp' alt='' />
                    <img src='src\assets\images\MongoDB.webp' alt='' />
                </div>

            </div>
        </section>
    )
}

export default Compétences