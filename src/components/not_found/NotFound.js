import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const NotFound = () => {
    return (
        <div className='row'>
            <div className='col-lg-12 col-sm-12'>
                <div className='text-center text-danger py-5'>
                    <h1>The page You are Looking for</h1>
                    <h1>Doesn't exist!</h1>
                </div>
                <div className='text-center'>
                    <img src={require('./istockphoto-1142986365-612x612.jpg')} height={500} width={800} alt="" />
                </div>
                <div className='text-center my-5'>
                    <Link className="link-color" to="/"><Button className='btn-warning'>Go to Home</Button></Link>

                </div>
            </div>
        </div>
    );
};

export default NotFound;