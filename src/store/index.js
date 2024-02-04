import { configureStore } from "@reduxjs/toolkit";

import themeReducer from "./colorTheme";
import modelReducer from "./model";
import toastReducer from "./toastSlice";

const store = configureStore({
    reducer: {
        theme: themeReducer,
        model: modelReducer,
        toast: toastReducer
    }
})

export default store;