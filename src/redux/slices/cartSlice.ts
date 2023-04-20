import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state: Cart, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items = [...state.items, newItem];
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item: Product) => item.id !== action.payload
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export const selectItems = (state: State) => state.cart.items;
export const selectNewTotal = (state: State) =>
  state.cart.items.reduce((total, item) => total + (item.newPrice * item.quantity), 0);
export const selectOldTotal = (state: State) =>
  state.cart.items.reduce((total, item) => total + (item.oldPrice * item.quantity), 0);
export default cartSlice.reducer;
