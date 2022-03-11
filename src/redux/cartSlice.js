import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        products:[],
        cartQuantity:0,
        total:0
    },
    reducers:
   {
    addProduct:(state,action)=>{
        state.products.push(action.payload);
    }
   }
})

export const {addProduct} = cartSlice.actions
export default cartSlice.reducer