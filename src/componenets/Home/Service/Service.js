import React, { useEffect, useState } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Service = () => {
    const [servicesData, setServicesData] = useState([])

    useEffect(() => {
        fetch('https://peaceful-beach-33523.herokuapp.com/services')
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