import React from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
        <Heading />
    <Header />
    <Navigation />
        <div className="cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    {cart.map(item => (
                        <div key={item.id} className="cart-item">
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <button onClick={() => removeFromCart(item)}>Remove</button>
                        </div>
                    ))}
                    <p>Total: ${cart.reduce((total, item) => total + item.price, 0)}</p>
                </>
            )}
        </div>
    <Footer />
            <Footing/>
        </div>
    );
}

export default Cart;
