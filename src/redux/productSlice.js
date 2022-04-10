import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { allProducts } from '../components/products';

const initialState = {
    allProducts: [],
    currentProduct:{},
    filteredProducts:[],
    relatedProducts:[],
    loading: false,
    error:false
  }

export const getProducts = createAsyncThunk(
    //action type string
    'products/getProducts',
    // callback function
    async (thunkAPI) => {
      const res = await fetch('http://localhost:5000/api/all-phones').then(
      (data) => data.json()
    )
    return res
  })

const productsSLice = createSlice({
    name:'products',
    initialState
    ,reducers:{
        selectCurretProduct : (state,action)=>{
            state.currentProduct = action.payload
        },
       getProductsLoading: (state)=>{
          state.loading= true
       },
       getProductsSucceed: (state,action)=>{
         state.allProducts=action.payload
         state.loading=false
         state.error=false
       },
       getProductsFailed: (state)=>{
         state.loading=false
         state.error=true
       }
    }
})




export const {selectCurretProduct,getProductsLoading,getProductsSucceed,getProductsFailed} = productsSLice.actions
export default productsSLice.reducer


export function fetchProducts() {
    return async (dispatch) =>{
      dispatch(getProductsLoading())
      try {
        const res = await axios.get('http://localhost:5000/api/all-phones')
        console.log(res);
        dispatch(getProductsSucceed(res.data))

      } catch (error) {
        dispatch(getProductsFailed())
      }
    }
}