import React from 'react';
import antik from '../../../images/antik.jpg'

const ShowOff = () => {
    return (
        <section className="my-5 py-5">
            <div className="d-flex justify-content-center align-items-center">
                <div className="row container">
                    <div className="col-md-5">
                        <img className="img-fluid" src={antik} alt="" />
                    </div>
                    <div className="col-md-7 mt-4 align-self-center">
                        <h1>Antique<br/> Diamond Necklaces</h1>
                        <p className="my-5 text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga dignissimos dolore delectus ut, neque laborum asperiores cumque magnam at provident totam, eveniet earum doloribus labore corporis fugit sunt rem aperiam praesentium non similique ipsam sequi tenetur. Perferendis atque iure ipsa sit quidem fugiat facilis, voluptatem libero nam eos omnis minima.</p>
                        <button className="mainBtn">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShowOff;