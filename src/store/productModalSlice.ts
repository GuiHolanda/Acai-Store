import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../context/Products-context";

export interface IProductModalSlice {
  isVisible: boolean;
  product: Product;
  totalPrice: number;
  orderPrice: number;
  totalQtd: number;
}

const initialState: IProductModalSlice = {
  isVisible: false,
  product: {
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    price: 0,
  },
  totalPrice: 0,
  totalQtd: 1,
  orderPrice: 0,
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    setProduct: (state, action: PayloadAction<Product>) => {
      state.product = action.payload;
      state.totalPrice = state.product.price;
    },
    updatePrice: (state, action: PayloadAction<number>) => {
      state.orderPrice = action.payload;
      state.totalPrice = state.orderPrice * state.totalQtd;
    },
    addOptionalToPrice: (state, action: PayloadAction<number>) => {
      state.orderPrice += action.payload;
      state.totalPrice = state.orderPrice * state.totalQtd;
    },
    removeOptionalToPrice: (state, action: PayloadAction<number>) => {
      state.orderPrice -= action.payload;
      state.totalPrice = state.orderPrice * state.totalQtd;
    },
    addOrderQtd: (state) => {
      state.totalQtd++;
      state.totalPrice = state.orderPrice * state.totalQtd;
    },
    removeOrderQtd: (state) => {
      state.totalQtd--;
      state.totalPrice = state.orderPrice * state.totalQtd;
    },
    resetOrder: () => initialState,
  },
});

export const {
  toggleVisibility,
  setProduct,
  updatePrice,
  addOptionalToPrice,
  removeOptionalToPrice,
  addOrderQtd,
  removeOrderQtd,
  resetOrder,
} = productModalSlice.actions;
export default productModalSlice.reducer;
