import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        items: [],
        totalPrice: 0,
        totalDiscount: 0
    }, 
    reducers: {
        addToCart(state, action) {
            state.items.push(action.payload)
        },
        removeFromCart(state, action) {
            state.items = state.items.filter((cartItem)=>{
                if(cartItem._id !== action.payload._id)
                    return cartItem
            })
        },
        setTotal(state) {
            const currentTotalPrice = state.items.reduce((productPrice, product) => {
                return productPrice + product.price
            }, 0)
            state.totalPrice = currentTotalPrice
        },
        setDiscount(state) {
            const currentTotalDiscount = state.items.reduce((productDiscount, product)=>{
                return productDiscount + product.discount
            }, 0)
            state.totalDiscount = currentTotalDiscount
        }
    }
})

export const {addToCart, removeFromCart, setTotal, setDiscount} = cartSlice.actions 
export default cartSlice.reducer