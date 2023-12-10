import React from "react";
import '../assets/css/App.css'
import dungeonFire from '../assets/images/dungeonfire.png'

const GameProjects = () => {
    return(
        <div id="game-projects" class="projects">
            <h3>Game Projects</h3>

            <div className="project">
                <span class="project-info">
                <div class="project-heading">
                    {/* title */}
                    <a href="https://github.com/AnEdgyVeggie/ArenaShooter"><h4>Dungeonfire<br/>Unity Bullethell</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/ArenaShooter">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>Gameplay Features</u></b></span><br/><br/>
                        <li>Fast-paced bullet hell fused with a dungeon crawling atmostphere</li>
                        <li>Low-poly assets hand-crafted in blender</li>
                        <li>No external packaged. All physics hand programmed using the Unity 3D engine</li>
                        <li>Different obstacles, traps and bosses as you progress deeper in the dungeon</li>
                    </ul>
                <ul class="tech">
                    <span><b>Technologies</b></span><br/><br/>
                        <li>Unity3D</li>
                        <li>Blender</li>
                        <li>C# / .Net</li>
                        <li>Github</li>
                    </ul>
                    </span>
                {/* picture / link */}
                <a href="https://github.com/AnEdgyVeggie/ArenaShooter"><img  src={dungeonFire} alt="Dungeon Fire" /></a>
            </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="project">
                <span class="project-info">
                <div class="project-heading">
                    {/* title */}
                    <a href="https://www.youtube.com/watch?v=n5v5OkD_3TE"><h4>BoxShooter<br/>Unity Top-Down Shooter</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/BoxShooter">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>Gameplay Features</u></b></span><br/><br/>
                        <li>Round bases top-Down horde / suvival shooter </li>
                        <li>Variety of enemy, upgrade and weapons randomly generated every round</li>
                        <li>UI built to be responsive and efficient</li>
                        <li>Resource management including ammunition for more strategic gameplay</li>
                    </ul>                
                    <ul class="tech">
                    <span><b>Technologies</b></span><br/><br/>
                        <li>Unity3D</li>
                        <li>Unity Assets Store</li>
                        <li>C# / .Net</li>
                        <li>Github</li>
                    </ul>
                    </span>
                {/* picture / link */}
                <iframe src="https://www.youtube.com/embed/n5v5OkD_3TE?si=XGgm8YeOpmAsEqMS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

{/* /////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            <div className="project">
                <span class="project-info">
                <div class="project-heading">
                    {/* title */}
                    <a href="https://www.youtube.com/watch?v=GyfM_i6fDqA"><h4>Bounceventure<br/>Unity Side-Scrolling Platformer</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/BounceAdventure">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>Gameplay Features</u></b></span><br/><br/>
                        <li>2.5D physics based platformer which relies on timing and strategy</li>
                        <li>Collectables, environmental modifiers and teleporters make exploration essential</li>
                        <li>Full tutorial with deep narrative</li>
                        <li>Different outcomes for levels dependent on level perfomance and collectables obtained</li>
                    </ul>                <ul class="tech">
                    <span><b>Technologies</b></span><br/><br/>
                        <li>Unity3D</li>
                        <li>FLStudios</li>
                        <li>C# / .Net</li>
                        <li>Github</li>
                    </ul>
                    </span>
                {/* picture / link */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GyfM_i6fDqA?si=i2CC-ui-gdDR5oaS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>


        </div>
    );
}

export default GameProjects;