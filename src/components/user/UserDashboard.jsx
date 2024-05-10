import React from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';

const UserDashboard = ({ user }) => {
    return (
        <div>
        <Heading />
    <Header />
    <Navigation />
        <div className="user-dashboard">
            <h2>User Dashboard</h2>
            <div className="user-info">
                <h3>Welcome, {user.username}!</h3>
                <p>Email: {user.email}</p>
                {/* You can display more user information here */}
            </div>
            <div className="user-actions">
                <h3>Actions</h3>
                <button>View Orders</button>
                <button>Edit Profile</button>
                {/* You can add more user actions here */}
            </div>
        </div>
        <Footer/>
            <Footing/>
        </div>
    );
};

export default UserDashboard;
