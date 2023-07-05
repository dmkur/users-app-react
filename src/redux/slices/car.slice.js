import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services";

const initialState = {
  cars: [],
  error: null,
  carForUpdate: null,
  isLoading: false,
  carById: [],
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
const getCarById = createAsyncThunk(
  "carSlice/getCarById",
  async ({ carId }, { rejectWithValue }) => {
    try {
      const { data } = await carService.getCarById(carId);

      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);
const getCarByParams = createAsyncThunk(
  "carSlice/getCarByParams",
  async ({ params }, { rejectWithValue }) => {
    try {
      const { data } = await carService.getCarByParams(params);
      console.log(data);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const create = createAsyncThunk(
  "carSlice/create",
  async ({ carData }, { rejectWithValue }) => {
    try {
      const { data } = await carService.createCar(carData);
      return data;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const updateCarById = createAsyncThunk(
  "carSlice/updateCar",
  async ({ carId, carData }, { rejectWithValue }) => {
    try {
      await carService.updateCarById(carId, carData);
      return carId;
    } catch (e) {
      return rejectWithValue(e.response.data);
    }
  }
);

const deleteCarById = createAsyncThunk(
  "carSlice/deleteCarById",
  async ({ carId }, { rejectWithValue }) => {
    try {
      await carService.deleteCarById(carId);
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
        state.isLoading = true;
        state.cars = action.payload;
      })
      .addCase(getCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        const arr = [];
        if (Array.isArray(action.payload)) {
          state.carById = action.payload;
        } else {
          arr.push(action.payload);
          state.carById = arr;
        }
      })
      .addCase(getCarById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(create.fulfilled, (state, action) => {
        state.cars.push(action.payload);
      })
      .addCase(deleteCarById.fulfilled, (state, action) => {
        const index = state.cars.findIndex((i) => i._id === action.payload);
        state.cars.splice(index, 1);
      })
      .addCase(updateCarById.fulfilled, (state, action) => {
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
  create,
  updateCarById,
  deleteCarById,
  getCarById,
  getCarByParams,
};

export { carReducer, carActions };
