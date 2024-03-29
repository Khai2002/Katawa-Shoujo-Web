import React from 'react';
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faReddit, faYoutube } from '@fortawesome/free-brands-svg-icons'


function Contact() {
    return <div className="contact-div">
        <br/>
        <p>If you have any inquiries, contact me at (most active on Reddit)</p>
        
        <div className='flex-box-button'>
            <a href='https://www.reddit.com/user/hakhoi123'><button className='button-choice-low'><FontAwesomeIcon icon={faReddit} />  Reddit</button></a>
            <a href='https://discord.gg/fd7NBVRWhq'><button className='button-choice-low'><FontAwesomeIcon icon={faDiscord} />  Discord</button></a>
            <a href='https://www.youtube.com/@kyledaboss543/streams'><button className='button-choice-low'><FontAwesomeIcon icon={faYoutube} />  Youtube</button></a>
        </div>
        <br/>
        <p>Or send an email to: kyledabossks@gmail.com</p>
    </div>;
}

export default Contact;