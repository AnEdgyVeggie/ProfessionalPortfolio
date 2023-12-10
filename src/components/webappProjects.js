import React from "react";
import '../assets/css/App.css';
import smartBrain from '../assets/images/smartbrain.png';
import learningPaths from '../assets/images/learningPaths.png';
import discordBot from '../assets/images/discordBot.png';


const WebAppProjects = () => {
    return (
        <div id="webapps" className="projects">
            <h3  >Web Application Projects</h3>

            <div className="project">
                <span class="project-info">
                <div>
                    {/* title */}
                    <a href="https://anedgyveggie.github.io/Smartbrain/"><h4>SmartBrain<br/>Full-stack React App</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/Smartbrain">Github Repository</a>
                </div>
                {/* description */}
                    <ul class="desc">
                    <span><b><u>App Features</u></b></span><br/><br/>
                        <li>Full-stack web application with authentication and user tracking.</li>
                        <li>Uses Clarafai API to detect and locate faces within pictures.</li>
                        <li>Tracks user 'scores' and data in a postgreSQL.</li>
                        <li>Deployed on Github Pages, and fully usable.</li>
                    </ul>
                    <ul class="tech">
                    <span><b><u>Technologies</u></b></span><br/><br/>
                        <li>React.js</li>
                        <li>Express.js</li>
                        <li>postgreSQL</li>
                        <li>Github</li>
                    </ul>
                </span>
                {/* picture / link */}
                <a href="https://anedgyveggie.github.io/Smartbrain/"><img  src={smartBrain} alt="SmartBrain Application" /></a>
            </div>

            <div className="project">
                <span class="project-info">
                <div>
                    {/* title */}
                    <a href="https://anedgyveggie.github.io/Smartbrain/"><h4>Learning Paths<br/>Full-stack PHP App</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/COMP1230Project">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>App Features</u></b></span><br/><br/>
                        <li>Full-stack web application written with PHP, JS, HTML and CSS</li>
                        <li>Stores user data in a MySQL Database</li>
                        <li>Design, share and contribute to a social based learning network</li>
                        <li>Security features like md5 encryption and SQL injection prevention</li>
                    </ul>
                    <ul class="tech">
                    <span><b><u>Technologies</u></b></span><br/><br/>
                        <li>PHP</li>
                        <li>MySQL</li>
                        <li>HTML/CSS/Javascript</li>
                        <li>Github</li>
                    </ul>
                </span>
                {/* picture / link */}
                <a href="https://github.com/AnEdgyVeggie/COMP1230Project"><img  src={learningPaths} alt="Learning Paths" /></a>
            </div>

            <div className="project">
                <span class="project-info">
                <div>
                    {/* title */}
                    <a href="https://github.com/AnEdgyVeggie/T197DiscordBot"><h4>T197<br/>Discord Bot App   </h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/T197DiscordBot">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>App Features</u></b></span><br/><br/>
                        <li>Used by over 170 students in the T197 program at George Brown College</li>
                        <li>Written to answer frequently asked questions in a college discord</li>
                        <li>Tracks class information, due dates, attendance codes and other information</li>
                        <li>Joint project built voluntarily by four students coordinating together.</li>
                    </ul>
                    <ul class="tech">
                    <span><b><u>Technologies</u></b></span><br/><br/>
                        <li>Javascript</li>
                        <li>Node.js</li>
                        <li>Discord</li>
                        <li>Github</li>
                    </ul>
                </span>
                {/* picture / link */}
                <a href="https://github.com/AnEdgyVeggie/T197DiscordBot"><img  src={discordBot} alt="Discord Bot" /></a>
            </div>
        </div>
    );
}

            /* Projects should be as follows:
            NAME
            DESCRIPTION
            IMAGE (WITH LINK)
            GITHUB
             */



export default WebAppProjects;