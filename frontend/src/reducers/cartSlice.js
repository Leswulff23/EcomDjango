import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

const initialState = {
  cartItems: cartItemsFromStorage,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addToCart(state, action) {
        const newItem = action.payload
        const existingItem = state.cartItems.find((item)=> item.product === newItem.product)
        state.totalQuantity++;

        if(existingItem)
        {
            return{
                ...state,
                cartItems: state.cartItems.map(x => 
                    x.product === existingItem.product ? newItem : x)
            }
            
        }else{
            return{
                ...state,
                cartItems:[...state.cartItems, newItem]
            }
        }

        localStorage.setItem('cartItems', JSON.stringify(state.cartItems.map(item=>item)))
    }
  }
  
  
})

// Action creators are generated for each case reducer function
export const { addToCart} = cartSlice.actions

export default cartSlice.reducer