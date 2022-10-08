import React from 'react';
import './Book.css';

const Book = ({ book }) => {
    const { title, image, price, subtitle } = book;
    return (
        <a href="" className="single-book">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="content">
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>Price: {price}</p>
            </div>
        </a>
    );
};

export default Book;