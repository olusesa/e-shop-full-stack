import React, { useState } from 'react';
import Heading from '../layout/Heading';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Footing from '../layout/Footing';
import Navigation from '../layout/Navigation';
// const Login = ({ handleLogin }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//
//     const handleSubmit = e => {
//         e.preventDefault();
//         handleLogin(username, password);
//     };
//
//     return (
//         <div>
//         <Heading />
//         <Header />
//         <Navigation />
//         <div className="login">
//             <h2>Login</h2>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     value={username}
//                     onChange={e => setUsername(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={e => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     <Footer/>
//             <Footing/>
//         </div>
//     );
// }

const Login = ({ handleLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Perform client-side validation, if necessary
        if (!username || !password) {
            alert('Please enter both username and password');
            return;
        }

        try {
            // Call handleLogin function passed as prop
            await handleLogin(username, password);
        } catch (error) {
            // Handle login error (e.g., display error message)
            console.error('Login failed:', error.message);
            alert('Login failed. Please try again.');
        }
    };

    return (
        <div>
            <Header />
            <Navigation />
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
            <Footer />
        </div>
        </div>
    );
};


export default Login;
