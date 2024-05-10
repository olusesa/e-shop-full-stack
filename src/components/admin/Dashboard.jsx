import React from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
const Dashboard = () => {
    return (
    <div>
        <Heading />
    <Header />
    <Navigation />
        <div className="dashboard">
            <h2>Admin Dashboard</h2>
            <div className="admin-stats">
                <h3>Statistics</h3>
                <p>Total number of products: 10</p>
                <p>Total number of users: 100</p>
                {/* Add more statistics here */}
            </div>
            <div className="admin-actions">
                <h3>Actions</h3>
                <button>Add New Product</button>
                <button>Manage Users</button>
                {/* Add more actions here */}
            </div>
        </div>
    <Footer />
        <Footing/>
    </div>
    );
}

export default Dashboard;
