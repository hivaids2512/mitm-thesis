"use strict";
const path = require('path');
const utils = require(path.resolve('./app/lib/utils/utils.lib'));

exports.getCurrentDate = function (req, res) {
    res.status(200).json({
        date: utils.getCurrentDate()
    });
};

