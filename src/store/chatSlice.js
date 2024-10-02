import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },
    reducers:{
        addLiveMessage:(state,action)=>{
        state.messages.splice(20,2)
         state.messages.unshift(action.payload);
        }
    }
})

export const {addLiveMessage} = chatSlice.actions;
export default chatSlice.reducer;