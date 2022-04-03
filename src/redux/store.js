import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import { combineReducers } from 'redux'
import cartSlice from './cartSlice'
import adminSlice from './adminSlice'
import storage from 'redux-persist/lib/storage';
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'cart',
  storage,
};
const rootReducer = combineReducers({products:productSlice,cart:cartSlice,admin:adminSlice})
const persistedReducer = persistReducer(persistConfig, rootReducer);

  export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});