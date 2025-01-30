import React from 'react'
import './Compétences.css';
import cssLogo from '/images/logo/css3.svg';
import htmlLogo from '/images/logo/html5.svg';
import jsLogo from '/images/logo/js.svg';
import reactLogo from '/images/logo/react.svg';
import saasLogo from '/images/logo/sass.svg';
import nodejsLogo from '/images/logo/nodejs.svg';
import mongodbLogo from '/images/logo/mongodb.svg';


function Compétences() {
    return (
        <section id='competences' className="technologies">
            <div className='front-end'>
                <h2>Front-end</h2>
                <div className="front-img">
                    <img src="public/images/logo/html-5.webp" alt='icone html' width="55" height="55" />
                    <img src="public/images/logo/css.webp" alt='icone css' width="55" height="55" />
                    <img src="public/images/logo/js.webp" alt='icone javascript' width="55" height="55" />
                    <img className="react-logo" src={reactLogo} alt='icone react' width="55" height="55" />
                    <img src={saasLogo} alt='icone saas' width="55" height="55" />
                </div>

            </div>
            <div className='back-end'>
                <h2>Back-end</h2>
                <div className="back-img">
                    <img src="public/images/logo/nodejs.webp" alt='icone nodejs' width="55" height="55" />
                    <img src="public/images/logo/MongoDB.webp" alt='icone mongodb' width="55" height="55" />
                </div>

            </div>
        </section>
    )
}

export default Compétences