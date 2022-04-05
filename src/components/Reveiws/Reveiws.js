import React from 'react';
import ProductReveiw from '../ProductReveiw/ProductReveiw';
import useReveiw from '../useReveiw';
import "./Reveiws.css";


const Reveiws = () => {
    const [productReveiw] = useReveiw();

    return (
        <div>
            <h3 className='reveiw-route-title'>What Our Customer Say!</h3>
            <div className='reveiws-container product-container'>
                {productReveiw.map(singleReveiw => <ProductReveiw key={Math.random() * 10000} productReveiwInfo={singleReveiw}></ProductReveiw>)}
            </div>
        </div>
    );
};

export default Reveiws;