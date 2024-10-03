import React, {useState } from 'react';
import LiveMessage from './LiveMessage';
import {  useDispatch, useSelector } from 'react-redux';
import { addLiveMessage } from '../store/chatSlice';
import useLiveChat from '../hooks/useLiveChat';

const LiveChat = () => {
    const [liveChat, setLiveChat] = useState("");
    const userChat = useSelector((store) => store.chat.messages);
    const dispatch = useDispatch();
    useLiveChat(); //Custom Hook
   
    return (
        <form className="w-full" onSubmit={(e) => {
            e.preventDefault();
            dispatch(addLiveMessage({
                name: "user",
                Text: liveChat
            }));
            setLiveChat(""); // Clear input after sending
        }}>
            <div className='w-full h-[500px] border border-gray-300 bg-slate-50 rounded-lg overflow-y-scroll flex flex-col-reverse'>
                {userChat.map((c, index) => (
                    <LiveMessage key={index} name={c.name} text={c.Text} />
                ))}
            </div>
            <div className='w-full py-2'>
                <input
                    type='text'
                    placeholder='Chat...'
                    value={liveChat}
                    onChange={(e) => setLiveChat(e.target.value)}
                    className='p-2 w-full border border-gray-300 rounded-lg' // Ensure the input takes full width
                />
            </div>
        </form>
    );
};

export default LiveChat;
