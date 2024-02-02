import { configureStore,combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

export const store= configureStore({
  reducer:{
    cart:cartReducer,
    product:productReducer
  },
});