import { createSlice } from '@reduxjs/toolkit';

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
            return product.id===action.payload.id
        })
        if(!exitsItem){
            state.products.push(action.payload);
        }
        else{
        }
        
    },
    qtyInc:(state,action)=>{
       let findProduct= state.products.find((product)=>{
            return product.id===action.payload
        })
        findProduct.qauntity+=1
    },
    qtyDec:(state,action)=>{
        let findProduct= state.products.find((product)=>{
             return product.id===action.payload
         })
         if(findProduct.qauntity>1) {findProduct.qauntity-=1}
     },

     calculateTotalPrice:(state,action)=>{
        let productPrices = state.products.map((product) => {
            return product.price * product.qauntity
          })
        let totalPriceOfProducts = productPrices.reduce((p,c) => {
            return p+c
          },0)
        state.totalPrice = totalPriceOfProducts
     }

   }
})

export const {addProduct,qtyInc,qtyDec,calculateTotalPrice} = cartSlice.actions
export default cartSlice.reducer