import React from 'react';
import './download.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Download() {
    return <div className="download-div">
        <br/>
        <div>
            <p>For PC: Windows, Mac and Linux <br/> Version 1.0</p>
            <a href="https://drive.google.com/uc?id=1ylIAK10nFYmy1qmff-_8XS2FAu_9QZTT&export=download"><button className='button-choice-low-2'><FontAwesomeIcon icon={faDownload} />  Download for PC</button></a>
        </div>
        <br/>
        <p>Current Version:</p>
        <ul><li>[Ver 1.0] Saki's Learning to Fly - Act 1 by Eurobeatjester </li></ul>
        
        <p>Future Version:</p>
        <ul>
            <li>[Ver 1.1] Emi's Epilogue - Ascent by Mountaineer</li>
            <li>[Ver 2.0] Saki's Learning to Fly - Act 2 by Eurobeatjester </li>
        </ul>
    </div>;
}

export default Download;
