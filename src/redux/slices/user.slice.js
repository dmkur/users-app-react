import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {authService, userService} from "../../services";

const initialState = {
    users: [],
    error: null
};

const getAll = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await userService.getAll();

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const createUser = createAsyncThunk(
    "userSlice/createUser",
    async ({userData}, {rejectWithValue}) => {
        try {
            await userService.create(userData);

        } catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
);

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.users = action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split('/').slice(-1);
                type === 'rejected'
                    ? state.error = action.payload
                    : state.error = null
            })
    }
});

const {reducer: userReducer} = userSlice

const userActions = {
    getAll,
    createUser
}

export {userReducer, userActions}
