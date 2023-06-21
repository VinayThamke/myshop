import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk("products/getData", async () => {
  const res = await axios.get("https://fakestoreapi.com/products/");

  if (res) {
    return res;
  }
});

const getProducts = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  // extraReducers: (builder) =>{
  //   builder.addCase(getData.pending, (state) => {
  //     state.loading = true;
  //   });
  //   builder.addCase(getData.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.products = action.payload;
  //   });
  //   builder.addCase(getData.rejected, (state, action) => {
  //     state.loading = true;
  //     state.products = action.payload;
  //   });
  // },
});

export const { setProducts } = getProducts.actions;

export const getAllProducts = (state) => state.products.products;
export default getProducts.reducer;

//   {
//     [getData.pending]: (state) => {
//       state.loading = true;
//     },
//     [getData.fulfilled]: (state, action) => {
//       state.loading = false;
//       state.products = action.payload;
//     },
//     [getData.rejected]: (state, action) => {
//       state.loading = true;
//       state.products = action.payload;
//     },
//   },
