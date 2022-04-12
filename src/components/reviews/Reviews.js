import React, { useEffect, useState } from 'react';
import ReviewEach from './review_each/ReviewEach';
import './Reviews.css'
import Home from '../home/Home';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    console.log(reviews.length)
    return (
        <div className="row">
            <div className='col-lg-4 m-auto'>
                <h1 className='text-center my-5'>Here are the all Reviews</h1>
                {
                    reviews.map(review => <ReviewEach key={review.id} review={review}></ReviewEach>)
                }
            </div>
        </div>
    );
};

export default Reviews;