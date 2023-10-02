
/* 
File Name: index.server.routes.js
Student's Name: Aishwarya Pawar
Student ID: 301299470
Date: 02-10-2023
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});
router.get('/products', function(req, res, next) {
  res.render('products', { title: 'Products' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

module.exports = router;
