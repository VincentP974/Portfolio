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
                    <img src={htmlLogo} alt='icone html' width="50" height="50" />
                    <img src={cssLogo} alt='icone css' width="50" height="50" />
                    <img src={jsLogo} alt='icone javascript' width="50" height="50" />
                    <img className="react-logo" src={reactLogo} alt='icone react' width="50" height="50" />
                    <img src={saasLogo} alt='icone saas' width="50" height="50" />
                </div>

            </div>
            <div className='back-end'>
                <h2>Back-end</h2>
                <div className="back-img">
                    <img src={nodejsLogo} alt='icone nodejs' width="50" height="50" />
                    <img src={mongodbLogo} alt='icone mongodb' width="50" height="50" />
                </div>

            </div>
        </section>
    )
}

export default Compétences