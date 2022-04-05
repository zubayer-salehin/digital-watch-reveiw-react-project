import React from 'react';
import { useNavigate } from 'react-router-dom';
import product from "../../images/hero_img.jpg";
import ProductReveiw from '../ProductReveiw/ProductReveiw';
import useReveiw from '../useReveiw';
import "./Home.css";

const Home = () => {
    const [productReveiw] = useReveiw();
    const navigate = useNavigate();
    return (
        <div className='home-container'>
            <div className="product-container">
                <div className="product-description">
                    <h1>There’s An Apple Watch For Everyone.</h1>
                    <p>Understanding all the ways you move throughout the day is an essential part of living a healthy life. Apple Watch shows your daily movement as three simple metrics: Move, Exercise, and Stand.</p>
                    <button>Live demo</button>
                </div>
                <div className="product-picture">
                    <img src={product} alt="" />
                </div>
            </div>
            <div className="customer-reveiw-container">
                <h2 className='customer-title'>Customer Reveiws</h2>
                <div className="customer-reveiw product-container">
                    {productReveiw.slice(0, 3).map(singleReveiw => <ProductReveiw key={Math.random() * 10000} productReveiwInfo={singleReveiw}></ProductReveiw>)}
                </div>
                <div className="see-all-btn">
                    <button onClick={() => navigate("/Reveiws")}>See All Reveiws</button>
                </div>
            </div>
        </div>
    );
};

export default Home;