import React from 'react'
import './AnnonceDetails.css'
import {BsHeartFill ,BsFillCircleFill ,BsFillArrowRightCircleFill,BsFillArrowLeftCircleFill} from "react-icons/bs"; 

const AnnonceDetails = () => {
  return (
    <div id='full'>
        <div className="annoncedetails">
            <div className="section1">

                 <div className="titre">
                     <h1> Cours de mathématique</h1>
                 </div>
                 <div className="favoris">
                   <BsHeartFill color="#ff0000" size={30} />
                 </div>

            </div>
            <div className="section2">
                <div className="subfirst">
                    <h4>Catégorie : Lycée </h4>
                    <h4>Niveau : 3AS </h4>
                    <h4>Matière : Mathématique</h4>
                    <h4>Lieu : Bouchegouf Guelma</h4>
                    <h4>Tarifs : 1200DA par mois </h4>
                </div>
                <div className="subsecond">
                    <h3>Description</h3>
                    <p>
                     <li> Le cours est en présentiel le vendredi à 8h .</li> 
                     <li> Le cours peut être individuel ou en groupe de 10 personnes .</li>
                     <li> Le cours se constitue de 4h par semaine .</li>
                  </p>

                </div>
            </div>
            <div className="section3"></div>
            <div className="section4">
                  <div className="sub4first">
                      <div className="pic">
                          <div className="but1">
                          <BsFillArrowLeftCircleFill/>
                          </div>
                          <div className="pictures">
                                <img src='/picture/annonce4.jpg' id='imgde'/>
                          </div>
                          <div className="but2">
                          <BsFillArrowRightCircleFill/>
                          </div>
                      </div>
                      <div className="arrow">
                      <BsFillCircleFill size={10}/> <BsFillCircleFill size={13}/> <BsFillCircleFill size={10}/>
                      </div>
                  </div>
                  <div className="sub4second">
                        <h2>Formation assurée par :</h2>
                        <h4> Nom et prénom : GAHAM BELGACEM </h4>
                        <h4> Localisation  : N16, Bouchegouf</h4>
                        <h4> Email : gahambelgacem@gmail.com</h4>
                        <h4> Num de Téléphone :0666 67 68 69</h4>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default AnnonceDetails
