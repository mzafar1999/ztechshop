import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({products:productSlice})

const store = configureStore({
    reducer: rootReducer
  })
  
  export default store