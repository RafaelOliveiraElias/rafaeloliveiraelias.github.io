import wave from '../imgs/wave.svg'
import './contact.css'
import { BsGithub, BsAt, BsLinkedin, BsWhatsapp } from "react-icons/bs";


export default function Contact () {
  return(
  <footer>
    <a id='contact' />
    <div className="waveContainer"> 
      <img src={wave} alt="wave"/>
    </div>
    <div className="contactsAt">
      <div className="extraInfo">
        <h6>Email: rafaelias567@gmail.com</h6>
        <h6>Tel: +55 (31) 99488-3527 </h6>
      </div>
      <ul>
        <li><a href='mailto: rafaelias567@gmail.com'><BsAt size="40px"/></a></li>
        <li><a href='https://github.com/RafaelOliveiraElias' target="_blank" rel="noreferrer"><BsGithub size="40px"/></a></li>
        <li><a href='https://www.linkedin.com/in/rafael-oliveira-elias-865bb3154/' target="_blank" rel="noreferrer"><BsLinkedin size="40px" /></a></li>
        <li><a href="https://wa.me/+55994883527" target="_blank" rel="noreferrer"><BsWhatsapp size="40px" /></a></li>
      </ul>
      <h5>2022 © Rafael Oliveira Elias</h5>
      <h6>All Rights Reserved.</h6>
    </div>
  </footer>)
}