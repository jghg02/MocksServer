var express = require('express');
var router = express.Router();

var myml = require('../services/myml-orders.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JOSUE' });
});

router.get('/purchases-mock/detail/search', myml.purchasesList);

module.exports = router;
