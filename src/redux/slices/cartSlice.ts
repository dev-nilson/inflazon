import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: Cart, action) => {
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item: Product) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectItems = (state: State) => state.cart.items;
export const selectNewTotal = (state: State) =>
  state.cart.items.reduce((total, item) => total + item.newPrice, 0);
export const selectOldTotal = (state: State) =>
  state.cart.items.reduce((total, item) => total + item.oldPrice, 0);
export default cartSlice.reducer;
