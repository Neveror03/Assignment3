var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

//infor api
router.get('/info', function(req, res, next) {
    res.json({
        data: {
            fullName: "Nguyen Thanh Phu",
            studentCode: "QE170138"
        }
    });
});



module.exports = router;