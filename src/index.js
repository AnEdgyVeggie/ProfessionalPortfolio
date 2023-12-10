import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/App.css'
import Header from './components/header.js';
import Navbar from './components/navbar.js';
import Introduction from './components/introduction.js'
import GameProjects from './components/gameProjects.js'
import MobileProjects from './components/mobileProjects.js'
import WebappProjects from './components/webappProjects.js'
import Footer from './components/Footer.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Navbar/>
    <Introduction/>
    <WebappProjects/>
    <GameProjects/>
    <MobileProjects/>
    <Footer/>
  </>
);

