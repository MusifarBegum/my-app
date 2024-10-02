import { createSlice } from '@reduxjs/toolkit'

const configSlice = createSlice({
    name:"slide",
    initialState:{
        toggleBar : true
    },
    reducers:{
       addSlideBarToggling:(state)=>{
          state.toggleBar = !state.toggleBar
       },
       closeMenu:(state)=>{
        state.toggleBar = false
       }
    }
})

export const {addSlideBarToggling,closeMenu} = configSlice.actions
export default configSlice.reducer