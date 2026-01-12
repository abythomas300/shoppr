import {createSlice} from "@reduxjs/toolkit"

const ordersSlice = createSlice({
    name: 'ordersSlice',
    initialState: {
        items: null
    }, 
    reducers: {
        setOrderDetails(state, action){
            state.items = action.payload
        },
        addToOrders(state, action) {
            state.items.push(action.payload)
        },
        rateProductsInOrders() {
            console.log("Item rated!")
        }
    }
})

export const {addToCart, rateProductsInOrders, setOrderDetails} = ordersSlice.actions 
export default ordersSlice.reducer