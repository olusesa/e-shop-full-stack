import React, { useState } from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
const AddProduct = ({ handleAddProduct }) => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        handleAddProduct({ name, price, image });
        setName('');
        setPrice('');
        setImage('');
    };
    return (
        <div>
        <Heading />
        <Header />
        <Navigation />
        <div className="add-product">
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input type="number" placeholder="Price" value={price} onChange={e => setPrice(e.target.value)} />
                <input type="file" onChange={e => setImage(e.target.files[0])} />
                <button type="submit">Add Product</button>
            </form>
        </div>
     <Footer />
    <Footing />
        </div>
    );
}

export default AddProduct;
