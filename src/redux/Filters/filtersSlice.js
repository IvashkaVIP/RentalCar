import { createSlice } from '@reduxjs/toolkit';
// import { fetchCars } from '../Cars/carsOperations';


const filtersInitialState = {
  brand: '',
  price: null,
  mileage: { from: null, to: null },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    addBrandFilter(state, action) {
      state.brand = action.payload;
    },
    addPriceFilter(state, action) {
      state.price = action.payload;
    },
    addMilageFilter(state, action) {
      state.mileage = action.payload;
    },
  },
});

export const { addBrandFilter, addPriceFilter, addMileageFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
