import {createSlice} from "@reduxjs/toolkit"
import cart_db from "./cart-test-db"

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: cart_db 
    }, 
    reducers: {
        addToCart(state, action) {
            state.cartItems.push(action.payload)
            console.log("product added to cart!", action.payload) // for test
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter((cartItem, index)=>{
                if(index !== action.payload)
                    return cartItem
            })
            console.log("product removed from cart: ", action.payload) // for test
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions 
export default cartSlice.reducer