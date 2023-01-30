import React from 'react'
import { useState } from "react";
import './AddAnnonce.css'
const AddAnnonce = () => {
    
  return (
    <div className='addannonce'>
        <div className='formulaire'>
             <div className="firstpart">

                    <div className="titreannonce">
                        <label>Titre d'annonce</label><br/>
                        <input type="text" placeholder="Entrer le titre d'annonce" required/>
                        
                    </div>
                    
                    <div className="descriptionannonce">
                    <label>Description d'annonce</label> <br/>
                    <textarea  rows={8} cols={60} name="description" placeholder="Entrer une description de l'annonce "/>
                    </div>
                    <div className="nomduprof">
                        <label>Nom du prof</label><br/>
                        <input type="text" placeholder="Entrer votre nom complet" required/>
                    </div>
                    <div className="numprof">
                            <label>Numéro de Téléphone</label><br/>
                            <input type="number" placeholder="Entrer votre num de téléphone" required/>
                    </div>

             </div>
             <div className="secondpart">
                      <div className="categorie">
                         <label>Catégorie</label><br/>
                         <select name='categorie'>
                           <option>--choisissez--</option>
                           <option>Primaire</option>
                           <option>CEM</option>
                           <option>Lycée</option>
                         </select>

                           
                      </div>
                      <div className="niveau">
                      <label>Niveau</label><br/>
                         <select name='niveau'>
                           <option>--choisissez--</option>
                           <option>1AP</option>
                           <option>2AP</option>
                           <option>3AP</option>
                           <option>4AP</option>
                           <option>5AP</option>
                           <option>1AM</option>
                           <option>2AM</option>
                           <option>3AM</option>
                           <option>4AM</option>
                           <option>1AS</option>
                           <option>2AS</option>
                           <option>3AS</option>
                         </select>
                      </div>
                      <div className="matiere">
                      <label>Matière</label><br/>
                         <select name='matiere'>
                           <option>--choisissez--</option>
                           <option>Mathématique</option>
                           <option>Phisique</option>
                           <option>Science</option>
                         </select>
                      </div>
                      <div className="wilaya">
                      <label>Wilaya</label><br/>
                         <select name='wilaya'>
                           <option>--choisissez--</option>
                           <option>Adrar</option>
                           <option>Guelma</option>
                           <option>Alger</option>
                           <option>Béjaia</option>
                           <option>Tizi-Ouzou</option>
                         </select>
                      </div>
                      <div className="commune">
                      <label>Commune</label> <br/>
                         <select name='wilaya'>
                           <option>--choisissez--</option>
                           <option>Amizour</option>
                           <option>Akbou</option>
                           <option>Sidi Aich</option>
                           <option>Lkseur</option>
                        
                         </select>
                      </div>
                      <div className="localisation">
                      <label>Localisation</label><br/>
                        <input type="text" placeholder="Entrer la localisation exact" required/>
                      </div>

                      <div className='submit'>
                     <button>
                      Envoyer
                     </button>
                    </div>
             </div>
        </div>

       

    </div>
  )
}

export default AddAnnonce