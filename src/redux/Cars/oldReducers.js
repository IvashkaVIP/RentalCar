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
      car => car._id === action.payload
    );
    state.favoriteCarsId.splice(index, 1);
  },
});

// export const carsReducer = createReducer(carsInitialState, {
//   [addFavoriteCar]: (state, action) => {
//     return {
//       ...state,
//       favoriteCarsId: [...state.favoriteCarsId, action.payload],
//     };
//   },

//   [deleteFavoriteCar]: (state, action) => {
//     return {
//       ...state,
//       favoriteCarsId: state.favoriteCarsId.filter(
//         carId => carId !== action.payload
//       ),
//     };
//   },
// });

// export const carsReducer = (state = carsInitialState, action) => {
//   switch (action.type) {
//     case (addFavoriteCar.type):
//       return {
//         ...state,
//         favoriteCarsId: [...state.favoriteCarsId, action.payload],
//       };
//     case (deleteFavoriteCar.type):
//       return {
//         ...state,
//         favoriteCarsId: state.favoriteCarsId.filter(
//           carId => carId !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };

// export const carsReducer = (state = carsInitialState, action) => {
//   switch (action.type) {
//     case 'cars/addFavorite':
//       return {
//         ...state,
//         favoriteCarsId: [...state.favoriteCarsId, action.payload],
//       };
//     case 'cars/deleteFavorite':
//       return {
//         ...state,
//         favoriteCarsId: state.favoriteCarsId.filter(
//           carId => carId !== action.payload
//         ),
//       };

//     default:
//       return state;
//   }
// };
