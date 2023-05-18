import { ISelectedOptional } from "./productModalSlice";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ICartItem {
  price: number;
  optionals: ISelectedOptional[];
  name: string;
  qtd: number;
}

export interface ICartState {
  isShowing: boolean;
  cartItems: ICartItem[];
  totalPrice: number;
}

const initialState = {
  isShowing: false,
  cartItems: [],
  totalPrice: 0,
} as ICartState;

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleIsShowing: (state) => {
      state.isShowing = !state.isShowing;
    },
    addItemToCart: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems.push(action.payload);
      state.totalPrice += action.payload.price;
    },
    removeItemFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.name !== action.payload.name
      );
      state.totalPrice -= action.payload.price;
    },
  },
});

export const { toggleIsShowing, addItemToCart, removeItemFromCart } =
  cartSlice.actions;
export default cartSlice.reducer;
