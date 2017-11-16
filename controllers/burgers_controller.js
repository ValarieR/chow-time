var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');


router.get('/', (req, res) => {
    burger.getAll((data) => {
        res.render('index', {burgers: data});
    });
});

router.get('/api/burgers', (req, res) => {
    burger.getAll((data) => {
    res.json(data);
    });
});

router.post('/api/devoured/:id', (req, res) => {
    burger.update('devoured', true, req.params.id, (data) => {
    res.send(`${req.params.id}`);
    });
});

module.exports = router;