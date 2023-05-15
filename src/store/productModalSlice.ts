import { ISelectedOption } from "./../components/productOptionals/Optional";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../context/Products-context";

export interface ISelectedOptional {
  name: string;
  qtd: number;
  category: string;
  maxQtd: number;
}
export interface IProductModalSlice {
  isVisible: boolean;
  product: IProduct;
  totalPrice: number;
  orderPrice: number;
  totalQtd: number;
  selectedOptionals: ISelectedOptional[];
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
  selectedOptionals: [],
};

export const productModalSlice = createSlice({
  name: "productModal",
  initialState,
  reducers: {
    toggleVisibility: (state) => {
      state.isVisible = !state.isVisible;
    },
    setProduct: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
      state.totalPrice = state.product.price;
    },
    updatePrice: (state, action: PayloadAction<number>) => {
      state.product.price = action.payload;
      state.totalPrice =
        (state.orderPrice + state.product.price) * state.totalQtd;
    },
    addOptionalToPrice: (state, action: PayloadAction<number>) => {
      state.orderPrice += action.payload;
      state.totalPrice =
        (state.orderPrice + state.product.price) * state.totalQtd;
    },
    removeOptionalToPrice: (state, action: PayloadAction<number>) => {
      state.orderPrice -= action.payload;
      state.totalPrice =
        (state.orderPrice + state.product.price) * state.totalQtd;
    },
    addOrderQtd: (state) => {
      state.totalQtd++;
      state.totalPrice =
        (state.orderPrice + state.product.price) * state.totalQtd;
    },
    removeOrderQtd: (state) => {
      state.totalQtd--;
      state.totalPrice =
        (state.orderPrice + state.product.price) * state.totalQtd;
    },
    addOption: (state, action: PayloadAction<ISelectedOption>) => {
      const selectedOption = state.selectedOptionals.find(
        (option) => option.name === action.payload.selectedValue
      );
      if (selectedOption) {
        selectedOption.qtd++;
      } else if (!selectedOption && action.payload.maxQtd > 1) {
        const newOption = {
          name: action.payload.selectedValue,
          qtd: 1,
          category: action.payload.optionalHeader,
          maxQtd: action.payload.maxQtd,
        };
        state.selectedOptionals.push(newOption);
      } else {
        const newOption = {
          name: action.payload.selectedValue,
          qtd: 1,
          category: action.payload.optionalHeader,
          maxQtd: action.payload.maxQtd,
        };
        state.selectedOptionals = state.selectedOptionals.filter(
          (option) => option.category !== action.payload.optionalHeader
        );
        state.selectedOptionals.push(newOption);
      }
    },
    removeOption: (state, action: PayloadAction<string>) => {
      const selectedOption = state.selectedOptionals.find(
        (option) => option.name === action.payload
      );
      if (selectedOption && selectedOption.qtd > 1) {
        selectedOption.qtd--;
      } else {
        state.selectedOptionals = state.selectedOptionals.filter(
          (option) => option.name !== action.payload
        );
      }
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
  addOption,
  removeOption,
} = productModalSlice.actions;
export default productModalSlice.reducer;
