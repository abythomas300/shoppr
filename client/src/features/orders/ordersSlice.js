import {createSlice} from "@reduxjs/toolkit"
import orders from './orders-test-db'

const ordersSlice = createSlice({
    name: 'ordersSlice',
    initialState: {
        items: orders
    }, 
    reducers: {
        addToOrders(state, action) {
            state.orderedItems.push(action.payload)
            console.log("product added to cart!", action.payload) // for test
        },
        rateProductsInOrders(state, action) {
            console.log("Item rated!, current state and payload: ", state.orderedItems, action.payload)
        }
    }
})

export const {addToCart, rateProductsInOrders} = ordersSlice.actions 
export default ordersSlice.reducer