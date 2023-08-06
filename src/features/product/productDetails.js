import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isModal: false,
    item:undefined 
}
export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        toggleModal: (state) => {
            state.isModal = true 
        },
        closeModal: (state) => {
            state.isModal = false
        },
        modalShow: (state, action) => {
            const { id, array } = action.payload
            const item = array.find(e => e.id === id)
            console.log(action.payload)
               state.item = {...item}
        }
    },
})


export const { toggleModal, closeModal, modalShow } = productSlice.actions

export default productSlice.reducer
