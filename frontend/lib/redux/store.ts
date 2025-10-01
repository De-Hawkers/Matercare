import { configureStore } from "@reduxjs/toolkit";
import nav from "./slice/navSlice"
export const store = configureStore({
    reducer:{
        nav: nav
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;