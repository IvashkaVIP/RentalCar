import { getCars } from '../../fakeAPI';
import { createReducer } from '@reduxjs/toolkit';
import { addFavoriteCar, deleteFavoriteCar } from './carsOperations';

const carsInitialState = {
  allCars: getCars(),
  favoriteCarsId: [],
  isError: false,
  isLoading: false,
};

export const carsReducer = createReducer(carsInitialState, {
  [addFavoriteCar]: (state, action) => {
    state.favoriteCarsId.push(action.payload);
  },

  [deleteFavoriteCar]: (state, action) => {
    const index = state.favoriteCarsId.findIndex(
      car => car.id === action.payload
    );
    state.favoriteCarsId.splice(index, 1);
  },
});
