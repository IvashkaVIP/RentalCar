import { createAction } from '@reduxjs/toolkit';


export const addFavoriteCar = createAction('cars/addFavorite')
export const deleteFavoriteCar = createAction('cars/deleteFavorite')



// export const addFavoriteCar = carId => {
//   return {
//     type: 'cars/addFavorite',
//     payload: carId,
//   };
// };
// export const deleteFavoriteCar = carId => {
//   return {
//     type: 'cars/deleteFavorite',
//     payload: carId,
//   };
// };

// export const addFavoriteCar = carId => {
//   return {
//     type: 'cars/addFavorite',
//     payload: carId,
//   };
// };
// export const deleteFavoriteCar = carId => {
//   return {
//     type: 'cars/deleteFavorite',
//     payload: carId,
//   };
// };
