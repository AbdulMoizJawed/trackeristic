import React from 'react'
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter, faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <div className='footer'>
      <a><FontAwesomeIcon icon={faTwitter} /></a> 
    <a><FontAwesomeIcon icon={faDiscord} /></a> 
    <a><FontAwesomeIcon icon={faEnvelope } /></a> 
   
       
    </div>
  )
}
