import React from 'react';
import './about.css'

function About() {
    return <div className="about-div">
        <br/>
       <p>Hi! My name is Kyle.</p>

       <p>Me and my friends want to create mod for Katawa Shoujo that offers more content to the base game (i.e. epilogues and pseudo-routes) via fanfictions. The game will be updated regularly as we work our way through stories on KS Forum. </p>

       <p>About our project, we try our best to stay fateful to the game we all fell in love with, all the while adding more stories, characters sprites and artworks.</p>
       <br/>
       <p>Our current projects are: </p>
        <ul>
            <li><a className='text-link' href="https://ks.renai.us/viewtopic.php?f=52&t=9187">Learning to Fly: Saki's Pseudo Route</a> (Act 1 available-ongoing)</li>
            <li><a className='text-link' href="https://docs.google.com/document/d/1B9HKGprGPDz8rKdzqBIuRcsA6aWPTZZm_LXQ8OUKoTI/edit">Ascent: An Emi's Epilogue</a> (releasing in next update)</li>
        </ul>
        <p>Our future project beyond these two will hopefully be Sisterhood.</p>
        <br/>
        <p>We are passionate, hopeful and ambitious with our endeavor. And we hope that you share our enthusiasm!</p>

        <h4>&#60;&#60; Art by Scott Bennett &#62;&#62;</h4>
    </div>;
}

export default About;