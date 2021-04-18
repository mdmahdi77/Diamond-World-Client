import React, { useEffect, useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import AllBookingList from '../AllBookingList/AllBookingList';

const AllBooking = () => {
    const [allBookingList, setAllBookingList] = useState([])

    useEffect(() => {
        fetch(`https://peaceful-beach-33523.herokuapp.com/allBookingList`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllBookingList(data)
        })
    },[])
    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <AllBookingList allBookingListDetail={allBookingList}></AllBookingList>
            </div>
        </div>
    );
};

export default AllBooking;