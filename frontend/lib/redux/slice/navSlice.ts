import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface NavBool{
    nav: boolean
}
const initialState: NavBool = {
    nav: false
}

const navSlice = createSlice({
    name: "nav",
    initialState,
    reducers:{
        toggleNav:(state,action:PayloadAction<boolean>)=>{
            state.nav = action.payload
        }
    }
})

export const { toggleNav } = navSlice.actions
export default navSlice.reducer 