import React from 'react'
import { BsGeoAlt } from "react-icons/bs";
import {Link } from "react-router-dom"
import './Annonce.css'
/***
 * wch lazem ndiiir : 
 * 1/limiter le nombre de lignes pour détails annonces 
 * 2/make it as slider 
 * 3/la laison avec le backend 
 * 4/boutton more details yro7 l une page spécifique de détails 
 */
const Annonce = () => {
  return (
    <div className='Annonce'>
         <div className="annoncepicture">
             <img src='/picture/annonce2.jpg' id='img2'/>
         </div>
         <div className="annonceInfo">
         <div className="annoncetitle">
               <h1>
                    Cours de mathématique
               </h1>
         </div>
         <div className='announceteacher'>
             <h3>
                 Professeur GAHAM BELGACEM
             </h3>
         </div>
         <div className="announcelocation">
          <h5>
              <BsGeoAlt /> Guelma
          </h5>
         </div>
         <div className="annoncedetails">
         <p>
              <li> Le cours est en présentiel le vendredi à 8h .</li> 
              <li> Le cours peut être individuel ou en groupe de 10 personnes .</li>
              <li> Le cours se constitue de 4h par semaine .</li>
             </p>
         </div>
         <div className="more">
            <Link to="/annoncedetails">
            <button>
                Plus de détails {'>>'}
            </button>
            </Link>
          
            
           
         </div>
         </div>

         
    </div>
  )
}

export default Annonce