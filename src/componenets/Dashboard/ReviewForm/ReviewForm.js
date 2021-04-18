import React from 'react';
import { useForm } from "react-hook-form";
import './ReviewForm.css'


const ReviewForm = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        const reviewData = {
            name: data.name,
            designation: data.designation,
            description: data.description
        }
        console.log(data)
        const url = `http://localhost:5000/addReview`
        fetch(url, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(reviewData)
        })
        .then(res => res.json())
        .then(data => {
            if(data){
                alert('Your Review Successfully')
            }
        })
    };
    
    return (
        <div className="dashboard-style-two">
            <h1>Share Your Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="name" placeholder="Your Name" {...register("name")} />
                <br/>
                <input name="designation" placeholder="Designation" {...register("designation")} />
                <br/>
                <textarea name="description" placeholder="Description" {...register("description")} />
                <br/>
                <button className="mainBtn">Submit</button>
            </form>
        </div>
    );
};

export default ReviewForm;