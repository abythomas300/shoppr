import {createSlice} from "@reduxjs/toolkit"
// import user_db from "../user/user-test-db" // for test

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
            console.log("userDetails initial state value changed to : ", state.userDetails)
        },
        setUserRole(state, action) {
            state.role = action.payload
            console.log("role initial state value changed to : ", state.role)
        },
        setLoginSuccess(state) {
            state.isLoggedIn = true
            console.log("Login success to: ", state.isLoggedIn)
        },
        setLogoutSuccess(state) {
            state.isLoggedIn = false
            console.log("Login success to: ", state.isLoggedIn)
        }
    }
})

export const {setUserProfile, setUserRole, setLoginSuccess, setLogoutSuccess} = authSlice.actions
export default authSlice.reducer
