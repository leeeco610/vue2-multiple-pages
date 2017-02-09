/**
 * Created by Administrator on 2017/2/9.
 */
'use strict';
const Q = require('q');
const $ = require('../models/base');

/**
 *
 */
exports.getHomePage = () => {
    return (defer => {
        let data = {},
            msg = "111";

        defer.resolve({
            msg: msg,
            data: data
        });
        return defer.promise;
    })(Q.defer());
};
