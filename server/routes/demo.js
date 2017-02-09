/**
 * Created by lihaipeng on 16/7/13.
 */
var express = require('express');
var router = express.Router();


router.get(/^(\/)[\w]+(.html)$/,function(req,res){
    res.render('demo' + req.url.split(".")[0]);
});

module.exports = router;