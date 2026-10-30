// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import layoutReducer from './layoutSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  layout: layoutReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
