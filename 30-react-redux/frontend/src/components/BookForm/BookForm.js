import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../../redux/slices/booksSlice';
import booksData from '../../data/books.json';
import './BookForm.css';
import createBookWithId from '../../src/createBookWithId';
import axios from 'axios';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && author) {
      const book = createBookWithId({ title, author });

      dispatch(addBook(book));

      setTitle('');
      setAuthor('');
    }
  };

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length);
    const randomBook = booksData[randomIndex];
    const randomBookWithId = createBookWithId(randomBook);

    dispatch(addBook(randomBookWithId));
  };

  const handleAddRandomBookViaApi = async () => {
    axios.get('http://localhost:4000/random-book').then(
      (response) => {
        if (response.data && response.data.title && response.data.author) {
          dispatch(addBook(createBookWithId(response.data)));
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author: </label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="Submit">Add book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
        <button type="button" onClick={handleAddRandomBookViaApi}>
          Add random via AI
        </button>
      </form>
    </div>
  );
};

export default BookForm;