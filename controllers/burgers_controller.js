var express = require('express');

var router = express.Router();

var burgerJ = require('../models/burger.js');


router.get('/', (req, res) => {
    burgerJ.getAll((data) => {
        res.render('index', {burgers: data});
    });
});

router.get('/api/burgers', (req, res) => {
    burgerJ.getAll((data) => {
    res.json(data);
    });
});

router.post('/api/devoured/:id', (req, res) => {
    burgerJ.update('devoured', true, req.params.id, (data) => {
    res.send(`${req.params.id}`);
    });
});

module.exports = router;