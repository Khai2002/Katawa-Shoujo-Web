import React from 'react';
import './support.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPatreon } from '@fortawesome/free-brands-svg-icons'

function Support() {
    return <div className="support-div">
        <br/>
        <p>If you are pleased with our mods, please consider becoming a Patreon!</p>
        <img id="saki-support" src={require("./saki-support.png")} alt="saki"/>
        <div>
            <a href='https://www.patreon.com/KyleDaBoss'><button className='button-choice-low'><FontAwesomeIcon icon={faPatreon} />  Patreon</button></a>
        </div>
        <br/>
        <p>We have been trying to keep the project at a minimal cost from commissioned artworks to maintaining website.
        However, it's your help that will enable us to tackle bigger and more ambitious projects. </p>
        <p>We appreciate your support and we hope you enjoy our work!</p>
    </div>;
}

export default Support;