export const addFavoriteCar = carId => {
  return {
    type: "allCars/addFavorite",
    payload: carId,
  };
};
export const deleteFavoriteCar = carId => {
    return {
        type: "allCars/deleteFavorite",
        payload: carId,
    };    
  };
