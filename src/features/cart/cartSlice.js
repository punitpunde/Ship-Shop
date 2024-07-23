import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartNumber: {
    subTotal: 0,
    shipping: 0,
    tax: 0,
    total: 0,
  },
};
export const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let { payload: item } = action;

      state.cartItems.push({ ...item, quantity: 1 });
    },
    removeFromCart: (state, action) => {
      let { payload: item } = action;
      let index = state.cartItems.findIndex(
        (cartItem) => item.id === cartItem.id
      );
      state.cartItems.splice(index, 1);
    },
    setQuantity: (state, action) => {
      let { item, qty } = action.payload;
      state.cartItems = state.cartItems.map((cartItem) => {
        return cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + qty }
          : cartItem;
      });
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.quantity > 0
      );
    },
    setCartNumbers: (state) => {
      let subTotal = 0,
        shipping = 0,
        tax = 0,
        total = 0;
      for (let item of state.cartItems) {
        subTotal += item.quantity * item.price;
        shipping += item.quantity * 40;
      }
      tax = (subTotal * 18) / 100;
      total = subTotal + shipping + tax;
      state.cartNumber = { subTotal, shipping, tax, total };
    },
  },
});
export const { addToCart, removeFromCart, setQuantity ,setCartNumbers} = cartSlice.actions;
export default cartSlice.reducer;
