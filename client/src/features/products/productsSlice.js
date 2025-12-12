import {createSlice} from "@reduxjs/toolkit"
import products from './product-db-test'

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        items: products
    },
    reducers: {
        addProduct(state, action) {
            state.items.push(action.payload)
        }
    }
})

export const {addProduct} = productSlice.actions
export default productSlice.reducer