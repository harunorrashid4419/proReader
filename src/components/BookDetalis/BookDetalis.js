import React from 'react';
import './BookDetalis.css';
import { useLoaderData } from 'react-router-dom';

const BookDetalis = () => {
    const BookDetalis = useLoaderData();
    console.log(BookDetalis)
    const { publisher, title, image, year, desc, authors, rating, price, pdf } = BookDetalis;
    console.log(authors)
    return (
        <div className='book-details'>
            <img src={image} alt="" />
            <div className="content">
                <div>
                    <p className="new">BRAND NEW</p>
                    <h1>{title}</h1>
                    <p>Author: {authors}</p>
                    <p>Pusbisher: {publisher}</p>
                    <p>Year: {year}</p>
                    <p>Rating: {rating}</p>
                    <p className='description'>{desc.slice(0, 150) + '...'}</p>
                    <div className="button">
                        <a className='download-btn' href={pdf && Object.values(pdf)[0]}>{pdf ? 'Download PDF' : 'Not Available'}</a>
                        <p>Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetalis;