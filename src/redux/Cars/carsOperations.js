import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://654b644e5b38a59f28eefcaa.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (params, thunkAPI) => {
    try {
      const response = await axios.get('/advert', { params });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addFavoriteCar = createAction('cars/addFavorite');
export const deleteFavoriteCar = createAction('cars/deleteFavorite');
