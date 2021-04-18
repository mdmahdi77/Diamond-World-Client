import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import Sidebar from '../../Sidebar/Sidebar';
import Navbar from '../../Home/Navbar/Navbar';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Booking = () => {
    const { bookId } = useParams()
    const [booking, setBooking] = useState([])

    useEffect(() => {
        fetch('https://peaceful-beach-33523.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setBooking(data))
    },[])

    const bookingData = booking.find(book => book._id == bookId)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [orderData, setOrderData] = useState(null)
    const onSubmit = data => {
        setOrderData(data)
    };

    const handlePaymentSuccess = paymentId => {

        // const orderDetails = {paymentId, order: orderData, orderTime: new Date()}

        fetch('https://peaceful-beach-33523.herokuapp.com/addOrnaments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData, paymentId)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    alert('Order successfully Submitted')
                }
            })
    }



    return (
        <div className="row dashboard-style">
            <Navbar></Navbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{display: orderData ? 'none' : 'block'}} className="col-md-5 dashboard-style-two">
                <h1>Booking ({bookingData?.title})</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="name" placeholder="Your Name" {...register("name", { required: true })} />
                    <br/>
                    <input name="email" placeholder="Your  email" {...register("email", { required: true })} />
                    <br/>
                    <input name="title" placeholder={`${bookingData ? bookingData?.title : 'Service Name'}`} {...register("title", { required: true })} />
                    <br/>
                    <input name="price" placeholder={`${bookingData ? bookingData?.price : 'Price'}`} {...register("price", { required: true })} />
                    <br/>
                    <button className="mainBtn">Submit</button>
                </form>
            </div>
            <div style={{display: orderData ? 'block' : 'none'}} className="col-md-5 dashboard-style-two">
                <h1>Please Pay</h1>
                <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
        </div>
    );
};

export default Booking;