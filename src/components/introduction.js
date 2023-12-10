import React from "react";
import '../assets/css/App.css'
import profile from '../assets/images/Profile.jpg'

const Introduction = () => {
    return (
        <div id="intro">
            <div id="bio">
                <h2>Software engineer.</h2>
                <p> I'm a passionate software engineer with 3 years of experience and a diverse background in mobile development, full-stack web development, and game development. For me, software engineering is a passion and not just a profession. It's a commitment to continuous learning, innovation, and the pursuit of excellence.</p>
            </div>
            <img alt="Ethan Sylvester, Software engineer" src={profile}/>
        </div>
    );
}

export default Introduction;