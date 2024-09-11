import React from 'react';
import { useLocation } from 'react-router-dom';

const Userdetails = () => {
    const location = useLocation();
    const user = location.state?.user; // Optional chaining in case state is not passed

    if (!user) {
        return <div>No user data available</div>;
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user.existingUser.name}</p>
            <p>Email: {user.existingUser.email}</p>
            <p>Address: {user.existingUser.address}</p>
        </div>
    );
};

export default Userdetails;
