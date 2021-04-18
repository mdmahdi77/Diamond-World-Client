import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact mt-5 pt-5">
            <div className="container">
                <div className="text-center mb-5 text-white">
                    <h5 style={{ color: '#080808' }}>CONTACT US</h5>
                    <h2 className="text-brand mb-5">Always Connect With Us</h2>
                </div>
                <div className="row">
                    <div className="col-md-8 offset-2 mx-auto">
                        <form action="">
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Email Address" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message"></textarea>
                            </div>
                            <div className="form-group">
                                <button type="button" className="mainBtn mb-5">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;