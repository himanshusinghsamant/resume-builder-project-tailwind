import React from 'react'
import './Dashboard.style.css'
import TempImgData from '../data/Templates.img'
import DashboardItems from './DashboardItems'

const Dashboard = () => {

  return (
    <div>
        <div className="templates-title mt-[19%] text-center md:mt-10 md:mb-10 md:text-start md:ml-10 ">
            <h1 className='text-2xl font-bold mb-3'>Templates</h1>
            <span>Select a template to get started</span>
        </div>
        <div className="template-container mt-[15%] flex flex-col justify-center items-center md:flex-row flex-wrap md:justify-between md:px-16 md:m-0 ">
           {TempImgData && TempImgData.map(items =>{
            return (
              <DashboardItems items ={items}/>
            )
           })}
          
        </div>
    </div>
  )
}

export default Dashboard
