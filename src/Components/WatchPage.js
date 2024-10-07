import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {  useSearchParams } from 'react-router-dom'
import {closeMenu} from "../store/configSlice"
import CommentsSection from './CommentsSection';
import LiveChat from './LiveChat';
import WatchPageDescription from './WatchPageDescription';

const WatchPage = () => {
    const  [searchParams] = useSearchParams();
    const dispatch= useDispatch();
    useEffect(()=>{
      dispatch(closeMenu())
    },[dispatch])
  return (
    <div className='flex flex-col w-full'>
      <div className="px-5 flex">
        <div className="p-14 ">
        <iframe width="900px" height="500px"  src={"https://www.youtube.com/embed/" +searchParams.get("v")} 
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen="true"></iframe>
       <WatchPageDescription videoId={searchParams.get("v")}/>
      </div>
    <div className='w-full py-14'>
    <LiveChat/> 
    </div>
</div>
<CommentsSection videoId={searchParams.get("v")}/>
    </div>
    
  )
}

export default WatchPage