import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import createBookWithId from '../../src/createBookWithId';
import { setError } from './errorSlice';

const initialState = {
  books: [],
  isLoadingViaApi: false,
};

export const fetchBook = createAsyncThunk(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      thunkAPI.dispatch(setError(error.message));
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    },
    toggleFavourite: (state, action) => {
      state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavourite = !book.isFavourite;
        }
      });
    },
  },

  // extraReducers: {
  //   [fetchBook.pending]: (state) => {
  //     state.isLoadingViaApi = true;
  //   },
  //   [fetchBook.fulfilled]: (state, action) => {
  //     state.isLoadingViaApi = false;
  //     if (action.payload && action.payload.title && action.payload.author) {
  //       state.books.push(createBookWithId(action.payload, 'API'));
  //     }
  //   },
  //   [fetchBook.rejected]: (state) => {
  //     state.isLoadingViaApi = false;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaApi = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaApi = false;
      if (action.payload && action.payload.title && action.payload.author) {
        state.books.push(createBookWithId(action.payload, 'API'));
      }
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaApi = false;
    });
  },
});

export const { addBook, deleteBook, toggleFavourite } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;
export const selectIsLoadingViaApi = (state) => state.books.isLoadingViaApi;

export default booksSlice.reducer;
