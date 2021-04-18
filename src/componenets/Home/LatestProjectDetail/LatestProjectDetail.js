import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import './LatestProjectDetail.css'


const LatestProjectDetail = ({ project }) => {
    const { img, title, location } = project
    return (
        <div className="col-md-4 col-sm-6 col-12 my-sm-3 my-3 text-center">
            <div class="card" >
                <img style={{height: '200px'}} src={img} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <div className="location">
                        <FontAwesomeIcon className="mr-3" icon={faMapMarkerAlt} />
                        <span className="text-secondary">{location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestProjectDetail;