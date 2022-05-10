import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function useAboutMe(language) {
  const { ref: myRef, inView: elementVisible } = useInView({
    threshold: 1,
    rootMargin: "0px 0px -100px 0px"
  });
  const [turnedCount, setCount] = useState(0);

  useEffect(() => {
    if (elementVisible && turnedCount < 1) {
      setCount((previous) => previous +1)
    }
  },[elementVisible, turnedCount])
  if (language === 'pt') {
    return (
      <div ref={myRef} className={ turnedCount === 1 ? 'aboutClass turned' : 'aboutClass' }>
        <p>
          Com a ajuda da <a href="https://betrybe.com" target="_blank" rel="noreferrer">Trybe</a>, me tornei um desenvolvedor front-end e estou a caminho de me tornar full-stack. 
        </p>
        <p>
          Sou formado em Engenharia Metalúrgica e de Materiais. Fiz um intercâmbio para os Estados Unidos na University of Utah, em Salt Lake City. Além disso, Tenho pós-graduação em Engenharia de Segurança e Saúde do Trabalho que me ensinou muito sobre gestão de pessoas, equipes e projetos.
        </p>
        <p>
          Sou uma pessoa que aprende coisas de forma rápida, muito esforçado, extremamente empático e com muita inteligência emocional.
        </p>
      </div>
    )
  } else {
    return (
      <div ref={myRef} className={ turnedCount === 1 ? 'aboutClass turned' : 'aboutClass' }>
        <p>
          With the help of <a href="https://betrybe.com" target="_blank" rel="noreferrer">Trybe</a>, I became a front-end developer and I am the way to becoming a full-stack.
        </p>
        <p>
          I graduated in Metallurgical and Materials Engineering with an international experience as an exchange student in the University of Utah, USA. I also made graduate studies in Occupational Health and Safety Engineering which I learned much about people management, teams and projects.
        </p>
        <p>
          I am a person who learns things quickly, very hardworking, extremely empathetic and with a lot of emotional intelligence.
        </p>
      </div>
    )
  }
}