import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars: {},
    error: null
}


const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAllCars();

            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addDefaultCase((state, action) => {
                const [type] = action.type.split("/").slice(-1);
                type === "rejected"
                    ? (state.error = action.payload)
                    : (state.error = null);
            });
    }
});

const {reducer: carReducer} = carSlice;

const carActions = {
    getAll
};

export {carReducer, carActions};
