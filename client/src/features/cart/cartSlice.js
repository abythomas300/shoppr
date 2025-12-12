import {createSlice} from "@reduxjs/toolkit"
import cart_db from "./cart-test-db"

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: cart_db 
    }, 
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload)
        },
        removeFromCart(state, action) {
            state.items = state.items.filter((cartItem)=>{
                if(cartItem.id !== action.payload.id)
                    return cartItem
            })
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions 
export default cartSlice.reducer