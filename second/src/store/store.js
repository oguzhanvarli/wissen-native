import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./card/cardSlice";
import userReducer from "./user/userSlice";

export const store = configureStore({
    reducer:{
        card : cardReducer,
        user : userReducer
    }

})