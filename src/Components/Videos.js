import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
   
      const response = await fetch(YOUTUBE_API);
      const json = await response.json();
      if (json.items) {
        setVideos(json.items);  // Ensure items exist before updating state
      } 
    
  };

  return (
    <div className='flex flex-wrap px-15'>
   {videos.map((data)=> <Link to={"/watch?v="+ data.id} key={data.id}><VideoCard  info={data} /></Link> )} 
       
    </div>
  );
};

export default Videos;
