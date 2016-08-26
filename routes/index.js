var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST placeholder */
router.post('/tweets', function(req, res, next) {
  res.json({});
});

module.exports = router;
