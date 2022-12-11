import React from 'react'
import eventImage from "../assets/landing.png";

const Sponser = () => {
  return (
    <div>
        <h1 className='font-bold text-center text-[45px]'>Sponsors</h1>
        <img src={eventImage} className="w-80 scale-90 hover:scale-100 hover:cursor-pointer" />
    </div>
  )
}

export default Sponser;