import React from 'react'
import ButtonList from './ButtonList'

const Button = ({name}) => {

    
  return (
    <div >
       <button className='px-5 py-1 m-2 rounded-md  bg-gray-200'>{name}</button>
    </div>
  )
}

export default Button