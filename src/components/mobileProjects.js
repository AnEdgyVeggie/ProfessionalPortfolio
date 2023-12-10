import React from "react";
import bmiCalc from '../assets/images/bmiCalc.png'
import jumpClimb from '../assets/images/jumpClimb.png'
import quizzler from '../assets/images/quizzler.png'

const MobileProjects = () => {

    return(
        <div id="mobile-projects" className="projects">
            <h3  >Mobile Application Projects</h3>

            <div className="project">
                <span class="project-info">
                <div class="project-heading">
                    {/* title */}
                    <a href="https://github.com/AnEdgyVeggie/BMICalculator"><h4>BMICalculator<br/>Flutter/Dart App</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/BMICalculator">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>App Features</u></b></span><br/><br/>
                        <li>Takes gender, weight and height and outputs a health status and BMI</li>
                        <li>Attractive, modern user interface available on Android and iOS</li>
                        <li>Simple to use and quick to get results</li>
                        <li>No user information or accounts required</li>
                    </ul>
                <ul class="tech"> 
                <span><b><u>Technologies</u></b></span><br/><br/>
                        <li>Flutter/Dart</li>
                        <li>Android</li>
                        <li>iOS emulation</li>
                        <li>Github</li>
                    </ul>
                    </span>
                {/* picture / link */}
                <a href="https://github.com/AnEdgyVeggie/BMICalculator"><img  src={bmiCalc} alt="BMI Calculator" /></a>
            </div>

            <div className="project">
                <span class="project-info">
                <div class="project-heading">
                    {/* title */}
                    <a href="https://play.google.com/store/apps/details?id=com.EdgyVeggieGames.JumpClimb"><h4>Jump Climb<br/>Unity Android Game</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/JumpClimb">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>App Features</u></b></span><br/><br/>
                        <li>A physics based platformer that blends simplicity with difficulty</li>
                        <li>Kid friendly, with no crude or suggestive material</li>
                        <li>Compare scores with friends and see who can climb the highest</li>
                        <li>Available on the Google Play Store for download</li>
                    </ul>
                <ul class="tech">
                    <span><b><u>Technologies</u></b></span><br/><br/>
                        <li>Unity</li>
                        <li>Blender</li>
                        <li>Android</li>
                        <li>Github</li>
                    </ul>
                    </span>
                {/* picture / link */}
                <a href="https://play.google.com/store/apps/details?id=com.EdgyVeggieGames.JumpClimb"><img  src={jumpClimb} alt="Jump Climb" /></a>
            </div>

            <div className="project">
                <span class="project-info">
                <div class="project-heading">
                    {/* title */}
                    <a href="https://github.com/AnEdgyVeggie/quizzler"><h4>Jump Climb<br/>Flutter/Dart App</h4></a>
                    {/* github link */}
                    <a href="https://github.com/AnEdgyVeggie/quizzler">Github Repository</a>
                </div>
                {/* description */}
                <ul class="desc">
                <span><b><u>App Features</u></b></span><br/><br/>
                        <li>A simple question and answer application to test your general knowledge</li>
                        <li>Simple user interface and easy-to-follow game loop</li>
                        <li>Easy to follow, shows right and wrong answers to provide learning opportunities</li>
                    </ul>
                <ul class="tech">
                    <span><b><u>Technologies</u></b></span><br/><br/>
                        <li>Unity</li>
                        <li>Blender</li>
                        <li>Android</li>
                        <li>Github</li>
                    </ul>
                    </span>
                {/* picture / link */}
                <a href="https://github.com/AnEdgyVeggie/quizzler"><img  src={quizzler} alt="Quizzler" /></a>
            </div>

        </div>
    );
}

export default MobileProjects;