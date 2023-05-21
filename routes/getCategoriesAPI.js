const express = require('express');
const req = require('express/lib/request');


const getCategories = express.Router();
module.exports = getCategories;


// Designing API Gateways

getCategories.get('/getCategoryById/:id', (req, res) => {
    res.send(`get category by id wih id ${req.params.id}`)
})

