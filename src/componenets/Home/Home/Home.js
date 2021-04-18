import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import LatestProject from '../LatestProject/LatestProject';
import ReviewList from '../ReviewList/ReviewList';
import Service from '../Service/Service';
import ShowOff from '../ShowOff/ShowOff';
import TeamMember from '../TeamMember/TeamMember';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <LatestProject></LatestProject>
            <ShowOff></ShowOff>
            <ReviewList></ReviewList>
            <TeamMember></TeamMember>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;