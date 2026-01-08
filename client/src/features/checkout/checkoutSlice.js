import {createSlice} from "@reduxjs/toolkit"

const checkoutSlice = createSlice({
    name: 'checkoutSlice',
    initialState: {
        items: [],
        paymentMethod: null
    },
    reducers: {
        setCheckoutDetails(state, action){
            console.log("Payload: ", action.payload) // test
            state.items = [...state.items, ...action.payload]
        },
        clearCheckout(state){
            state.items = []
            state.paymentMethod = null
            console.log("checkout state cleared")
        }
    }
})

export const {setCheckoutDetails, clearCheckout} = checkoutSlice.actions
export default checkoutSlice.reducer