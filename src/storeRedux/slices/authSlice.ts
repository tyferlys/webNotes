import {createSlice} from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "authSlice",
    initialState: {
        isMove: true,
    },
    reducers: {
        toggleIsMove(state){
            state.isMove = !state.isMove;
        },
    }
})

export const {toggleIsMove} = authSlice.actions
export default authSlice.reducer;