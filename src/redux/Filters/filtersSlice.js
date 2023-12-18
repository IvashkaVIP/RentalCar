import { createSlice } from '@reduxjs/toolkit';

const filtersInitialState = {
  brand: '',
  price: null,
  mileage: { from: null, to: null },
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    addFilters(state, action) {
      const { brand, price, mileage } = action.payload;
      state.brand = brand;
      state.price = price;
      state.mileage = mileage;
    },
  },
});

export const { addFilters } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
