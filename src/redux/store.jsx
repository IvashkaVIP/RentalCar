import {getCars} from "../fakeAPI"
import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    allCars: getCars(),
    favoriteCarsId:[],
    isError: false,
    isLoading: false
};

export const rootReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case 'allCars/addFavorite':
        return {
          ...state,
          favoriteCarsId: [...state.favoriteCarsId, action.payload],
        };
      case 'allCars/deleteFavorite':
        return {
          ...state,
          favoriteCarsId: state.favoriteCarsId.filter(
            carId => carId !== action.payload
          ),
        };

      default:
        return state;
    }

    // return state;
}


export const store = configureStore({
  reducer: rootReducer,
});
