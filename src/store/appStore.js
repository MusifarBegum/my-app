import { configureStore } from "@reduxjs/toolkit";
import slideReducer from "./configSlice"
import searchSliceReducer from "./searchSlice"
import chatReducer from "./chatSlice"

const appStore = configureStore({
    reducer:{
        slide:slideReducer,
        search:searchSliceReducer,
        chat:chatReducer
    }
})

export default appStore