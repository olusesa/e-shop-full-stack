import React from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
const Checkout = ({ cart, total, handleCheckout }) => {
    return (
        <div>
        <Heading />
    <Header />
    <Navigation />
        <div className="checkout">
            <h2>Checkout</h2>
            <div>
                <h3>Order Summary</h3>
                {cart.map(item => (
                    <div key={item.id} className="cart-item">
                        <h3>{item.name}</h3>
                        <p>${item.price}</p>
                    </div>
                ))}
                <p>Total: ${total}</p>
                <button onClick={handleCheckout}>Place Order</button>
            </div>
        </div>
    <Footer/>
            <Footing/>
        </div>
    );
}

export default Checkout;
