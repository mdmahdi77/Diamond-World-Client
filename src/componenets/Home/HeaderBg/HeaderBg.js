import React from 'react';
import './HeaderBg.css'

const HeaderBg = () => {
    return (
        <div className="background">
            <div className="row container">
                <div className="col-md-8 col-sm-10 col-12 offset-md-4 offset-sm-2 offset-1 my-5 py-5 text-style">
                    <h1 className="mt-5">Diamonds Jewelry Collections</h1>
                    <h3 className="mt-3">Custom Made Jewelry</h3>
                    <button className="mainBtn mt-5">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default HeaderBg;