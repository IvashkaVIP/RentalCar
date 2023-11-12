import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/carsSlice';
// import { carsReducer } from './Cars/carsReducers';
import { filtersReducer } from './Filters/filtersReducers';

export const rootReducer = combineReducers({
    cars: carsReducer,
    filters: filtersReducer,  
})

export const store = configureStore({
  reducer: rootReducer,
});