import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Slidebar = () => {
  const showScreen = useSelector((store)=>store.slide?.toggleBar);

   if(!showScreen){
    return null
   }

  return (
<div className='p-4 h-screen sticky top-0' >
      <div className='border-b pb-4 '>
        <ul>
            <li className='py-2'>
               <Link to={"/"}>Home</Link> 
            </li>
            <li className='py-2'>
                Shorts
            </li>
            <li className='py-2'>
            Subscriptions
            </li>
        </ul>
    </div>
    <div className='pt-4 border-b pb-4'>
        <ul>
            <li className='py-2'>
                You
            </li>
            <li className='py-2'>
                History
            </li>
            
        </ul>
    </div>
    <div className='pt-4 border-b pb-4'>
        <h1 className='font-bold'>Explore</h1>
        <ul>
            <li className='py-2'>
                Trendings 
            </li>
            <li className='py-2'>
                Shopping
            </li>
            <li className='py-2'>
              Musics 
            </li>
            <li className='py-2'>
             Movies 
            </li>
            <li className='py-2'>
             Live
            </li>
            <li className='py-2'>
              Gaming 
            </li>
            <li className='py-2'>
              News 
            </li>
            <li className='py-2'>
              Sports 
            </li>
            <li className='py-2'>
              Fashions & Beauty 
            </li>
        </ul>
    </div>
        
    </div>
   
    
  )
}

export default Slidebar