const router = require('express').Router();

router.get('/', function(req, res, next){
    res.send('API Here');
});

module.exports = router;