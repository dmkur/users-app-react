import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {authService} from "../../services";


const initialState = {
    isAuth: false,
    error: null
};

const login = createAsyncThunk(
    "authSlice/login",
    async ({userData}, {rejectWithValue}) => {
        try {
            const {data} = await authService.login(userData);

            return data;
        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);


const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(login.fulfilled, (state, action) => {
                state.isAuth = true;
                authService.setTokens(action.payload);
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split("/").slice(-1);
                type === "rejected"
                    ? (state.error = action.payload)
                    : (state.error = null);
            });
    }
});

const {reducer: authReducer} = authSlice;

const authActions = {
    login,
};

export {authReducer, authActions};
