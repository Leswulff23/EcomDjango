import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  products: [],
  error: '',
}

export const listProducts = createAsyncThunk("products", async ()=> {
  const response = await axios.get('/api/products/')
  return response.data;
})

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) =>{
    builder.addCase(listProducts.pending, (state) =>{
      state.loading= true
    })
    builder.addCase(listProducts.fulfilled, (state,action) =>{
      state.loading= false
      state.products= action.payload
      state.error = ''
    })
    builder.addCase(listProducts.rejected, (state, action) =>{
      state.loading= false
      state.error = action.error.message
      state.products=[]
    })
  }
})


export default productSlice.reducer