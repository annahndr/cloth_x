import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product-reducer";

export default configureStore({
  reducer: {
    products: productReducer,
    product: productReducer,
    loading: productReducer
  },
});
