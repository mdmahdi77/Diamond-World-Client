import React, { useContext, useEffect, useState } from 'react';
import { ServiceDataLoad } from '../../../App';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import BookingListTable from '../BookingListTable/BookingListTable';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ServiceDataLoad)
    const [bookingList, setBookingList] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bookingList?email='+loggedInUser.email)
        .then(res => res.json())
        .then(data => {
            setBookingList(data)
            console.log(data)
        })
    },[])

    return (
        <div className="row">
            <Navbar></Navbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10">
                <BookingListTable bookingList={bookingList}></BookingListTable>
            </div>
        </div>
    );
};

export default BookingList;