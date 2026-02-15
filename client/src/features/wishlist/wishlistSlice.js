import {createSlice} from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState: {
        items: []
    },
    reducers: {
        setWishlistDetails(state, action) {
            state.items = action.payload
        },
        addToWishlist(state, action) {
          state.items.push(action.payload)  
        },
        removeFromWishlist(state, action) {
            state.items = state.items.filter((item)=>{
                if(item._id !== action.payload._id)
                    return item
            })
        }
    }
})

export const {addToWishlist, removeFromWishlist, setWishlistDetails} = wishlistSlice.actions
export default wishlistSlice.reducer