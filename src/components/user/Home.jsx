import React from 'react';
// import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
// import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
import Index from "../layout/Index.jsx";

const Home = () => {
    return (
        <div>
            <div className="home">
                <Header/>
                <Navigation/>
                <Index/>
            <Footer/>
        </div>
        </div>
    );
};

export default Home;
