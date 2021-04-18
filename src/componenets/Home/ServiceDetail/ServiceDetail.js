import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = ({ service }) => {
    const { img, title, price } = service
    return (
        <Link className="col-md-4 col-sm-6 col-12 my-sm-3 my-3 text-center text-decoration-none" to={`/booking/${service._id}`}>
            <div class="card img-fluid" >
                <img style={{ height: '200px' }} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h4 style={{color: '#080808'}} class="card-title">{title}</h4>
                    <h6 className="text-secondary">Cost: ${price}</h6>
                </div>
            </div>
        </Link>
    );
};

export default ServiceDetail;