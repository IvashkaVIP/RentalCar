import { createSlice } from '@reduxjs/toolkit';

import { getCars } from '../../fakeAPI';
// import { createReducer } from '@reduxjs/toolkit';
// import { addFavoriteCar, deleteFavoriteCar } from './carsOperations';

const carsInitialState = {
  allCars: getCars(),
  favoriteCarsId: [],
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
});

export const { addFavoriteCar, deleteFavoriteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
