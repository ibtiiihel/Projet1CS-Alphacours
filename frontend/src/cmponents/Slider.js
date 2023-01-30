import React from 'react'
import { TbPoint ,TbAntennaBars1 } from "react-icons/tb";
import './Slider.css'
const Slider = () => {
  return (
    <div className='slider'>
      <TbAntennaBars1 size={50}/>
      <TbPoint size={30}/>
      <TbAntennaBars1 size={50}/>
    </div>
  )
}

export default Slider
