import React, { useContext, useEffect, useState } from 'react';
import ring from '../../../images/rings.png';
import necklace from '../../../images/necklace.png';
import earRings from '../../../images/earrings.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import { ServiceDataLoad } from '../../../App';

const Service = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServicesData(data))
    },[])

    return (
        <section className="container my-5 py-5">
            <div className="mb-5">
                <h2 className="text-brand">Services We Provide</h2>
            </div>
            <div className="row">
                {
                    servicesData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                }
            </div>
        </section>
    );
};

export default Service;