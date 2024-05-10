// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
//
// function App() {
//   const [count, setCount] = useState(0)
//
//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import 'assets/css/*'
// import Login from './components/auth/Login';
// import Register from './components/auth/Register';
// import AddProduct from './components/admin/AddProduct';
// import Dashboard from './components/admin/Dashboard';
// import ProductList from './components/user/ProductList';
// import Cart from './components/user/Cart';
// import Checkout from './components/user/Checkout';
// import UserDashboard from './components/user/UserDashboard';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/user/Home';

const App = () => {
    // const [user, setUser] = useState(null);
    // const [cart, setCart] = useState([]);
    // const [products, setProducts] = useState([
    //     { id: 1, name: 'Product 1', price: 10 },
    //     { id: 2, name: 'Product 2', price: 20 },
    //     { id: 3, name: 'Product 3', price: 30 }
    // ]);
    //
    // const handleLogin = (username, password) => {
    //     // Logic for handling login
    // };
    //
    // const handleRegister = (username, email, password) => {
    //     // Logic for handling registration
    // };
    //
    // const handleAddProduct = product => {
    //     // Logic for adding product
    // };
    //
    // const addToCart = product => {
    //     setCart([...cart, product]);
    // };
    //
    // const removeFromCart = product => {
    //     setCart(cart.filter(item => item.id !== product.id));
    // };
    //
    // const calculateTotal = () => {
    //     return cart.reduce((total, item) => total + item.price, 0);
    // };
    //
    // const handleCheckout = () => {
    //     // Logic for handling checkout
    // };

    return (
        <div className="App">
            <Home />
            {/*<h1>E-Shop</h1>*/}
            {/*<Router>*/}
            {/*        <Switch>*/}
            {/*            <Route path="/" exact component={Home} />*/}
            {/*            <Route path="/login" component={Login} />*/}
            {/*            <Route path="/register" component={Register} />*/}
            {/*            <Route path="/admin/add-product" component={AddProduct} />*/}
            {/*            <Route path="/admin/dashboard" component={Dashboard} />*/}
            {/*            <Route path="/user/dashboard" component={UserDashboard} />*/}
            {/*            <Route path="/products" component={ProductList} />*/}
            {/*            <Route path="/cart" component={Cart} />*/}
            {/*            <Route path="/checkout" component={Checkout} />*/}
            {/*        </Switch>*/}
            {/*</Router>*/}
            {/*{!user ? (*/}
            {/*    <>*/}
            {/*        <Login handleLogin={handleLogin} />*/}
            {/*        <Register handleRegister={handleRegister} />*/}
            {/*        <Home />*/}
            {/*    </>*/}
            {/*) : user.role === 'admin' ? (*/}
            {/*    <>*/}
            {/*        <AddProduct handleAddProduct={handleAddProduct} />*/}
            {/*        <Dashboard />*/}
            {/*    </>*/}
            {/*) : (*/}
            {/*    <>*/}
            {/*        <UserDashboard user={user} />*/}
            {/*        <ProductList products={products} addToCart={addToCart} />*/}
            {/*        <Cart cart={cart} removeFromCart={removeFromCart} />*/}
            {/*        <Checkout cart={cart} total={calculateTotal()} handleCheckout={handleCheckout} />*/}
            {/*    </>*/}
            {/*)}*/}
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);


export default App
