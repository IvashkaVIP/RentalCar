const getAllCars = state => state.cars.allCars;
const getFavoriteCarsId = state => state.cars.favoriteCarsId;
const getError = state => state.cars.isError;
const getLoading = state => state.cars.isLoading;
const getEndOfData = state => state.cars.endOfData;

export const carsSelectors = {
    getAllCars,
    getFavoriteCarsId,
    getError,
    getLoading,
    getEndOfData
}
