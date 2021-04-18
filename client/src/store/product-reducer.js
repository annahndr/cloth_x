import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "products",
  initialState: {
    products: [],
    product: {},
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload;
    },
    getSingleProduct: (state, action) => {
      state.product = action.payload;
    },
    isLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllProducts,
  getSingleProduct,
  isLoading,
} = productReducer.actions;

export default productReducer.reducer;
export const productSelector = (state) => state.products;
export const singleProductSelector = (state) => state.product;
export const loadingSelector = (state) => state.loading;

export function fetchProducts() {
  return (dispatch) => {
    dispatch(isLoading(true));
    axios
      .get("http://localhost:5000/api/products")
      .then(function (response) {
        dispatch(getAllProducts(response.data));
        dispatch(isLoading(false));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(isLoading(false));
      });
  };
}

export function fetchSingleProduct(id) {
  return (dispatch) => {
    dispatch(isLoading(true));
    axios
      .get(`http://localhost:5000/api/products/${id}`)
      .then(function (response) {
        console.log(response.data);
        dispatch(getSingleProduct(response.data));
        dispatch(isLoading(false));
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        dispatch(isLoading(false));
      });
  };
}
