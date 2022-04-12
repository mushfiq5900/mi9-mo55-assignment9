import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReviewEach from '../reviews/review_each/ReviewEach';
import './Home.css'

const Home = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(response => response.json())
            .then(data => setReviews(data))
    }, [])
    const threeReview = reviews.slice(0, 3)
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
            <div className="row">
                <div className='col-lg-4 m-auto'>
                    <h1 className='text-center my-5'>Here are the top Reviews</h1>
                    {
                        threeReview.map(review => <ReviewEach key={review.id} review={review}></ReviewEach>)
                    }
                </div>
            </div>
            <div className='text-center'>
                <Link className="link-color" to="/reviews"><Button>See All Reviews</Button></Link>

            </div>
        </div>
    );
};

export default Home;