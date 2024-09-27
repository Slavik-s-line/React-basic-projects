import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import booksSlice from './slices/booksSlice';
import errorReducer from './slices/errorSlice';

const store = configureStore({
  reducer: {
    books: booksSlice,
    filter: filterReducer,
    error: errorReducer,
  },
});

export default store;
