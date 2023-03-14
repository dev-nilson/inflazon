import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {},
    removeItem: (state, action) => {},
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectItems = (state: any) => state.cart.items;
export default cartSlice.reducer;
