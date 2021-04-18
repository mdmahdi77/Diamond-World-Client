import React from 'react';
import HeaderBg from '../HeaderBg/HeaderBg';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderBg></HeaderBg>
        </div>
    );
};

export default Header;