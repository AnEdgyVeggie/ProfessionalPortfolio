import React from 'react';
import '../assets/css/App.css'
import Unity from '../assets/images/unity.png';
import LinkedIn from '../assets/images/Linkedin.png'
import Reactlogo from '../assets/images/react.png';
import Github from '../assets/images/github.png';
import Twitter from '../assets/images/twitter.png';


const Footer = () => {
	return(
		<div id='foot'>
			<div id="contact">
					<p>Ethan.Sylvester@gmx.com</p>
					<p>(226) - 886 - 1836</p>
					<p>Brigden, Ontario, Canada</p>
			</div>
			<div id="links"> 
				<div className='footerlinks'>
					<a  href='https://reactjs.org/'><img alt='reactlogo' className='fimage' src={Reactlogo} /></a>
					<a className='flink' href='https://reactjs.org/'>React</a>
				</div>

				<div className='footerlinks'>
					<a  href='https://unity.com/'><img alt='unitylogo' className='fimage' src={Unity} /></a>
					<a className='flink' href='https://unity.com/'>Unity</a>
				</div>

				<div className='footerlinks'>
				<a  href='https://github.com/AnEdgyVeggie'><img alt='githublogo' className='fimage' src={Github} /></a>
				<a className='flink' href='https://github.com/AnEdgyVeggie'>Github</a>
				</div>

				<div className='footerlinks'>
				
				<a  href='https://twitter.com/AnEdgyVeggy'><img alt='twitterlogo' className='fimage' src={Twitter} /></a>
				<a className='flink' href='https://twitter.com/AnEdgyVeggy'>Twitter</a>
				</div>

				<div className='footerlinks'>
				<a  href='https://linkedin.com/in/ethan-sylvester-112888217'><img alt='linkedinlogo' className='fimage' src={LinkedIn} /></a>
				<a className='flink' href='https://linkedin.com/in/ethan-sylvester-112888217'>Linked In</a>
				</div>
			</div>
			<div className='footnote'>
				<p>Designed with React, by Ethan Sylvester</p>
			</div>

		</div>
		)
}

export default Footer;