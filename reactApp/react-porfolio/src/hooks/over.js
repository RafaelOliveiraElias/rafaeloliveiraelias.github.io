import { useState } from 'react';

export default function useHover(number) {
  const [hoved, setHover] = useState({ [number] : false });
 


  function newHover(){
    setHover((previous) => !previous.hoved[number])
  }


  console.log(hoved);
  return { hoved, newHover }
}