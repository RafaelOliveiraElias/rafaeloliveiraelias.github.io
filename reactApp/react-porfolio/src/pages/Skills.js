import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaGitAlt, FaGithub, FaDocker } from "react-icons/fa";

import { AiOutlineConsoleSql } from "react-icons/ai";

import { SiRedux, SiTypescript, SiNodedotjs, SiMongodb } from "react-icons/si";
import { DiResponsive, DiPython } from "react-icons/di";
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useContext } from 'react';
import './AboutMe.css'
import useAboutMe from '../hooks/useAboutMe';
import humaans from '../imgs/humaaans.svg'
import AppContext from '../context/AppContext';

import './Skills.css'



export default function Skills () {
  const { ref: myRef, inView: elementVisible } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -400px 0px"
  });
  const [turnedCount, setCount] = useState(0);
  const { language } = useContext(AppContext);

  useEffect(() => {
    if (elementVisible && turnedCount < 1) {
      setCount((previous) => previous +1)
    }
  },[elementVisible, turnedCount])
  
  return (
    <section ref={myRef} className={ turnedCount === 1 ? 'skillsSection turned' : 'skillsSection' }>
      <div className={ turnedCount === 1 ? "learnedSkillsTitle turned" : "learnedSkillsTitle"}>
        <h2>{language === 'pt' ? 'Habilidades e ferramentas:' : 'Skills and Tools learned:'}</h2>
        <div className="learnedSkills">
          <div>
            <h3>
              HTML5
            </h3>
            <FaHtml5 size="40px"/>
          </div>
          <div>
            <h3>
              CSS3
            </h3>
            <FaCss3Alt size="40px" />
          </div>
          <div>
            <h3>
              JavaScript
            </h3>
            <FaJsSquare size="40px"/>
          </div>
          <div>
            <h3>
              React
            </h3>
            <FaReact size="40px" />
          </div>
          <div>
            <h3>
              Redux
            </h3>
            <SiRedux  size="40px"/>
          </div>
          <div>
            <h3>
              Git
            </h3>
            <FaGitAlt size="40px" />
          </div>
          <div>
            <h3>
              Github
            </h3>
            <FaGithub size="40px" />
          </div>
        </div>
      </div>
      <div className={ turnedCount === 1 ? "learnedSkillsTitle turned" : "learnedSkillsTitle"}>
        <h2>{language === 'pt' ? 'Habilidades e ferramentas futuras:' : 'Skills and Tools I will learn:'}</h2>
        <div className="learnedSkills">
          <div>
            <h3>
              Docker
            </h3>
            <FaDocker size="40px"/>
          </div>
          <div>
            <h3>
              Typescript
            </h3>
            <SiTypescript size="40px"/>
          </div>
          <div>
            <h3>
              SQL
            </h3>
            <AiOutlineConsoleSql size="40px"/>
          </div>
          <div>
            <h3>
              NodeJs
            </h3>
            <SiNodedotjs size="40px"/>
          </div>
          <div>
            <h3>
              MongoDB
            </h3>
            <SiMongodb size="40px"/>
          </div>
          <div>
            <h3>
              Python
            </h3>
            <DiPython size="40px"/>
          </div>
        </div>
      </div>
    </section>
  )
}