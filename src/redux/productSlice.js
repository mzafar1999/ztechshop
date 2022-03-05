import { createSlice } from '@reduxjs/toolkit';
import { allProducts } from '../components/products';

const productsSLice = createSlice({
    name:'products',
    initialState:{
        allProducts,
        currentProduct:{},
        filteredProducts:[]
    },reducers:{
        selectCurretProduct : (state,action)=>{
            state.currentProduct = action.payload
        },
        
    }
})

export const {selectCurretProduct,getSingleProduct} = productsSLice.actions
export default productsSLice.reducer