import { createSlice } from "@reduxjs/toolkit";

const countSlice =createSlice({
    name:'counter',
    initialState:{
        count:0
    },reducers:{
        //actions
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }
    }

})
//export actions and store reducer seperately
//export action 
//Action creators for the types of actions that are handled by the slice reducer.
export  const {increment,decrement,reset}=countSlice.actions
//export slice reducers
export default countSlice.reducer
