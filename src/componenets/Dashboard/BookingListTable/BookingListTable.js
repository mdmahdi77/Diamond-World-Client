import React from 'react';

const BookingListTable = ({bookingList}) => {
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
                    bookingList.map((booking, index) => 
                        <tr>
                            <td>{index + 1}</td>
                            <td>{booking.name}</td>
                            <td>{booking.title}</td>
                            <td>${booking.price}</td>
                            <td>{booking.email}</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default BookingListTable;