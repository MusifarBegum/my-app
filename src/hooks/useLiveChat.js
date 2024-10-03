import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { generate, randomTextGenerator } from '../utils/helper';
import { addLiveMessage } from "../store/chatSlice";

const useLiveChat = ()=>{
    const dispatch = useDispatch();
    const getLiveChatMessages = useCallback(() => {
        dispatch(addLiveMessage({
            name: generate(),
            Text: randomTextGenerator(10)
        }));
    },[dispatch]) 

    useEffect(() => {
        const i = setInterval(() => {
            getLiveChatMessages();
        }, 2000);

        return () => clearInterval(i);
    }, [getLiveChatMessages]);

    

}

export default useLiveChat