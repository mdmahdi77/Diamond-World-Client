import React, { useEffect, useState } from 'react';
import david from '../../../images/men-1.jpg'
import jerin from '../../../images/women-3.jpg'
import ryan from '../../../images/men-2.jpg'
import TeamDetail from '../TeamDetail/TeamDetail';

const teamData = [
    {
        name: 'David Rocher',
        title: 'Seller',
        img: david
    },
    {
        name: 'Jerin Khan',
        title: 'Designer',
        img: jerin
    },
    {
        name: 'Ryan Parag',
        title: 'Marketer',
        img: ryan
    }
]

const TeamMember = () => {
    const [members, setMembers] = useState([])
    useEffect(() => {
        setMembers(teamData)
    },[])
    return (
        <section className="my-5 py-5">
            <div className="container">
                <h1 className="text-brand">Our Team Member</h1>
                <div className="row">
                    {
                        members.map(member => <TeamDetail member={member}></TeamDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default TeamMember;