import {createSlice} from "@reduxjs/toolkit"
import wishlist_db from "./wishlist-test-db"

const wishlistSlice = createSlice({
    name: "wishlistSlice",
    initialState: {
        items: wishlist_db
    },
    reducers: {
        addToWishlist(state, action) {
            console.log("Item added to wishlist!")
            console.log(`state: ${state.wishlistItems}, payload: ${action.payload}`)
        },
        removeFromWishlist(state, action) {
            console.log("remove from wishlist method!!", action.payload) // for test
            state.items = state.items.filter((item)=>{
                if(item.id != action.payload.id)
                    return item
            })
            console.log("Item removed fron wishlist!")
        }
    }
})

export const {addToWishlist, removeFromWishlist} = wishlistSlice.actions
export default wishlistSlice.reducer