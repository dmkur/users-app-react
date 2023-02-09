import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer,
    authReducer
});

const setupSore = () => configureStore({
    reducer: rootReducer
})

export {setupSore}
