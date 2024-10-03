import { useCallback, useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constants';

const useVideos = ()=>{
    const [videos, setVideos] = useState([]);

    const getVideos = useCallback(async () => {
      const response = await fetch(YOUTUBE_API);
      const json = await response.json();
      if (json.items) {
        setVideos(json.items);  // Ensure items exist before updating state
      } 
    
  },[]) 
  
  
  useEffect(() => {
    getVideos();
  }, [getVideos]);

  return videos;
}

export default useVideos