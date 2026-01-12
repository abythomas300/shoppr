import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        userDetails: null,
        isLoggedIn: false,
        role: null
    },
    reducers: {
        setUserProfile(state, action) {
            state.userDetails = action.payload
        },
        setUserRole(state, action) {
            state.role = action.payload
        },
        setLoginSuccess(state) {
            state.isLoggedIn = true
        },
        setLogoutSuccess(state) {
            state.isLoggedIn = false
        }
    }
})

export const {setUserProfile, setUserRole, setLoginSuccess, setLogoutSuccess} = authSlice.actions
export default authSlice.reducer
