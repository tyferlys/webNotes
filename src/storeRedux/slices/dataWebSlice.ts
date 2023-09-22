import {createSlice} from "@reduxjs/toolkit";

export type User = {
    id: number,
    login: string,
    password: string,
}

export  interface DataWeb{
    users: User[],
}

const initState : DataWeb = {
    users: [{
        id: 0,
        login: "admin",
        password: "123456",
    }],
}

const dataWebSlice = createSlice({
    name: "dataWeb",
    initialState: initState,
    reducers:{
        addUser(state, action){
            const {login, password} = action.payload
            const lastId = state.users.length ==0?0:state.users[state.users.length - 1].id + 1;
            state.users = [...state.users, {
                id: lastId,
                login,
                password
            }]
            console.log(state.users)
        }
    }
})

export const { addUser } = dataWebSlice.actions
export default  dataWebSlice.reducer;