import React from 'react';
import './TeamDetal.css'

const TeamDetail = ({member}) => {
    const {name, title, img} = member
    return (
        <div className="col-md-4 col-sm-6 col-12 my-md-5 my-sm-5 my-3 member text-center">
            <img src={img} alt=""/>
            <h4 className="my-2">{name}</h4>
            <h6 className="text-secondary">{title}</h6>
        </div>
    );
};

export default TeamDetail;