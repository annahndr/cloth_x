import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getAllProducts } = productReducer.actions;

export default productReducer.reducer;
export const productSelector = (state) => state.products;

export function fetchProducts() {
  return (dispatch) => {
    axios
      .get("http://localhost:5000/api/products")
      .then(function (response) {
        dispatch(getAllProducts(response.data));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };
}
