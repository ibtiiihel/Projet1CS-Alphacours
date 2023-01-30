import React from 'react'
import './Acceuil.css'
import Navbar from '../cmponents/Navbar'
import Footer from '../cmponents/Footer'
import Annonce from '../cmponents/Annonce'
import Filtrer from '../cmponents/Filtrer'
import AnnonceAll from '../cmponents/AnnonceAll'
import Slider from './../cmponents/Slider';


const Acceuil = () => {
  return (
    <div className='acceuil'>
        <Navbar/>
        <Annonce/>
        <Slider/>
        <div className='tri1'></div>
        <Filtrer/>
        <AnnonceAll/>
        <Footer/>
    </div>
  )
}

export default Acceuil