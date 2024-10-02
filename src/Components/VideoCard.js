import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle,title,thumbnails} = snippet;
   
  return (
    <div className='pt-6 m-3 w-72'>
        <img className="rounded-md" alt="thumbnails" src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold'>{title}</li>
            <li className='text-gray-500'>{channelTitle}</li>
            <li className='text-gray-500'>{statistics.viewCount}  Views</li>
        </ul>
    </div>
  )
}

export default VideoCard