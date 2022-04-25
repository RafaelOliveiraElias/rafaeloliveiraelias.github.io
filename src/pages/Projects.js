
import { useState, useEffect, useContext, useRef } from 'react';
import AppContext from '../context/AppContext';


import 'react-glidejs/dist/index.css';

import './project.css'
import Responsive from './SimpleSlider';

export default function Projects () {
  const { language } = useContext(AppContext);

  
  return(
    <section className='projectsClass'>
      <h2>{language=== 'pt' ? 'Projetos' : 'Projects'}</h2>
      <Responsive />
    </section>
  )
}