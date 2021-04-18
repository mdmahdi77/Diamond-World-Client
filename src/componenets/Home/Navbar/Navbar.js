import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    return (
        <nav class="navbar navbar-expand-lg py-2">
            <div class="container">
                <Link class="navbar-brand logo" to="/">Diamond World</Link>
                <button class="custom-toggler navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link className="nav-link ml-5" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-5" to="/dashboard">Dashboard</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-5" to="/dashboard">Admin</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-5" to="/contact">Contact</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link ml-5" to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;