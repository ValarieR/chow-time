var express = require('express');

var router = express.Router();

var burger = require('../models/burger.js');


router.get('/', function (req, res)  {
    burger.selectAll( function (data) {
        console.log(data);
        res.render('index', {burgers: data});
    });
});

router.get('/api/burgers', function (req, res) {
    burger.selectAll( function (data) {
    res.json(data);
    });
});

router.post('/api/devoured/:id', function (req, res) {
    burger.updateOne('devoured', true, req.params.id, function (data) {
    res.send(`${req.params.id}`);
    });
});

module.exports = router;