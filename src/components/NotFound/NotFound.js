import React from 'react';

const NotFound = () => {
    return (
        <div className='notFound-container'>
            <h1>Opps!</h1>
            <h5>404-PAGE NOT FOUND</h5>
            <p>The page you are looking for might have been removed had its's name change or is temporarily unavailable.</p>
            <button>GO TO HOMEPAGE</button>
        </div>
    );
};

export default NotFound;