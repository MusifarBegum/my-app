import React from 'react'
import Button from './Button'
import { LIST_OF_BUTTONS } from '../utils/constants'

const list = LIST_OF_BUTTONS
const ButtonList = () => {
  return (
    <div className='flex'>
     {list.map((data)=>  <Button key={data} name={data}/>)} 
    </div>
  )
}

export default ButtonList