import {createSlice} from "@reduxjs/toolkit"
import wishlist_db from "./wishlist-test-db"

const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState: {
        items: wishlist_db
    },
    reducers: {
        addToWishlist(state, action) {
          state.items.push(action.payload)  
        },
        removeFromWishlist(state, action) {
            state.items = state.items.filter((item)=>{
                if(item.id != action.payload.id)
                    return item
            })
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer