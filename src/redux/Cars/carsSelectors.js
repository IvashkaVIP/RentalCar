const getAllCars = state => state.cars.allCars;
const getFavoriteCars = state => state.cars.favoriteCars;
const getError = state => state.cars.isError;
const getLoading = state => state.cars.isLoading;
const getEndOfData = state => state.cars.endOfData;

export const carsSelectors = {
  getAllCars,
  getFavoriteCars,
  getError,
  getLoading,
  getEndOfData,
};
