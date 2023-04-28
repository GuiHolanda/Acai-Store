import { createSlice } from "@reduxjs/toolkit";

export interface CartState {
  isShowing: boolean;
}

const initialState: CartState = {
  isShowing: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleIsShowing: (state) => {
      state.isShowing = !state.isShowing;
    },
  },
});

export const { toggleIsShowing } = cartSlice.actions;
export default cartSlice.reducer;
