import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer, userReducer} from "./slices";

const rootReducer = combineReducers({
    authReducer,
    carReducer,
    userReducer
});

const setupSore = () => configureStore({
    reducer: rootReducer
})

export {setupSore}
