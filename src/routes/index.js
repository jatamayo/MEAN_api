const router = require('express').Router();

router.get('/', function(req, res, next){
    res.send('Hello World');    
});

module.exports = router;