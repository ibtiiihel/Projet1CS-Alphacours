import React from 'react'
import { BsGeoAlt } from "react-icons/bs";
import {Link } from "react-router-dom"
import "./AnnonceAll.css"



const AnnonceAll = () => {
  return (
    <div id='tous'>
          <div className="Divannonce">
          <div className="titre">
               <h1>
                    Cours de mathématique
               </h1>
          </div>
          <div className='teacher'>
             <h3>
                 Professeur GAHAM BELGACEM
             </h3>
          </div>
          <div className="localisation">
           <h5>
              <BsGeoAlt /> Guelma
           </h5>
          </div>
         <div className="details">
             <p>
              <li> Le cours est en présentiel le vendredi à 8h .</li> 
              <li> Le cours peut être individuel ou en groupe de 10 personnes .</li>
              <li> Le cours se constitue de 4h par semaine .</li>
             </p>
         </div>
         <div className="boutton">
            <Link to="/annoncedetails">
            <button>
                Plus de détails {'>>'}
            </button>
            </Link>
         </div>
          </div>
          <div className="Divannonce">
          <div className="titre">
               <h1>
                    Cours de mathématique
               </h1>
          </div>
          <div className='teacher'>
             <h3>
                 Professeur GAHAM BELGACEM
             </h3>
          </div>
          <div className="localisation">
           <h5>
              <BsGeoAlt /> Guelma
           </h5>
          </div>
         <div className="details">
             <p>
              <li> Le cours est en présentiel le vendredi à 8h .</li> 
              <li> Le cours peut être individuel ou en groupe de 10 personnes .</li>
              <li> Le cours se constitue de 4h par semaine .</li>
             </p>
         </div>
         <div className="boutton">
            <Link to="/annoncedetails">
            <button>
                Plus de détails {'>>'}
            </button>
            </Link>
         </div>
          </div>
          <div className="Divannonce">
          <div className="titre">
               <h1>
                    Cours de mathématique
               </h1>
          </div>
          <div className='teacher'>
             <h3>
                 Professeur GAHAM BELGACEM
             </h3>
          </div>
          <div className="localisation">
           <h5>
              <BsGeoAlt /> Guelma
           </h5>
          </div>
         <div className="details">
             <p>
              <li> Le cours est en présentiel le vendredi à 8h .</li> 
              <li> Le cours peut être individuel ou en groupe de 10 personnes .</li>
              <li> Le cours se constitue de 4h par semaine .</li>
             </p>
         </div>
         <div className="boutton">
            <Link to="/annoncedetails">
            <button>
                Plus de détails {'>>'}
            </button>
            </Link>
         </div>
          </div>
          <div className="Divannonce">
          <div className="titre">
               <h1>
                    Cours de mathématique
               </h1>
          </div>
          <div className='teacher'>
             <h3>
                 Professeur GAHAM BELGACEM
             </h3>
          </div>
          <div className="localisation">
           <h5>
              <BsGeoAlt /> Guelma
           </h5>
          </div>
         <div className="details">
             <p>
              <li> Le cours est en présentiel le vendredi à 8h .</li> 
              <li> Le cours peut être individuel ou en groupe de 10 personnes .</li>
              <li> Le cours se constitue de 4h par semaine .</li>
             </p>
         </div>
         <div className="boutton">
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

export default AnnonceAll