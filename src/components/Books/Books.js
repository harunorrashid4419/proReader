import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import './Books.css';

const Books = () => {
    const allBooks = useLoaderData();
    const books = allBooks.books;
    return (
        <div className='book-container'>
            {
                books.map(book => <Book key={book.isbn13} book={book}></Book>)
            }
        </div>
    );
};

export default Books;