import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { carsReducer } from './Cars/carsSlice';
import { filtersReducer } from './Filters/filtersReducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage,
};

export const rootReducer = combineReducers({
    cars: carsReducer,
    filters: filtersReducer,  
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

 export const persistor = persistStore(store);