import React from 'react';
import { useForm } from "react-hook-form";
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const eventData = {
            email: data.email
          }
        console.log(data)
        const uri = `https://peaceful-beach-33523.herokuapp.com/addAdmin`
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert("Admin added successfully")
            }
        })
    };
    return (
        <div className="row dashboard-style">
            <Navbar></Navbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 dashboard-style-two">
                <h1>Add Admin</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="email" placeholder="Add Email" {...register("email")} />
                    <br/>
                    <button className="mainBtn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;