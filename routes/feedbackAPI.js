const express = require('express');
const req = require('express/lib/request');

const feedback = express.Router();
module.exports = feedback;


// Designing API Gateways

feedback.get('/getFeedback', (req, res) => {
    res.send("Gets all the requests")
})

feedback.post('/addFeedback', (req, res) => {
    res.send('Adds Feedback')
})
