import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import { combineReducers } from 'redux'
import cartSlice from './cartSlice'

const rootReducer = combineReducers({products:productSlice,cart:cartSlice})

const store = configureStore({
    reducer: rootReducer
  })
  
  export default store