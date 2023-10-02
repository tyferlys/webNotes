import {configureStore} from "@reduxjs/toolkit";
import mainPageSlice from "./slices/mainPageSlice";
import dataPersonSlice from "./slices/dataPersonSlice";
import dataWebSlice from "./slices/dataWebSlice";
import dataNoteSlice from "./slices/dataNoteSlice";

export const store = configureStore({
    reducer: {
        main: mainPageSlice,
        dataPerson: dataPersonSlice,
        dataWeb: dataWebSlice,
        dataNote: dataNoteSlice,
    }
})