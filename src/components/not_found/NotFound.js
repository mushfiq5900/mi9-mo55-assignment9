import React from 'react';
const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>The page You are Looking for</h1>
                <h1>Doesn't exist!</h1>
            </div>
            <div className='text-center'>
                <img src={require('./istockphoto-1142986365-612x612.jpg')} height={500} width={800} alt="" />
            </div>
        </div>
    );
};

export default NotFound;