import { createSlice } from '@reduxjs/toolkit'

export const productReducer = createSlice({
  name: 'products',
  initialState: {
    products: [],
  },
  reducers: {
    getAllProducts: (state, action) => {
      state.products = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getAllProducts } = productReducer.actions

export default productReducer.reducer