var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

//'get' route for obtaining object example
router.get('/getexample', function (req, res, next) {
  res.json({ name: 'John' });
});

//'post' route example
router.post('/postexample', function (req, res, next) {
  //prints out the json object postman sends to the server
  console.log(req.body);
  //sends back a response to the client
  res.json('post example');
});

module.exports = router;
