import React from 'react';
import PropTypes from 'prop-types';

export default function Card({ id, title, image, instructor }) {
    return (
    <div className='card'>
        < img src={image} alt="" className='card-img-top' />
        <div className='card-body'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
            Instructor: {instructor}
        </p>
        <a href='#!' className='btn btn-outline-secondary rounded-0'>
            Conocer mas...
        </a>
        </div>
    </div>
    );
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
};

