import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import booksSlice from './slices/booksSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    filter: filterReducer,
  },
});

export default store;
