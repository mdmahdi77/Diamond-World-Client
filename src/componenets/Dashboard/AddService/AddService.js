import React, { useState } from 'react';
import Navbar from '../../Home/Navbar/Navbar';
import Sidebar from '../../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageUrl, setImageUrl] = useState(null)

    const onSubmit = data => {
        const eventData = {
            title: data.title,
            price: data.price,
            img: imageUrl
          }
        console.log(data)
        const uri = `http://localhost:5000/addService`
        fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log("server side", res))
        .then(data => {
            if(data){
                alert("Your Services is added successfully")
            }
        })
    };

    const handleImageUrl = event => {
        console.log(event.target.files[0])
        const imageData = new FormData();
        imageData.set('key', '3fdc4394d2aa620592a552e98b379e1c');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', 
        imageData)
        .then(function (response) {
            setImageUrl(response.data.data.display_url);
        })
        .catch(function (error) {
        console.log(error);
        });
    }
    return (
        <div className="row dashboard-style">
            <Navbar></Navbar>
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 dashboard-style-two">
                <h1>Add Service</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input name="exampleRequired" type="file" onChange={handleImageUrl} />
                    <br/>
                    <input name="title" placeholder="Service Title" {...register("title")} />
                    <br/>
                    <input name="price" placeholder="Price" {...register("price")} />
                    <br/>
                    <button className="mainBtn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;