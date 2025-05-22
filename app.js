'use strict';
const express = require('express');
const dotenv = require('dotenv');
const app = express();

// Load environment variables from .env file
dotenv.config();

const KEY = process.env.KEY;

app.get('/', (req, res) => {
    res.send(`Hello World! from Node.Js + Changes ${KEY}`);
});

app.listen(80, '0.0.0.0', () => {
    console.log('listening on port 80');
});