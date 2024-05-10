const express = require('express');
const router = express.Router();
const { Pool } = import('pg');

const pool = new Pool({
    user: 'your_username',
    host: 'localhost',
    database: 'your_database_name',
    password: 'your_database_password',
    port: 5432, // Default PostgreSQL port
});

// Get all products
router.get('/', async (req, res, next) => {
    try {
        const { rows } = await pool.query('SELECT * FROM products');
        res.json(rows);
    } catch (err) {
        next(err);
    }
});

// Get product by ID
router.get('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const { rows } = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (err) {
        next(err);
    }
});

// Add a new product
router.post('/', async (req, res, next) => {
    const { name, price } = req.body;
    try {
        const { rows } = await pool.query('INSERT INTO products (name, price) VALUES ($1, $2) RETURNING *', [name, price]);
        res.status(201).json(rows[0]);
    } catch (err) {
        next(err);
    }
});

// Update product
router.put('/:id', async (req, res, next) => {
    const { id } = req.params;
    const { name, price } = req.body;
    try {
        const { rows } = await pool.query('UPDATE products SET name = $1, price = $2 WHERE id = $3 RETURNING *', [name, price, id]);
        if (rows.length === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(rows[0]);
        }
    } catch (err) {
        next(err);
    }
});

// Delete product
router.delete('/:id', async (req, res, next) => {
    const { id } = req.params;
    try {
        const { rowCount } = await pool.query('DELETE FROM products WHERE id = $1', [id]);
        if (rowCount === 0) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json({ message: 'Product deleted successfully' });
        }
    } catch (err) {
        next(err);
    }
});

module.exports = router;
