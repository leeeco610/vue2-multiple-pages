/**
 * Created by Administrator on 2017/2/9.
 */
'use strict';
var express = require('express');
var router = express.Router();

const $ = require('../models/base');
const wzpageCtl = require('../controllers/index');


//微致首页
router.get('/', (req, res) => {
    wzpageCtl.getHomePage().then((result) => {
        res.render('index')
    });
});


module.exports = router;


