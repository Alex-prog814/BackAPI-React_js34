import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

export default configureStore({
    middleware: getDefaultMiddleware => 
    getDefaultMiddleware({
        serializableCheck: false
    }),
    reducer: {
        user: userSlice
    }
});