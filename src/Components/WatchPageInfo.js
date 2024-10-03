import React from 'react'

const WatchPageInfo = ({info}) => {
    
    const {snippet,statistics} = info;
    const {channelTitle,title} = snippet;
  return (
    <div>
    <ul className='py-2'>
      <li className='font-bold text-lg'>{title}</li>
      <li className='text-gray-500'>{channelTitle}</li>
      <li className='text-gray-500'>{statistics.viewCount} Views</li>
    </ul>
  </div>
  )
}

export default WatchPageInfo