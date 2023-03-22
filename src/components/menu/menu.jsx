import React, {useState} from 'react';
import './menu.css'
import Carou from '../carou/carou.jsx'
import ListButton from '../listButton/listButton';
import Download from '../download/download';
import About from '../about/about';
import Start from '../start/start';
import Support from '../support/support';
import Contact from '../contact/contact';



function Menu() {
    const [start, setStart]=useState(true)

    function handleStart() {
        setStart(false);
    };

    return (
    <div className='div-main'>
        <div className='grid-container'>
            <div className='grid-menu'>
                <div className="button-list"><ListButton/></div>
            </div>
            <div class="grid-carou">
                {
                    start?<Start onStart={handleStart}/>:<Carou />
                }
            </div>
        </div>
        <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
            <div className ="grid-container-2">
                <div className="image-div">
                    <img id="saki-image" src={require("./saki_ts.jpeg")} alt="saki"/>
                </div>
                <div>
                    <div className="limit-length"><h4 id="scrollAbout">About</h4></div>
                    <About />
                </div>
    
            </div>

            <div className="grid-container-3">
                <div>
                    <div className="limit-length"><h4 id="scrollDownload">Download</h4></div>
                    <Download />
                </div>
                <div>
                    <div className="limit-length-2"><h4 id="scrollSupport">Support Us</h4></div>
                    <Support />
                </div>
            </div>
            
            
            <div className="limit-length-2"><h4 id="scrollContact">Contact Me</h4></div>
                <Contact />
        </div>
    </div>
    );
}

export default Menu;