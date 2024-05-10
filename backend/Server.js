// const express = require('express');
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { Pool } from "pg"


const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_database_password',
    port: 5432, // Default PostgreSQL port
});

// Routes
const productsRoutes = import('./routes/products');
const usersRoutes = import('./routes/users');
const ordersRoutes = import('./routes/orders');

app.use('/api/products', productsRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', ordersRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
