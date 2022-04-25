import React, { useContext, useState } from 'react';
import './Hero.css'
import photo from '../imgs/photo.png'
import { BsGithub, BsAt, BsLinkedin } from "react-icons/bs";
import AppContext from '../context/AppContext';

const Hero = () => {
  
  const [toggled, setToggled] = useState(false);
  const { language, setLanguage } = useContext(AppContext);

  const handleBurger = () => {
    setToggled(!toggled)
  }

    return (
      <div className="firstThing" >
        <a id='home' />
        <header className="headerTop">
          <nav className={toggled ? 'navbar active' : 'navbar'}>
            <a href="#home" className="logo">RE</a>

            <div className="divButtons">
              <button
                onClick={ () => setLanguage('en') }
              >
                EN 🇺🇸
              </button>
              <button
                onClick={ () => setLanguage('pt') }
              >
                PT 🇧🇷
              </button>
            </div>
            <div className={ toggled ? 'menu active' : 'menu'}>
              <ul className={ toggled ? 'list active' : 'list'}>
                <li><a href="#home">Home</a></li>
                <li><a href="#idAbout">{ language === 'pt' ? 'Sobre' : 'About' }</a></li>
                <li><a href="#">{ language === 'pt' ? 'Contato' : 'Contact' }</a></li>
              </ul>
            </div>
            <button
              onClick={ handleBurger }
              type="button"
              className={ toggled ? 'hamburger active' : 'hamburger' }
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          </nav>
        </header>
        <div className="headerBotton" >
          <div className="leftHeader">
            <h3>{language === 'pt' ? 'Oi, eu sou' : 'Hi, I am'}</h3>
            <div>
              <h1 className='animate-charcter'>Rafael Elias</h1>
              <h4>{language === 'pt' ? 'Desenvolvedor Web Front-end' : 'Front-end Web developer'}</h4>
            </div>
            <nav className='secNav'>
              <ul>
                <li><BsAt size="40px"/></li>
                <li><BsGithub size="30px"/></li>
                <li><BsLinkedin size="30px" /></li>
              </ul>
            </nav>
          </div>
          <div className='imgHeaderCont'>
            <img src={photo} alt="rafael"/>
          </div>
        </div>
      </div>
    )
}


export default Hero;