import React from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import ReviewForm from '../ReviewForm/ReviewForm';


const Dashboard = () => {
    return (
        <section className="dashboard-style">
            <div className="row">
                <Navbar></Navbar>
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10">
                    <ReviewForm></ReviewForm>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;