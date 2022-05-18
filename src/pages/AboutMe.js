import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useContext } from 'react';
import './AboutMe.css'
import useAboutMe from '../hooks/useAboutMe';
import humaans from '../imgs/humaaans.svg'
import AppContext from '../context/AppContext';


export default function AboutMe () {
  const { ref: myRef, inView: elementVisible } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
  });
  const { ref: myImgRef, inView: imgVisible } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -50px 0px"
  });
  const [turnedCount, setCount] = useState(0);
  const [imgCount, setImgCount] = useState(0);
  const { language } = useContext(AppContext);


  useEffect(() => {
    if (elementVisible && turnedCount < 1) {
      setCount((previous) => previous +1)
    }
    if (imgVisible && imgCount < 1) {
      setImgCount((previous) => previous +1)
    }
  },[elementVisible, turnedCount, imgVisible, imgCount])
  return(
    <section id='idAbout' className='classAbout'>
      <a id='idAbout'/>
      <h1 ref={myRef} className={ turnedCount === 1 ? 'title turned' : 'title' }>{language === 'pt' ? 'Sobre mim' : 'About me'}</h1>
      {useAboutMe(language)}
      <div ref={myImgRef} className={ imgCount === 1 ? 'imgHumansCont turned' : 'imgHumansCont' }>
        <img src={humaans} alt="rafael"/>
      </div>
    </section>
  )
}