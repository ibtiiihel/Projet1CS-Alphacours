import React from 'react'
import { BsFacebook,BsInstagram,BsLinkedin  } from "react-icons/bs";
import './Footer.css'

const Footer = () => {
  return (
   <div className='upfooter'>
    <div className='footer'>
       
        <div className="info">
            <div className="infomail">
                <h1> Contactez Nous sur :</h1> 
                 <h4> contact@alphacours.dz</h4>
                
            </div>
            <div className="infosocial">
            <div className="facebook" >
              <BsFacebook size={50} color="#000"/>
            </div>
            <div className="instagram" >
              <BsInstagram size={50} color="#000"/>
            </div>
            <div className="linkedin" >
            <BsLinkedin size={50} color="#000"/>
            </div>
            </div>
        </div>

        <div className="img">
             <img src="/picture/logoo.png"/>
            
        </div>
    </div>
    </div>
  )
}

export default Footer
