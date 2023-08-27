import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
    products : [],

}

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers : {
        addToCard : (state,action) => {
            state.value += 1,
            // state.products.forEach(element => {
            //     if(element.id === action.payload.id){
            //         return element['quantity'] = 2
            //     }
            // });
            state.products.push(action.payload)
            
        }
    }
})

export const {addToCard} = cardSlice.actions
export default cardSlice.reducer