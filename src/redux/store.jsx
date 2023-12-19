import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/carsSlice';
import { filtersReducer } from './Filters/filtersSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigCars = {
  key: 'cars',
  storage,
  whitelist: ['favoriteCarsId'],
};

export const rootReducer = combineReducers({
  cars: persistReducer(persistConfigCars, carsReducer),
  filters: filtersReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
