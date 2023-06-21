import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./features/api/ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductSlice,
  },
});
