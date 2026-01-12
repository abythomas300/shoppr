import {createSlice} from "@reduxjs/toolkit"
import user_db from './user-test-db'

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        details: user_db
    },
    reducers: {
        updateUserInfo() {
            console.log("Userinfo updated")
        }
    }
})

export const {updateUserInfo} = userSlice.actions
export default userSlice.reducer