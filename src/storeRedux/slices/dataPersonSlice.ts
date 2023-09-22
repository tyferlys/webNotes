import {createSlice} from "@reduxjs/toolkit";
import {User} from "./dataWebSlice";


export interface DataPerson {
    isAuth: boolean | undefined,
    userId: number | undefined,
}

const initState: DataPerson = {
    isAuth: undefined,
    userId: undefined,
}

const dataPersonSlice = createSlice({
    name: "dataPerson",
    initialState:initState,
    reducers:{
        setIsAuth(state, action){
            state.isAuth = action.payload.value;
        },
        setUserId(state, action){
            state.userId = action.payload.value;
        }
    },
})

export const {setIsAuth, setUserId} = dataPersonSlice.actions;
export default dataPersonSlice.reducer;