var express = require('express');
var router = express.Router();
let jsObj = { test: 'test', number: 1 };

/**
 * This was an attempt from before that I had a question about 
export const getObj = (req, res) => { 
    res.json(jsObj); 
}; 
 */

//'GET' route for object 
router.get('/testing', function (req, res, next) {
  res.json(jsObj);
});

router.put('/testing', function (req, res, next) {
  jsObj.test = req.body.test; 
  jsObj.number = req.body.number; 

  //prints out the json object postman sends to the server
  //what is this line doing? 
  console.log(req.body);

  //sends back a response to the client
  res.json(jsObj);
});

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
