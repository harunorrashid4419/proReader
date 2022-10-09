import React from 'react';
import { Link } from 'react-router-dom';
import './Book.css';

const Book = ({ book }) => {
    const { isbn13, title, image, price, subtitle } = book;
    return (
        <Link to={`/books/${isbn13}`} className="single-book">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>Price: {price}</p>
            </div>
        </Link>
    );
};

export default Book;