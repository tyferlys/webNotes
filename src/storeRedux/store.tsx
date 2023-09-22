import {configureStore} from "@reduxjs/toolkit";
import mainPageSlice from "./slices/mainPageSlice";
import dataPersonSlice from "./slices/dataPersonSlice";
import dataWebSlice from "./slices/dataWebSlice";

export const store = configureStore({
    reducer: {
        main: mainPageSlice,
        dataPerson: dataPersonSlice,
        dataWeb: dataWebSlice,
    }
})