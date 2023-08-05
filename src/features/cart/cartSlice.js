import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
}
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
      add: (state, action) => {
          const id = action.payload.id
          const items = state.items
          const isAvaild = items.find(e => e.id === id)

          if(!isAvaild) {
              items.push({...action.payload, itemQuantity: 1}) 
          } else {
              const item = items.find(e => e.id === id)
              item.itemQuantity += 1
          }
      }
  },
})


export const {add} = cartSlice.actions

export default cartSlice.reducer


