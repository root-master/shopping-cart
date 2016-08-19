var express = require('express');
var router = express.Router();
var Flowers = require('../models/flower');

/* GET home page. */
router.get('/', function(req, res, next) {
  //Flowers.find(function(err,docs){
    res.render('menu/index', { title: 'Jahnetics', flowers:docs});
  //});
});

module.exports = router;
