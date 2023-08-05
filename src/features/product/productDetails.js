import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModal: false,
}
export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
      toggleModal: (state) => {
          state.isModal = !state.isModal
      }
  },
})


export const {toggleModal} = productSlice.actions

export default productSlice.reducer
