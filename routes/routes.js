const express = require('express');
const req = require('express/lib/request');

const router = express.Router();
module.exports = router;


// Designing API Gateways

router.get('/users/:id', (req, res) => {
    res.send('Get All Users with params '+req.params.id)
})