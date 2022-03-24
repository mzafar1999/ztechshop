import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name:'category',
    initialState:{
        currentCategory:'smartPhone'
    },reducers:{
        selectCategory : (state,action)=>{
            state.currentCategory = action.payload
        }
        
        
    }
})

export const {selectCategory} = adminSlice.actions
export default adminSlice.reducer