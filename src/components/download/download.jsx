import React from 'react';
import './download.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Download() {
    return <div className="download-div">
        <br/>
        <div>
            <p>For PC: Windows and Linux <br/> Version 1.0</p>
            <a href="#scrollDownload"><button className='button-choice-low-2'><FontAwesomeIcon icon={faDownload} />  Download for PC</button></a>
        </div>
        <br/>
        <p>Current Version:</p>
        <ul><li>[ Version 1.0 ] Saki's Learning to Fly - Act 1 by Eurojester </li></ul>
        
        <p>Future Version:</p>
        <ul>
            <li>[ Version 1.1 ] Emi's Epilogue - Ascent by Mountaineer</li>
            <li>[ Version 2.0 ] Saki's Learning to Fly - Act 2 by Eurojester</li>
        </ul>
    </div>;
}

export default Download;
