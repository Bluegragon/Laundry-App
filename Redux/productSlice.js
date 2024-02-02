import { createSlice } from '@reduxjs/toolkit'


const productSlice = createSlice({
  name: "product",
  initialState:{
     product:[],
  },
  reducers: {
     getProducts:(state,actions) => {
          state.product.push({...actions.payload});
     },
     incrementQty: (state, action) => {
          const itemPresent = state.product.find(
            (item) => item.id === action.payload.id
          );
          if (itemPresent) {
            itemPresent.quantity++;
          }
        },
     decrementQty: (state, action) => {
          const itemPresent = state.product.find(
            (item) => item.id === action.payload.id
          );
          if (itemPresent.quantity == 1) {
            itemPresent.quantity = 0;
            const newarr = state.product.filter((item) => item !== action.payload.id);
            state.product = newarr;
          } else {
            itemPresent.quantity--;
          }
        },
        cleanProduct:(state)=>{
          state.product = [];
        }

  }
});

export const {getProducts,incrementQty,decrementQty,cleanProduct} = productSlice.actions

export default productSlice.reducer