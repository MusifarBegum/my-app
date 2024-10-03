import React, { useCallback, useEffect, useState } from 'react';
import { VIDEO_ID_API, VIDEO_ID_KEY } from '../utils/constants';
import WatchPageInfo from './WatchPageInfo';

const WatchPageDescription = ({ videoId }) => {
  const [videoinfo, setvideoinfo] = useState(null);

  // Include videoId in the dependency array
  const getVideoDetails = useCallback(async () => {
    if (!videoId) return; // Prevent fetch if videoId is not available

      const response = await fetch(`${VIDEO_ID_API}${videoId}${VIDEO_ID_KEY}`);
      const json = await response.json();
      setvideoinfo(json.items[0] || null); // Access the first item or set null
   
  }, [videoId]); // Add videoId as a dependency

  useEffect(() => {
    getVideoDetails(); // Call the function to fetch video details
  }, [getVideoDetails]); // Depend on the getVideoDetails function

  if (!videoinfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <WatchPageInfo key={videoinfo.id} info={videoinfo} />
    </div>
  );
};

export default WatchPageDescription;
