import React from 'react';

const FooterCol = (props) => {
    return (
        <div className="col-md-3 col-sm-4 col-5 offset-1">
            <h6 style={{color: '#ff0c43'}}>{props.menuTitle? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4">
                {
                   props.menuItems.map((item, index) => <li className="text-white" key={index}>{item.name}</li>) 
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;