import {createSlice} from "@reduxjs/toolkit"
// import orders from './orders-test-db'

const ordersSlice = createSlice({
    name: 'ordersSlice',
    initialState: {
        items: null
    }, 
    reducers: {
        setOrderDetails(state, action){
            state.items = action.payload
            console.log("Order details set to -->", state.items) // for test
        },
        addToOrders(state, action) {
            state.items.push(action.payload)
            console.log("product added to cart!", action.payload) // for test
        },
        rateProductsInOrders(state, action) {
            console.log("Item rated!, current state and payload: ", state.orderedItems, action.payload)
        }
    }
})

export const {addToCart, rateProductsInOrders, setOrderDetails} = ordersSlice.actions 
export default ordersSlice.reducer