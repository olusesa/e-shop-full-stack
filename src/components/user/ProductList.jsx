import React from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
const ProductList = ({ products, addToCart }) => {
    return (
        <div>
        <Heading />
    <Header />
    <Navigation />
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    <Footer/>
            <Footing/>
</div>
    );
}

export default ProductList;
