import React from 'react';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';
import useVideos from '../hooks/useVideos';

const Videos = () => {
  const  videos = useVideos();
  return (
    <div className='flex flex-wrap px-15'>
   {videos.map((data)=> <Link to={"/watch?v="+ data.id} key={data.id}><VideoCard  info={data} /></Link> )} 
       
    </div>
  );
};

export default Videos;
