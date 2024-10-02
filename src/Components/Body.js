import React from 'react'
import Slidebar from './Slidebar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex -z-50'>
       
         <Slidebar/>
        <Outlet/>
    </div>
  )
}

export default Body