import { configureStore } from '@reduxjs/toolkit'
import cartSlice from '../features/cart/cartSlice'
import  productSlice  from '../features/product/productDetails'
export const store = configureStore({
  reducer: {
      cart: cartSlice,
      product: productSlice
  },
})
