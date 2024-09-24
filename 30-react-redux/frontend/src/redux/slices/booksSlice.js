import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../src/createBookWithId';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    toggleFavourite: (state, action) => {
      state.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavourite = !book.isFavourite;
        }
      });
    },
  },
});

export const { addBook, deleteBook, toggleFavourite } = booksSlice.actions;

export const thunkFunction = async (dispatch, getState) => {
  axios.get('http://localhost:4000/random-book').then(
    (response) => {
      if (response.data && response.data.title && response.data.author) {
        dispatch(addBook(createBookWithId(response.data, 'API')));
      }
    },
    (error) => {
      console.log(error);
    }
  );
};

export const selectBooks = (state) => state.books;

export default booksSlice.reducer;
