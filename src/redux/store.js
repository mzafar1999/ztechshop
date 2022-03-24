import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import { combineReducers } from 'redux'
import cartSlice from './cartSlice'
import adminSlice from './adminSlice'

const rootReducer = combineReducers({products:productSlice,cart:cartSlice,admin:adminSlice})

const store = configureStore({
    reducer: rootReducer
  })
  
  export default store