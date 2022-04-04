import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./productReveiw.css";
import Rating from 'react-rating';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const ProductReveiw = (props) => {
    const { name, image, description, ratings } = props.productReveiwInfo;

    return (
        <div className='single-reveiw-container'>
            <div className='reveiw-image'>
                <img src={image} alt="" />
            </div>
            <div className='reveiw-desc'>
                <h2 className='name'>{name}</h2>
                <p>{description}</p>
                <Rating
                    initialRating={4.6}
                    emptySymbol={<FontAwesomeIcon icon={faStar} />}
                    fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                    readonly
                ></Rating>
                <b>Ratings : {ratings}</b>
            </div>
        </div>
    );
};

export default ProductReveiw;