import React from 'react';
import './bonus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

function Bonus() {
    return <div className="bonus-div">
        <br/>
        <p>Contains all Saki's sprites, to be updated in future versions.</p>
        <div className='flex-box-button-2'>
            <a href='https://drive.google.com/uc?id=1vxX9jjCihZXv7L4jb_iBZwi-QuXUQrR1&export=download'><button className='button-choice-low'><FontAwesomeIcon icon={faDownload} />  Asset</button></a>
        </div>
        <br/><br/>
        
    </div>;
}

export default Bonus;