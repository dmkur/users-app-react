import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services";

const initialState = {
  cars: [],
  error: null,
  carForUpdate: null,
};

const getAll = createAsyncThunk(
  "carSlice/getAll",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await carService.getAllCars();

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateCar = createAsyncThunk(
  "carSlice/updateCar",
  async ({ carId }, { rejectWithValue }) => {
    try {
      await carService.getAllCars(carId);

      return carId;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const carSlice = createSlice({
  name: "carSlice",
  initialState,
  reducers: {
    setCarForUpdate: (state, action) => {
      state.carForUpdate = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        const index = state.cars.findIndex((i) => i._id === action.payload);
        Object.assign(index, action.payload);
        state.carForUpdate = null;
      })
      .addDefaultCase((state, action) => {
        const [type] = action.type.split("/").slice(-1);
        type === "rejected"
          ? (state.error = action.payload)
          : (state.error = null);
      });
  },
});

const {
  reducer: carReducer,
  actions: { setCarForUpdate },
} = carSlice;

const carActions = {
  getAll,
  setCarForUpdate,
  updateCar,
};

export { carReducer, carActions };
