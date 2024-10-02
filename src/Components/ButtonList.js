import React from 'react'
import Button from './Button'

const list =["All","Live","Comic Books","Resorts","Gaming","Travel","kids","Music","Dance","Sports","Watched","For you"]
const ButtonList = () => {


  return (
    <div className='flex'>
     {list.map((data)=>  <Button key={data} name={data}/>)} 
    </div>
  )
}

export default ButtonList