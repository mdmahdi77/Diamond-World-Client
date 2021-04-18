import React from 'react';
import './ReviewUi.css'

const ReviewUi = ({review}) => {
    const {name, designation, description} = review
    return (
        <div className="col-md-4 col-sm-6 col-12 my-sm-3 my-3 text-center">
            <div class="card img-fluid" >
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <h6>{designation}</h6>
                    <p className="text-secondary">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewUi;