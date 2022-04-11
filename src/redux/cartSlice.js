import { createSlice } from '@reduxjs/toolkit';
import { newPriceCalculate } from '../components/CardComp';

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        products:[],
        cartQuantity:0,
        totalPrice:0
    },
    reducers:
   {
    addProduct:(state,action)=>{

        let exitsItem = state.products.find((product)=>{
            return product._id==action.payload._id
        })
        if(!exitsItem){
            state.products.push(action.payload);
        }
        else{
        }
        
    },
    qtyInc:(state,action)=>{
       let findProduct= state.products.find((product)=>{
            return product._id==action.payload
        })
        findProduct.qauntity+=1
    },
    qtyDec:(state,action)=>{
        let findProduct= state.products.find((product)=>{
             return product._id==action.payload
         })
         if(findProduct.qauntity>1) {findProduct.qauntity-=1}
     },

     calculateTotalPrice:(state,action)=>{
        let productPrices = state.products.map((product) => {
            return newPriceCalculate(product.phonePrice,product.phonePrice) * product.qauntity
          })
        let totalPriceOfProducts = productPrices.reduce((p,c) => {
            return p+c
          },0)
        state.totalPrice = totalPriceOfProducts
     },
     removeItemFromCart:(state,action) => {
          let filteredProducts = state.products.filter((product)=>{
              return product._id !=action.payload
          })
          state.products = filteredProducts
     }
   }
})

export const {addProduct,qtyInc,qtyDec,calculateTotalPrice,removeItemFromCart} = cartSlice.actions
export default cartSlice.reducer