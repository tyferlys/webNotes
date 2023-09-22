import {createSlice} from "@reduxjs/toolkit";

const dataPersonSlice = createSlice({
    name: "dataPerson",
    initialState:{
        isAuth: undefined,
    },
    reducers:{
        setIsAuth(state, action){
            state.isAuth = action.payload.value;
        }
    },
})

export const {setIsAuth} = dataPersonSlice.actions;
export default dataPersonSlice.reducer;