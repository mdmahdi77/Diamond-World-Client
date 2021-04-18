import React from 'react';

const AllBookingList = ({allBookingListDetail}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="secondary">Sr No</th>
                    <th className="secondary">Name</th>
                    <th className="secondary">Products</th>
                    <th className="secondary">Cost</th>
                    <th className="secondary">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    allBookingListDetail.map((bookingList, index) => 
                        <tr>
                            <td>{index + 1}</td>
                            <td>{bookingList.name}</td>
                            <td>{bookingList.title}</td>
                            <td>${bookingList.price}</td>
                            <td>{bookingList.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default AllBookingList;