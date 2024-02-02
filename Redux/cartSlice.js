import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        console.log(state.cart);
      }
    },

    removeFromCart: (state, action) => {
      const newarr = state.cart.filter((item) => item !== action.payload.id);
      state.cart = newarr;
    },
    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent) {
        itemPresent.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity == 1) {
        itemPresent.quantity = 0;
        const newarr = state.cart.filter((item) => item.id !== action.payload.id);
        state.cart = newarr;
      } else {
        itemPresent.quantity--;
      }
    },
    cleanCart:(state)=>{
      state.cart = [];
    }
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart,incrementQuantity,decrementQuantity,cleanCart } = CartSlice.actions;

export default CartSlice.reducer;
