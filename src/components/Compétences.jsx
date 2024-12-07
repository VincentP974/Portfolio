import React from 'react'
import './Compétences.css';
import cssLogo from '/Portfolio/images/logo/css3.svg';
import htmlLogo from '/Portfolio/images/logo/html5.svg';
import jsLogo from '/Portfolio/images/logo/js.svg';
import reactLogo from '/Portfolio/images/logo/react.svg';
import saasLogo from '/Portfolio/images/logo/sass.svg';
import nodejsLogo from '/Portfolio/images/logo/nodejs.svg';
import mongodbLogo from '/Portfolio/images/logo/mongodb.svg';


function Compétences() {
    return (
        <section id='competences' className="technologies">
            <div className='front-end'>
                <h2>Front-end</h2>
                <div className="front-img">
                    <img src={htmlLogo} alt='icone html' />
                    <img src={cssLogo} alt='icone css' />
                    <img src={jsLogo} alt='icone javascript' />
                    <img className="react-logo" src={reactLogo} alt='icone react' />
                    <img src={saasLogo} alt='icone saas' />
                </div>

            </div>
            <div className='back-end'>
                <h2>Back-end</h2>
                <div className="back-img">
                    <img src={nodejsLogo} alt='icone nodejs' />
                    <img src={mongodbLogo} alt='icone mongodb' />
                </div>

            </div>
        </section>
    )
}

export default Compétences