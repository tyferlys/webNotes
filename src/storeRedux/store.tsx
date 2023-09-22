import {configureStore} from "@reduxjs/toolkit";
import mainPageSlice from "./slices/mainPageSlice";
import dataPersonSlice from "./slices/dataPersonSlice";
import authSlice from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        main: mainPageSlice,
        dataPerson: dataPersonSlice,
        dataAuth: authSlice,
    }
})