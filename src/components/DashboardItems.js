import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './DashboardItems.style.css'


const DashboardItems = (props) => {

    const {name, source} = props.items

    const [IsMoseOver, setIsMouseOver] = useState(false)

    function handleMouseOver(e){
        setIsMouseOver(true)
    }

    function handleMouseLeave(e){
        setIsMouseOver(false)
    }


  return (
    <div>
         <div onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} 
                className="templates-img mt-7 h-[auto] w-[250px] bg-black cursor-pointer relative">
                <img src={source} alt="" />
              {IsMoseOver ?  ( <div className="temp-name absolute top-0 bg-purple-800 text-white text-2xl font-bold w-[100%] text-center">{name}</div>
               ) : null}
               {IsMoseOver ?  <button id='temp-btn' className='absolute top-[60%] left-[20%] bg-purple-900 text-white px-5 py-1 font-semibold rounded'><Link to={'details-filling'}>Use Template </Link></button> : null}
            </div> 
    </div>
  )
}

export default DashboardItems
