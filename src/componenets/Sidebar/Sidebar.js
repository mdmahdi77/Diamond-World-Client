import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ServiceDataLoad } from '../../App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faHome, faPenAlt, faCartPlus, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(ServiceDataLoad)
    const [isAdmin, setIsAdmin] = useState(false)

    useEffect(() => {
        fetch('https://peaceful-beach-33523.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])


    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <li className="my-4">
                    <Link to="/" className="text-decoration-none text-light">
                        <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    </Link>
                </li>
                <li className="my-4">
                    <Link to="/bookingList" className="text-decoration-none text-light">
                        <FontAwesomeIcon icon={faUserPlus} /> <span>Booking</span>
                    </Link>
                </li>
                <li className="my-4">
                    <Link to="/review" className="text-decoration-none text-light">
                        <FontAwesomeIcon icon={faPenAlt} /> <span>Review</span>
                    </Link>
                </li>
                { isAdmin && <div>
                    <li className="my-4">
                        <Link to="/addService" className="text-decoration-none text-light">
                            <FontAwesomeIcon icon={faCartPlus} /> <span>Add Service</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/allBooking" className="text-decoration-none text-light">
                            <FontAwesomeIcon icon={faUsers} /> <span>All Booking</span>
                        </Link>
                    </li>
                    <li className="my-4">
                        <Link to="/makeAdmin" className="text-decoration-none text-light">
                            <FontAwesomeIcon icon={faUserShield} /> <span>Make Admin</span>
                        </Link>
                    </li>
                </div>}
            </ul>
            <div className="logOut">
                <Link to="/" className="text-white text-decoration-none"><FontAwesomeIcon icon={faFileAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;