import React, { useEffect, useState } from 'react'
import CommentsList from './CommentsList'
import { COMMENTSKEY, COMMENTSTHREAD } from '../utils/constants'


const CommentsSection = ({videoId}) => {
const [Message,setMessage] = useState("");

    useEffect(()=>{
        getcommentThreads();
    },[getcommentThreads])

    const getcommentThreads = async()=>{
    const data= await fetch(COMMENTSTHREAD+videoId+COMMENTSKEY);
    const json = await data.json();
    setMessage(json.items)
    }

  return (
    <div>
        <h1 className='font-bold px-10 py-2 text-lg'>Comments</h1> 
        <CommentsList  comments={Message}/>
        </div>
  )
}

export default CommentsSection