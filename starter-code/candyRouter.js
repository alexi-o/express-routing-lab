'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();

var candies = [
	{ "id":1, "name": "Chewing Gum", "color": "Red" },
	{ "id":2, "name": "Pez", "color": "Green" },
	{ "id":3, "name": "Marshmellow", "color": "Pink" },
	{ "id":4, "name": "Candy Stick", "color": "Blue" }
];
//What would need to go into candies
//in order to pass our first test?

router.get('/', function(req,res) {
	res.send(candies);
});

router.get('/:num', function (req,res) {
	var num = req.params.num-1;
	res.send(candies[num]);
});

router.post('/', function(req, res) {
	candies.push(req.body);
	res.json(req.body);
});

router.put('/:id', function (req, res) {
	var id = req.params.id-1;
	candies[id].name = req.body.name;
	candies[id].color = req.body.color;
	res.end();
});

router.delete('/:id', function (req, res) {
	var id = req.params.id-1;
	candies[id] = null;
	res.end();
})

module.exports = router;