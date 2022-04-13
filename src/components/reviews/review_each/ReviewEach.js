import React from 'react';
import './ReviewEach.css'

const ReviewEach = (props) => {
    const { category, name, product, review, comment, img } = props.review
    return (
        <div className='col-lg-4'>
            <div class="card my-5">
                <img src={img} class="card-img-top" alt={product} height="400" />
                <div class="card-body">
                    <h5 class="card-title">{product}</h5>
                    <p class="card-text">Category: {category}</p>
                    <p class="card-text">Review: {review}</p>
                    <div class="card-footer text-muted">
                        <h5 class="card-title">Comment of: {name}</h5>
                        <small>{comment}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewEach;