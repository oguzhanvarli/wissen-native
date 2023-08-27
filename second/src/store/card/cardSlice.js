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
            state.value += 1
            let myIndex = -1
            state.products.map((item, index) => {
                if(item.id === action.payload.id){
                    myIndex = index
                }
            })
            if(myIndex === -1){
                state.products.push(action.payload)
            }else{
                if(state.products[myIndex]['quantity']){
                    state.products[myIndex]['quantity'] = state.products[myIndex]['quantity'] + 1
                }else{
                    state.products[myIndex]['quantity'] = 2
                }
                
            }
        },
        clearCard : (state) => {
            state.value = 0,
            state.products = []
        }
    }
})

export const {addToCard, clearCard} = cardSlice.actions
export default cardSlice.reducer