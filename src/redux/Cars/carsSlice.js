import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../Cars/carsOperations';

const carsInitialState = {
  allCars: [],
  favoriteCars: [],
  endOfData: null,
  isError: false,
  isLoading: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteCars.push(action.payload);
    },
    deleteFavorite(state, action) {
      state.favoriteCars = state.favoriteCars.filter(
        car => car.id !== action.payload
      );
    },     
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = null;

        const newCars = action.payload;
        state.allCars = [...state.allCars, ...newCars];

        if (newCars.length < action.meta.arg.limit) {
          state.endOfData = true;
        } else {
          state.endOfData = false;
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      });
  },
});

export const { addFavorite, deleteFavorite } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
