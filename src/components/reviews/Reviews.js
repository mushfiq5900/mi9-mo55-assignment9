import React, { useEffect, useState } from 'react';
import ReviewEach from './review_each/ReviewEach';
import './Reviews.css'
import useReviews from '../../hooks/useReviews';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    console.log(reviews.length)
    return (
        <div className="container-fluid">
            <h1 className='text-center text-warning my-5'>Here are the all Reviews</h1>
            <div className="row">
                {
                    reviews.map(review => <ReviewEach key={review.id} review={review}></ReviewEach>)
                }
            </div>
        </div>
    );
};

export default Reviews;