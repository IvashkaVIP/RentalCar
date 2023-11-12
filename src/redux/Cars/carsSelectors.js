const getAllCars = state => state.cars.allCars;
const getFavoriteCarsId = state => state.cars.favoriteCarsId;
const getError = state => state.cars.isError;

export const carsSelectors = {
    getAllCars,
    getFavoriteCarsId,
    getError
}
