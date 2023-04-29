import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../context/Products-context";

export interface IProductModalSlice {
  isVisible: boolean;
  product: Product;
}

const initialState: IProductModalSlice = {
  isVisible: false,
  product: {
    id: "",
    title: "",
    description: "",
    image: "",
    category: "",
    price: "",
  },
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
    },
  },
});

export const { toggleVisibility, setProduct } = productModalSlice.actions;
export default productModalSlice.reducer;
