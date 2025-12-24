import {createSlice} from "@reduxjs/toolkit"
// import products from './product-db-test'

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        items: null
    },
    reducers: {
        setProduct(state, action) {
            state.items = action.payload
        },
        addProduct(state, action) {
            state.items.push(action.payload)
        }
    }
})

export const {setProduct, addProduct} = productSlice.actions
export default productSlice.reducer