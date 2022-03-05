import { createSlice } from '@reduxjs/toolkit';
import { allProducts } from '../components/products';

const productsSLice = createSlice({
    name:'products',
    initialState:{
        allProducts,
        currentProduct:{},
        filteredProducts:[]
    },reducers:{
        selectCurretCar : (state,action)=>{
            state.currentProduct = action.payload
        }
    }
})

export const {selectCurretCar} = productsSLice.actions
export default productsSLice.reducer