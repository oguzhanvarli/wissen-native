import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        login: (state) => {
            state.user = true
        },
        logout: (state) => {
            state.user = false
        },
        // handleUser : (state) => {
        //     state.user = !state.user
        // }
    }
})

export const {login, logout} = userSlice.actions
export default userSlice.reducer