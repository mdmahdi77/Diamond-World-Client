import React, { useEffect, useState } from 'react';
import ReviewUi from '../ReviewUi/ReviewUi';

const ReviewList = () => {
    const [reviewList, setReviewList] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviewList')
            .then(res => res.json())
            .then(data => setReviewList(data))
    }, [])
    return (
        <section className="my-5 py-5">
            <div className="container">
                <div className="">
                    <h2 className="text-brand mb-5">Review List</h2>
                </div>
                <div className="row">
                    {
                        reviewList.map(review => <ReviewUi review={review}></ReviewUi>)
                    }
                </div>
            </div>
        </section>
    );
};

export default ReviewList;