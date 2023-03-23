import React from 'react';
import './listButton.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPatreon } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function ListButton() {
    return (
        <div className='div-list'>
            <img id='logo' src={require('./dcd.png')} alt="logo"/>
            <h3>Katawa Shoujo : Stories Beyond</h3>
            <div className='div-button'>
                <a href="#scrollAbout"><button className='button-choice'><FontAwesomeIcon icon={faHeart} />   About</button></a>
                <a href="#scrollDownload"><button className='button-choice'><FontAwesomeIcon icon={faDownload} />  Download</button></a>
                <a href='https://www.patreon.com/KyleDaBoss'><button className='button-choice'><FontAwesomeIcon icon={faPatreon} />  Patreon</button></a>
            </div>
        </div>
    );
}

export default ListButton;