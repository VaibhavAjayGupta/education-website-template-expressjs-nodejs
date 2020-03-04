var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Triumph Classes ( Best Coaching Classes )' });
});

/* Get about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Triumph Classes ( Best Coaching Classes )' });
});


/* Get contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Triumph Classes ( Best Coaching Classes )' });
});



module.exports = router;
