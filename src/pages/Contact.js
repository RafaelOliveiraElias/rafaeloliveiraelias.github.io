import wave from '../imgs/wave.svg'
import './contact.css'
import { BsGithub, BsAt, BsLinkedin, BsWhatsapp } from "react-icons/bs";


export default function Contact () {
  return(
  <footer>
    <div className="waveContainer"> 
      <img src={wave} alt="wave"/>
    </div>
    <div className="contactsAt">
      <div className="extraInfo">
        <h6>Email: rafaelias567@gmail.com</h6>
        <h6>Telephone: +55 (31) 99488-3527 </h6>
      </div>
      <ul>
        <li><a><BsAt size="40px"/></a></li>
        <li><a><BsGithub size="40px"/></a></li>
        <li><a><BsLinkedin size="40px" /></a></li>
        <li><a><BsWhatsapp size="40px" /></a></li>
      </ul>
      <h5>2022 © Rafael Oliveira Elias</h5>
      <h6>All Rights Reserved.</h6>
    </div>
  </footer>)
}