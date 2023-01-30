import React from 'react'
import {  BsSearch } from "react-icons/bs";
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
        <img id="alphacours" src="/picture/logo.png"/>
        </div>
        <div className="search">
        <span className='icon'> <BsSearch/> </span>
        <input type="text" placeholder="Rechercher" className='input' />

        </div>
        <div className="rightside">
          
            
            <a href="/">Acceuil </a>
            <a href="/Messages">Messages </a>
            <a href="/Profile">profile</a>
            
         
            
        </div>
       
    </div>
  )
}

export default Navbar