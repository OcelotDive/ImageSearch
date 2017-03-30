var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    
    console.log(resultNum);
    res.render('index', {title: 'Express'});
});



//latest route



module.exports = router;
