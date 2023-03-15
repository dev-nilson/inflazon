import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectItems = (state: any) => state.cart.items;
export const selectNewTotal = (state: any) =>
  state.cart.items.reduce((total, item) => total + item.newPrice, 0);
export const selectOldTotal = (state: any) =>
  state.cart.items.reduce((total, item) => total + item.oldPrice, 0);
export default cartSlice.reducer;
