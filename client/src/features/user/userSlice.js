import {createSlice} from "@reduxjs/toolkit"
import user_db from './user-test-db'

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        details: user_db
    },
    reducers: {
        updateUserInfo(state, action) {
            console.log("Userinfo updated")
            console.log(`state: ${state.wishlistItems}, payload: ${action.payload}`)
        }
    }
})

export const {updateUserInfo} = userSlice.actions
export default userSlice.reducer