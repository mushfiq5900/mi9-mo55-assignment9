import React from 'react';
import { Card } from 'react-bootstrap';
import './ReviewEach.css'

const ReviewEach = (props) => {
    const { category, name, product, review, comment, img } = props.review
    return (
        <div className='my-5'>
            <Card>
                <Card.Img src={img} />
                <Card.Body>
                    <Card.Title>{product}</Card.Title>
                    <Card.Text>Category: {category}</Card.Text>
                    <Card.Text>Review: {review}</Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Card.Title>Comment of: {name}</Card.Title>
                    <small>{comment}</small>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ReviewEach;