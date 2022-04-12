import React, { useEffect, useState } from 'react';
import ReviewEach from '../reviews/review_each/ReviewEach';
import './Home.css'

const Home = () => {

    return (
        <div>
            <div className='row align-items-center'>
                <div className="col-lg-6 col-md-6 col-sm-12 p-5 banner-text">
                    <h1>Best TV Reviewer</h1>
                    <h4>In Whole BD</h4>
                    <p>This is a tv review website. You will find the best product reviews here. It will help you to decide to pick the correct TV for you.</p>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 mt-5">
                    <img src={require('./images.jpg')} height={500} width={800} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Home;