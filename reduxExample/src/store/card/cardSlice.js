import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    value : 0,
}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers : {
        arttir: (state) => {
            state.value += 1
        },
        azalt: (state) => {
            state.value -= 1
        },
        inputaGoreDegistir: (state,action) => {
            state.value = action.payload
        }
    }
})

export const {arttir, azalt, inputaGoreDegistir} = cardSlice.actions
export default cardSlice.reducer