import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userReducer} from "./slices";

const rootReducer = combineReducers({
    userReducer
});

const setupSore = () => configureStore({
    reducer: rootReducer
})

export {setupSore}
