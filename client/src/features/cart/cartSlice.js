import {createSlice} from "@reduxjs/toolkit"
// import cart_db from "./cart-test-db"

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
                console.log("Currently working this product -->", product.title, " Rs.", product.price) // for test
                return productPrice + product.price
            }, 0)
            console.log("(From cart slice) Total worth of products in cart is Rs.", currentTotalPrice) // for test
            console.log("Setting total cart price...") // for test
            state.totalPrice = currentTotalPrice
        },
        setDiscount(state) {
            const currentTotalDiscount = state.items.reduce((productDiscount, product)=>{
                console.log("Calculating discount of ", product.title, "Rs.", product.discount)
                return productDiscount + product.discount
            }, 0)
            console.log("(From cart slice) Total product discount is Rs. ", currentTotalDiscount) // for test
            console.log("Setting total discount price...") // for test
            state.totalDiscount = currentTotalDiscount
        }
    }
})

export const {addToCart, removeFromCart, setTotal, setDiscount} = cartSlice.actions 
export default cartSlice.reducer