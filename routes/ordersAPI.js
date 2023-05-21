const express = require('express');
const req = require('express/lib/request');

const Orders = express.Router();
module.exports = Orders;


// Designing API Gateways

Orders.get('/addsOrder', (req, res) => {
    res.send('Adds Order')
})

