import React from 'react'
import { Link } from 'react-router-dom'
import "./Filtrer.css"

const Filtrer = () => {
  return (
    <div className='filtrersection'>

      <div className="first">
           <div className="wilaya">
                       <select name='wilaya'>
                           <option>--choisissez la wilaya--</option>
                           <option>Adrar</option>
                           <option>Guelma</option>
                           <option>Alger</option>
                           <option>Béjaia</option>
                           <option>Tizi-Ouzou</option>
                         </select>
           </div>
           <div className="commune">
           <select name='commune'>
                 <option>--choisissez la commune--</option>
                  <option>Amizour</option>
                  <option>Akbou</option>
                  <option>Sidi Aich</option>
                  <option>Lkseur</option>
                            
          </select>
           </div>
      </div>
      <div className="second">
            <div className="Categorie">
            <select name='categorie'>
                           <option>--choisissez le catégorie--</option>
                           <option>Primaire</option>
                           <option>CEM</option>
                           <option>Lycée</option>
                         </select>
            </div>
            <div className="niveau">
            <select name='niveau'>
                           <option>--choisissez le niveau --</option>
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
      </div>
      <div className="third">
               <div className="data1">
                    <input id="date" type="date" placeholder='Entrer la date de début '/>
               </div>
               <div className="date2">
               <input id="date" type="date" placeholder='Entrer la date de fin '/>
               </div>
      </div>
      <div className="forth">
             <div className="addboutton">
              <Link to="/ajouterannonce">
              <button>
                  Ajouter une annonce
                </button>
              </Link>
               
             </div> 
             <div className="matiere">
                       <select name='matiere'>
                           <option>--choisissez la matière--</option>
                           <option>Mathématique</option>
                           <option>Phisique</option>
                           <option>Science</option>
                         </select>
             </div>
      </div>
    </div>
  )
}

export default Filtrer