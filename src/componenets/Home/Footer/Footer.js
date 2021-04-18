import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {
    const noNamed = [
        {name: "H#000(4th Floor), Road#00."},
        {name: "New DOHS, Mohakhali, Dhaka, Bangladesh"}
    ]
    const companyList = [
        {name: "About"},
        {name: "Project"},
        {name: "Our Team"},
        {name: "Terms Condition"},
        {name: "Submit Listing"}
    ]
    const quickLinks = [
        {name: "Quick Links"},
        {name: "Rentals"},
        {name: "Sells"},
        {name: "Contact"},
        {name: "Our Blog"}
    ]
    const about = [
        
    ]
    return (
        <section className="footer-area">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={""} menuItems={noNamed}></FooterCol>
                    <FooterCol key={2} menuTitle={"Company"} menuItems={companyList}></FooterCol>
                    <FooterCol key={3} menuTitle={"Quick Links"} menuItems={quickLinks}></FooterCol>
                    <FooterCol key={4} menuTitle={"About Us"} menuItems={about}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-white">Call now</h6>
                            <button className="mainBtn">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center mt-5">
                    <p className="text-secondary">Copyright {new Date().getFullYear()} All Right Reserved</p>
                </div>
            </div>
        </section>
    );
};

export default Footer;