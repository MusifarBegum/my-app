import { useCallback, useEffect, useState } from "react";
import { COMMENTSKEY, COMMENTSTHREAD } from "../utils/constants";

const useCommentThreads = ({ videoId })=>{
    const [message, setMessage] = useState([]);

    // Wrap the function in useCallback to prevent it from being re-created on every render
    const getcommentThreads = useCallback(async () => {
      try {
        const response = await fetch(COMMENTSTHREAD + videoId + COMMENTSKEY);
        const json = await response.json();
        setMessage(json.items || []); // Handle case if 'items' is undefined
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    }, [videoId]); // 'videoId' as dependency, because it might change
    
    useEffect(() => {
      getcommentThreads();
    }, [getcommentThreads]); // Add the function as a dependency to useEffect
    return message; 
}
export default useCommentThreads
