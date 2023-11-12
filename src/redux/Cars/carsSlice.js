import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../Cars/carsOperations';
import { nanoid } from 'nanoid';

const carsInitialState = {
  allCars: [],
  favoriteCarsId: [],
  endOfData: null,
  isError: false,
  isLoading: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  reducers: {
    addFavorite(state, action) {
      state.favoriteCarsId.push(action.payload);
    },
    deleteFavorite(state, action) {
      state.favoriteCarsId = state.favoriteCarsId.filter(
        carId => carId !== action.payload
      );
    },
  },
  extraReducers: {
    [fetchCars.pending](state) {
      state.isLoading = true;
    },
    [fetchCars.fulfilled](state, action) {
      state.isLoading = false;
      state.isError = null;

      const newCars = action.payload.map(car => ({ _id: nanoid(), ...car }));
      state.allCars = [...state.allCars, ...newCars];

      if (newCars.length < action.meta.arg.limit) {
        state.endOfData = true;
      } else {
        state.endOfData = false;
      }
    },
    [fetchCars.rejected](state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { addFavoriteCar, deleteFavoriteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
