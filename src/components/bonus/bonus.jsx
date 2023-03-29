import React from 'react';
import './bonus.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';

function Bonus() {
    return <div className="bonus-div">
        <br/>
        <div className='flex-box-button-2'>
            <div>
                <p>Saki's Pseudo Route by Eurobeatjester</p>
                <a href="https://ks.renai.us/viewtopic.php?f=52&t=9187"><button className='button-choice-low'><FontAwesomeIcon icon={faScrewdriverWrench} />  Learning to Fly</button></a>
            </div>
            <div>
                <p>Emi's Epilogue by Mountaineer</p>
                <a href="https://docs.google.com/document/d/1B9HKGprGPDz8rKdzqBIuRcsA6aWPTZZm_LXQ8OUKoTI/edit"><button className='button-choice-low'><FontAwesomeIcon icon={faScrewdriverWrench} />  Ascent</button></a>
            </div>
            <div>
                <p>Saki's Sprites</p>
                <a href='https://drive.google.com/uc?id=1vxX9jjCihZXv7L4jb_iBZwi-QuXUQrR1&export=download'><button className='button-choice-low'><FontAwesomeIcon icon={faDownload} />  Asset</button></a>
            </div>
            <div>
                <p>Katawa Shoujo: Re-Engineered</p>
                <a href="https://fhs.sh/projects"><button className='button-choice-low'><FontAwesomeIcon icon={faScrewdriverWrench} />  KS:RE</button></a>
            </div>
        </div>
        <br/><br/>
        
    </div>;
}

export default Bonus;