import React from 'react'
import Slidebar from './Slidebar'
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