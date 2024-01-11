import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  product: { reviews:[] },
  error: '',
}

export const productDetail = createAsyncThunk("productDetail", async (id)=> {
  const response = await axios.get(`/api/products/${id}`)
  return response.data;
})

export const productDetailSlice = createSlice({
  name: 'productDetails',
  initialState,
  extraReducers: (builder) =>{
    builder.addCase(productDetail.pending, (state) =>{
      state.loading= true
    })
    builder.addCase(productDetail.fulfilled, (state, action) =>{
      state.loading= false
      state.product= action.payload
      state.error = ''
    })
    builder.addCase(productDetail.rejected, (state, action) =>{
      state.loading= false
      state.error = action.error.message
      state.product=[]
    })
  }
})


export default productDetailSlice.reducer