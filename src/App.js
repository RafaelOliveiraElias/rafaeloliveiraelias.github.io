import React from 'react';
import './App.css';
import Hero from './pages/Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';


class App extends React.Component {
  render() {
    return (
      <div>
        <Hero />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;