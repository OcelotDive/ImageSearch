var express = require('express');
var router = express.Router();
var http = require('http');
var https = require('https');

/* GET users listing. */
router.get('/', function(req, res, next) {

    
    console.log('the term is ' + term);
    









    
     res.render('users', {});
    
});



module.exports = router;
