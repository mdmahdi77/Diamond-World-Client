import React from 'react';
import monoChrome from '../../../images/1.jpg';
import bracelet from '../../../images/2.jpg';
import rings from '../../../images/ (3).jpg'
import LatestProjectDetail from '../LatestProjectDetail/LatestProjectDetail';

const projectData = [
    {
        img: monoChrome,
        title: 'Monochrome Ring',
        location: 'Rajshahi, Bangladesh'
    },
    {
        img: bracelet,
        title: 'Portlligat Golden Earrings',
        location: 'Dhaka, Bangladesh'
    },
    {
        img: rings,
        title: 'Miro Jewelry Golden Bracelet',
        location: 'Chittagong, Bangladesh'
    }
]

const LatestProject = () => {
    return (
        <section className="latest my-5 py-5">
            <div className="container">
                <div className="">
                    <h2 className="text-brand mb-5">New Collection Coming Soon</h2>
                </div>
                <div className="row">
                    {
                        projectData.map(project => <LatestProjectDetail project={project}></LatestProjectDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default LatestProject;